-- Data-free Zimbabwe baseline from PDthePlug/Applied-Commerce-Za bb1e0664c92ebf2d0363f58d91a935b75367c311.

-- 20261009232116_ac_zw_platform_foundation.sql
-- AC Zimbabwe platform foundation, adapted from the audited AC schema-only baseline.
-- Deliberately preserves source Grade 8-12 / Term 1-4 identities internally; Zimbabwe delivery mapping remains in the curriculum layer.
-- No South African user data, memberships, evidence rows, credentials or role assignments are copied.
create extension if not exists pgcrypto;

create schema if not exists public;

create schema if not exists private;

create table private.platform_admins (user_id uuid not null, status text default 'active'::text not null, granted_by uuid, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.assessment_attempts (id uuid default gen_random_uuid() not null, learner_id uuid not null, curriculum_release_id uuid not null, unit_id text not null, attempt_number integer not null, status text default 'in_progress'::text not null, score numeric(6,2), result jsonb default '{}'::jsonb not null, started_at timestamp with time zone default now() not null, submitted_at timestamp with time zone, reviewed_at timestamp with time zone);

create table public.audit_events (id uuid default gen_random_uuid() not null, actor_user_id uuid, school_id uuid, event_type text not null, entity_type text, entity_id uuid, metadata jsonb default '{}'::jsonb not null, occurred_at timestamp with time zone default now() not null);

create table public.cohort_enrolments (id uuid default gen_random_uuid() not null, cohort_id uuid not null, learner_id uuid not null, status text default 'active'::text not null, enrolled_at timestamp with time zone default now() not null, completed_at timestamp with time zone, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.cohort_staff (id uuid default gen_random_uuid() not null, cohort_id uuid not null, user_id uuid not null, role text default 'educator'::text not null, status text default 'active'::text not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.cohorts (id uuid default gen_random_uuid() not null, school_id uuid not null, name text not null, grade smallint not null, academic_year integer not null, status text default 'active'::text not null, starts_on date, ends_on date, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.curriculum_releases (id uuid default gen_random_uuid() not null, release_key text not null, source_release_key text, runtime_format_version smallint default 3 not null, compiler_version text not null, schema_version integer not null, published_at timestamp with time zone, metadata jsonb default '{}'::jsonb not null, created_at timestamp with time zone default now() not null);

create table public.evidence_definitions (id uuid default gen_random_uuid() not null, curriculum_key text not null, grade smallint not null, term smallint not null, lesson_number integer, unit_id text not null, unit_title text not null, prompt_id text not null, slot text not null, prompt_text text not null, development_stage text not null, evidence_kind text not null, domains text[] default '{}'::text[] not null, assessment_mode text not null, rubric_key text, portfolio_eligible boolean default false not null, deterministic_rule jsonb default '{"kind": "presence"}'::jsonb not null, version integer default 1 not null, active boolean default true not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.evidence_records (id uuid default gen_random_uuid() not null, learner_id uuid not null, definition_id uuid, response_key text not null, response_value text not null, auto_result jsonb default '{}'::jsonb not null, status text default 'captured'::text not null, captured_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.evidence_report_snapshots (id uuid default gen_random_uuid() not null, learner_id uuid, generated_by uuid, report_type text default 'learner-evidence'::text not null, period jsonb default '{}'::jsonb not null, metrics jsonb default '{}'::jsonb not null, narrative jsonb default '{}'::jsonb not null, generated_at timestamp with time zone default now() not null);

create table public.evidence_reviews (id uuid default gen_random_uuid() not null, evidence_record_id uuid not null, reviewer_id uuid not null, rubric_key text, status text not null, criteria_scores jsonb default '{}'::jsonb not null, feedback text default ''::text not null, reviewed_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.learner_profiles (user_id uuid not null, current_grade smallint, preferred_name text, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.lesson_notes (id uuid default gen_random_uuid() not null, learner_id uuid not null, curriculum_version text default '2026.1'::text not null, grade smallint not null, term smallint not null, unit_id text not null, note text default ''::text not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null, curriculum_release_id uuid);

create table public.lesson_progress (id uuid default gen_random_uuid() not null, learner_id uuid not null, curriculum_version text default '2026.1'::text not null, grade smallint not null, term smallint not null, unit_id text not null, status text default 'in_progress'::text not null, started_at timestamp with time zone, last_opened_at timestamp with time zone, completed_at timestamp with time zone, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null, curriculum_release_id uuid);

create table public.portfolio_artifacts (id uuid default gen_random_uuid() not null, learner_id uuid not null, curriculum_version text default '2026.1'::text not null, grade smallint not null, term smallint not null, unit_id text not null, marker_key text not null, title text not null, artifact_type text default 'curriculum_evidence'::text not null, status text default 'captured'::text not null, captured_at timestamp with time zone default now() not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null, curriculum_release_id uuid);

create table public.portfolio_evidence (id uuid default gen_random_uuid() not null, artifact_id uuid not null, prompt_response_id uuid not null, label text, "position" integer default 0 not null, created_at timestamp with time zone default now() not null, curriculum_release_id uuid);

create table public.profiles (id uuid not null, display_name text, status text default 'active'::text not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.prompt_responses (id uuid default gen_random_uuid() not null, learner_id uuid not null, curriculum_version text default '2026.1'::text not null, grade smallint not null, term smallint not null, unit_id text not null, prompt_key text not null, response_kind text default 'text'::text not null, response jsonb not null, answered_at timestamp with time zone default now() not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null, curriculum_release_id uuid);

create table public.rubric_criteria (id uuid default gen_random_uuid() not null, rubric_key text not null, criterion_key text not null, label text not null, description text not null, weight numeric(8,4) default 1 not null, levels jsonb not null, "position" integer default 0 not null);

create table public.rubric_templates (key text not null, name text not null, purpose text not null, version integer default 1 not null, active boolean default true not null, created_at timestamp with time zone default now() not null);

create table public.school_memberships (id uuid default gen_random_uuid() not null, school_id uuid not null, user_id uuid not null, role text not null, status text default 'active'::text not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

create table public.schools (id uuid default gen_random_uuid() not null, name text not null, slug text not null, status text default 'active'::text not null, metadata jsonb default '{}'::jsonb not null, created_at timestamp with time zone default now() not null, updated_at timestamp with time zone default now() not null);

alter table private.platform_admins add constraint platform_admins_pkey PRIMARY KEY (user_id);

alter table private.platform_admins add constraint platform_admins_status_check CHECK ((status = ANY (ARRAY['active'::text, 'disabled'::text])));

alter table public.assessment_attempts add constraint assessment_attempts_attempt_number_check CHECK ((attempt_number > 0));

alter table public.assessment_attempts add constraint assessment_attempts_learner_id_curriculum_release_id_unit_i_key UNIQUE (learner_id, curriculum_release_id, unit_id, attempt_number);

alter table public.assessment_attempts add constraint assessment_attempts_pkey PRIMARY KEY (id);

alter table public.assessment_attempts add constraint assessment_attempts_status_check CHECK ((status = ANY (ARRAY['in_progress'::text, 'submitted'::text, 'reviewed'::text])));

alter table public.audit_events add constraint audit_events_pkey PRIMARY KEY (id);

alter table public.cohort_enrolments add constraint cohort_enrolments_cohort_id_learner_id_key UNIQUE (cohort_id, learner_id);

alter table public.cohort_enrolments add constraint cohort_enrolments_pkey PRIMARY KEY (id);

alter table public.cohort_enrolments add constraint cohort_enrolments_status_check CHECK ((status = ANY (ARRAY['invited'::text, 'active'::text, 'completed'::text, 'withdrawn'::text])));

alter table public.cohort_staff add constraint cohort_staff_cohort_id_user_id_key UNIQUE (cohort_id, user_id);

alter table public.cohort_staff add constraint cohort_staff_pkey PRIMARY KEY (id);

alter table public.cohort_staff add constraint cohort_staff_role_check CHECK ((role = ANY (ARRAY['lead'::text, 'educator'::text, 'assistant'::text])));

alter table public.cohort_staff add constraint cohort_staff_status_check CHECK ((status = ANY (ARRAY['active'::text, 'disabled'::text])));

alter table public.cohorts add constraint cohorts_academic_year_check CHECK (((academic_year >= 2020) AND (academic_year <= 2100)));

alter table public.cohorts add constraint cohorts_grade_check CHECK (((grade >= 8) AND (grade <= 12)));

alter table public.cohorts add constraint cohorts_pkey PRIMARY KEY (id);

alter table public.cohorts add constraint cohorts_school_id_name_academic_year_key UNIQUE (school_id, name, academic_year);

alter table public.cohorts add constraint cohorts_status_check CHECK ((status = ANY (ARRAY['draft'::text, 'active'::text, 'completed'::text, 'archived'::text])));

alter table public.curriculum_releases add constraint curriculum_releases_pkey PRIMARY KEY (id);

alter table public.curriculum_releases add constraint curriculum_releases_release_key_key UNIQUE (release_key);

alter table public.evidence_definitions add constraint evidence_definitions_assessment_mode_check CHECK ((assessment_mode = ANY (ARRAY['rubric'::text, 'verification'::text, 'deterministic'::text, 'unscored'::text])));

alter table public.evidence_definitions add constraint evidence_definitions_curriculum_key_key UNIQUE (curriculum_key);

alter table public.evidence_definitions add constraint evidence_definitions_development_stage_check CHECK ((development_stage = ANY (ARRAY['self-awareness'::text, 'agency'::text, 'strategy'::text, 'architecture'::text, 'adult-execution'::text])));

alter table public.evidence_definitions add constraint evidence_definitions_grade_check CHECK (((grade >= 8) AND (grade <= 12)));

alter table public.evidence_definitions add constraint evidence_definitions_pkey PRIMARY KEY (id);

alter table public.evidence_definitions add constraint evidence_definitions_term_check CHECK (((term >= 1) AND (term <= 4)));

alter table public.evidence_records add constraint evidence_records_learner_id_response_key_key UNIQUE (learner_id, response_key);

alter table public.evidence_records add constraint evidence_records_pkey PRIMARY KEY (id);

alter table public.evidence_records add constraint evidence_records_status_check CHECK ((status = ANY (ARRAY['captured'::text, 'in-review'::text, 'accepted'::text, 'needs-revision'::text, 'verified'::text])));

alter table public.evidence_report_snapshots add constraint evidence_report_snapshots_pkey PRIMARY KEY (id);

alter table public.evidence_reviews add constraint evidence_reviews_evidence_record_id_reviewer_id_key UNIQUE (evidence_record_id, reviewer_id);

alter table public.evidence_reviews add constraint evidence_reviews_pkey PRIMARY KEY (id);

alter table public.evidence_reviews add constraint evidence_reviews_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'accepted'::text, 'needs-revision'::text, 'verified'::text])));

alter table public.learner_profiles add constraint learner_profiles_current_grade_check CHECK (((current_grade >= 8) AND (current_grade <= 12)));

alter table public.learner_profiles add constraint learner_profiles_pkey PRIMARY KEY (user_id);

alter table public.lesson_notes add constraint lesson_notes_grade_check CHECK (((grade >= 8) AND (grade <= 12)));

alter table public.lesson_notes add constraint lesson_notes_learner_id_curriculum_version_unit_id_key UNIQUE (learner_id, curriculum_version, unit_id);

alter table public.lesson_notes add constraint lesson_notes_pkey PRIMARY KEY (id);

alter table public.lesson_notes add constraint lesson_notes_term_check CHECK (((term >= 1) AND (term <= 4)));

alter table public.lesson_progress add constraint lesson_progress_grade_check CHECK (((grade >= 8) AND (grade <= 12)));

alter table public.lesson_progress add constraint lesson_progress_learner_id_curriculum_version_unit_id_key UNIQUE (learner_id, curriculum_version, unit_id);

alter table public.lesson_progress add constraint lesson_progress_pkey PRIMARY KEY (id);

alter table public.lesson_progress add constraint lesson_progress_status_check CHECK ((status = ANY (ARRAY['not_started'::text, 'in_progress'::text, 'completed'::text])));

alter table public.lesson_progress add constraint lesson_progress_term_check CHECK (((term >= 1) AND (term <= 4)));

alter table public.portfolio_artifacts add constraint portfolio_artifacts_artifact_type_check CHECK ((artifact_type = ANY (ARRAY['curriculum_evidence'::text, 'project'::text, 'assessment'::text, 'reflection'::text, 'other'::text])));

alter table public.portfolio_artifacts add constraint portfolio_artifacts_grade_check CHECK (((grade >= 8) AND (grade <= 12)));

alter table public.portfolio_artifacts add constraint portfolio_artifacts_learner_id_curriculum_version_unit_id_m_key UNIQUE (learner_id, curriculum_version, unit_id, marker_key);

alter table public.portfolio_artifacts add constraint portfolio_artifacts_pkey PRIMARY KEY (id);

alter table public.portfolio_artifacts add constraint portfolio_artifacts_status_check CHECK ((status = ANY (ARRAY['captured'::text, 'ready'::text, 'submitted'::text, 'archived'::text])));

alter table public.portfolio_artifacts add constraint portfolio_artifacts_term_check CHECK (((term >= 1) AND (term <= 4)));

alter table public.portfolio_evidence add constraint portfolio_evidence_artifact_id_prompt_response_id_key UNIQUE (artifact_id, prompt_response_id);

alter table public.portfolio_evidence add constraint portfolio_evidence_pkey PRIMARY KEY (id);

alter table public.portfolio_evidence add constraint portfolio_evidence_position_check CHECK (("position" >= 0));

alter table public.profiles add constraint profiles_pkey PRIMARY KEY (id);

alter table public.profiles add constraint profiles_status_check CHECK ((status = ANY (ARRAY['active'::text, 'disabled'::text])));

alter table public.prompt_responses add constraint prompt_responses_grade_check CHECK (((grade >= 8) AND (grade <= 12)));

alter table public.prompt_responses add constraint prompt_responses_learner_id_curriculum_version_unit_id_prom_key UNIQUE (learner_id, curriculum_version, unit_id, prompt_key);

alter table public.prompt_responses add constraint prompt_responses_pkey PRIMARY KEY (id);

alter table public.prompt_responses add constraint prompt_responses_response_kind_check CHECK ((response_kind = ANY (ARRAY['text'::text, 'choice'::text, 'table'::text, 'multi'::text, 'date'::text, 'number'::text, 'other'::text])));

alter table public.prompt_responses add constraint prompt_responses_term_check CHECK (((term >= 1) AND (term <= 4)));

alter table public.rubric_criteria add constraint rubric_criteria_pkey PRIMARY KEY (id);

alter table public.rubric_criteria add constraint rubric_criteria_rubric_key_criterion_key_key UNIQUE (rubric_key, criterion_key);

alter table public.rubric_templates add constraint rubric_templates_pkey PRIMARY KEY (key);

alter table public.school_memberships add constraint school_memberships_pkey PRIMARY KEY (id);

alter table public.school_memberships add constraint school_memberships_role_check CHECK ((role = ANY (ARRAY['owner'::text, 'admin'::text, 'educator'::text])));

alter table public.school_memberships add constraint school_memberships_school_id_user_id_key UNIQUE (school_id, user_id);

alter table public.school_memberships add constraint school_memberships_status_check CHECK ((status = ANY (ARRAY['invited'::text, 'active'::text, 'disabled'::text])));

alter table public.schools add constraint schools_pkey PRIMARY KEY (id);

alter table public.schools add constraint schools_slug_key UNIQUE (slug);

alter table public.schools add constraint schools_status_check CHECK ((status = ANY (ARRAY['active'::text, 'inactive'::text, 'archived'::text])));

alter table private.platform_admins add constraint platform_admins_granted_by_fkey FOREIGN KEY (granted_by) REFERENCES auth.users(id) ON DELETE SET NULL;

alter table private.platform_admins add constraint platform_admins_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE RESTRICT;

alter table public.assessment_attempts add constraint assessment_attempts_curriculum_release_id_fkey FOREIGN KEY (curriculum_release_id) REFERENCES curriculum_releases(id) ON DELETE RESTRICT;

alter table public.assessment_attempts add constraint assessment_attempts_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES auth.users(id) ON DELETE CASCADE;

alter table public.audit_events add constraint audit_events_actor_user_id_fkey FOREIGN KEY (actor_user_id) REFERENCES auth.users(id) ON DELETE SET NULL;

alter table public.audit_events add constraint audit_events_school_id_fkey FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE SET NULL;

alter table public.cohort_enrolments add constraint cohort_enrolments_cohort_id_fkey FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE;

alter table public.cohort_enrolments add constraint cohort_enrolments_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES profiles(id) ON DELETE CASCADE;

alter table public.cohort_staff add constraint cohort_staff_cohort_id_fkey FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE;

alter table public.cohort_staff add constraint cohort_staff_user_id_fkey FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

alter table public.cohorts add constraint cohorts_school_id_fkey FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE;

alter table public.evidence_records add constraint evidence_records_definition_id_fkey FOREIGN KEY (definition_id) REFERENCES evidence_definitions(id) ON DELETE SET NULL;

alter table public.evidence_records add constraint evidence_records_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES auth.users(id) ON DELETE CASCADE;

alter table public.evidence_report_snapshots add constraint evidence_report_snapshots_generated_by_fkey FOREIGN KEY (generated_by) REFERENCES auth.users(id) ON DELETE SET NULL;

alter table public.evidence_report_snapshots add constraint evidence_report_snapshots_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES auth.users(id) ON DELETE CASCADE;

alter table public.evidence_reviews add constraint evidence_reviews_evidence_record_id_fkey FOREIGN KEY (evidence_record_id) REFERENCES evidence_records(id) ON DELETE CASCADE;

alter table public.evidence_reviews add constraint evidence_reviews_reviewer_id_fkey FOREIGN KEY (reviewer_id) REFERENCES auth.users(id) ON DELETE RESTRICT;

alter table public.evidence_reviews add constraint evidence_reviews_rubric_key_fkey FOREIGN KEY (rubric_key) REFERENCES rubric_templates(key) ON DELETE SET NULL;

alter table public.learner_profiles add constraint learner_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

alter table public.lesson_notes add constraint lesson_notes_curriculum_release_id_fkey FOREIGN KEY (curriculum_release_id) REFERENCES curriculum_releases(id) ON DELETE RESTRICT;

alter table public.lesson_notes add constraint lesson_notes_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES profiles(id) ON DELETE CASCADE;

alter table public.lesson_progress add constraint lesson_progress_curriculum_release_id_fkey FOREIGN KEY (curriculum_release_id) REFERENCES curriculum_releases(id) ON DELETE RESTRICT;

alter table public.lesson_progress add constraint lesson_progress_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES profiles(id) ON DELETE CASCADE;

alter table public.portfolio_artifacts add constraint portfolio_artifacts_curriculum_release_id_fkey FOREIGN KEY (curriculum_release_id) REFERENCES curriculum_releases(id) ON DELETE RESTRICT;

alter table public.portfolio_artifacts add constraint portfolio_artifacts_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES profiles(id) ON DELETE CASCADE;

alter table public.portfolio_evidence add constraint portfolio_evidence_artifact_id_fkey FOREIGN KEY (artifact_id) REFERENCES portfolio_artifacts(id) ON DELETE CASCADE;

alter table public.portfolio_evidence add constraint portfolio_evidence_curriculum_release_id_fkey FOREIGN KEY (curriculum_release_id) REFERENCES curriculum_releases(id) ON DELETE RESTRICT;

alter table public.portfolio_evidence add constraint portfolio_evidence_prompt_response_id_fkey FOREIGN KEY (prompt_response_id) REFERENCES prompt_responses(id) ON DELETE CASCADE;

alter table public.profiles add constraint profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

alter table public.prompt_responses add constraint prompt_responses_curriculum_release_id_fkey FOREIGN KEY (curriculum_release_id) REFERENCES curriculum_releases(id) ON DELETE RESTRICT;

alter table public.prompt_responses add constraint prompt_responses_learner_id_fkey FOREIGN KEY (learner_id) REFERENCES profiles(id) ON DELETE CASCADE;

alter table public.rubric_criteria add constraint rubric_criteria_rubric_key_fkey FOREIGN KEY (rubric_key) REFERENCES rubric_templates(key) ON DELETE CASCADE;

alter table public.school_memberships add constraint school_memberships_school_id_fkey FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE;

alter table public.school_memberships add constraint school_memberships_user_id_fkey FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

CREATE INDEX assessment_attempts_learner_idx ON public.assessment_attempts USING btree (learner_id);

CREATE INDEX assessment_attempts_release_unit_idx ON public.assessment_attempts USING btree (curriculum_release_id, unit_id);

CREATE INDEX audit_events_actor_idx ON public.audit_events USING btree (actor_user_id);

CREATE INDEX audit_events_occurred_idx ON public.audit_events USING btree (occurred_at DESC);

CREATE INDEX audit_events_school_idx ON public.audit_events USING btree (school_id);

CREATE INDEX cohort_enrolments_cohort_idx ON public.cohort_enrolments USING btree (cohort_id, status, learner_id);

CREATE UNIQUE INDEX cohort_enrolments_cohort_learner_uidx ON public.cohort_enrolments USING btree (cohort_id, learner_id);

CREATE INDEX cohort_enrolments_learner_cohort_idx ON public.cohort_enrolments USING btree (learner_id, cohort_id);

CREATE INDEX cohort_enrolments_learner_idx ON public.cohort_enrolments USING btree (learner_id, status, cohort_id);

CREATE UNIQUE INDEX cohort_staff_cohort_user_uidx ON public.cohort_staff USING btree (cohort_id, user_id);

CREATE INDEX cohort_staff_user_cohort_idx ON public.cohort_staff USING btree (user_id, cohort_id);

CREATE INDEX cohort_staff_user_idx ON public.cohort_staff USING btree (user_id, status, cohort_id);

CREATE INDEX cohorts_school_grade_idx ON public.cohorts USING btree (school_id, academic_year, grade, status);

CREATE INDEX cohorts_school_status_idx ON public.cohorts USING btree (school_id, status);

CREATE INDEX evidence_definitions_grade_term_idx ON public.evidence_definitions USING btree (grade, term);

CREATE INDEX evidence_records_definition_idx ON public.evidence_records USING btree (definition_id);

CREATE INDEX evidence_records_learner_updated_idx ON public.evidence_records USING btree (learner_id, updated_at DESC);

CREATE INDEX evidence_report_snapshots_generated_by_idx ON public.evidence_report_snapshots USING btree (generated_by);

CREATE INDEX evidence_report_snapshots_learner_idx ON public.evidence_report_snapshots USING btree (learner_id, generated_at DESC);

CREATE INDEX evidence_reviews_record_idx ON public.evidence_reviews USING btree (evidence_record_id);

CREATE INDEX evidence_reviews_reviewer_idx ON public.evidence_reviews USING btree (reviewer_id);

CREATE INDEX evidence_reviews_rubric_idx ON public.evidence_reviews USING btree (rubric_key);

CREATE INDEX lesson_notes_learner_idx ON public.lesson_notes USING btree (learner_id, updated_at DESC);

CREATE INDEX lesson_notes_release_idx ON public.lesson_notes USING btree (curriculum_release_id);

CREATE INDEX lesson_progress_learner_idx ON public.lesson_progress USING btree (learner_id, grade, term, updated_at DESC);

CREATE INDEX lesson_progress_release_idx ON public.lesson_progress USING btree (curriculum_release_id, unit_id);

CREATE UNIQUE INDEX lesson_progress_release_unit_unique ON public.lesson_progress USING btree (learner_id, curriculum_release_id, unit_id) WHERE (curriculum_release_id IS NOT NULL);

CREATE INDEX portfolio_artifacts_learner_idx ON public.portfolio_artifacts USING btree (learner_id, grade, term, captured_at DESC);

CREATE INDEX portfolio_artifacts_release_idx ON public.portfolio_artifacts USING btree (curriculum_release_id);

CREATE INDEX portfolio_evidence_artifact_idx ON public.portfolio_evidence USING btree (artifact_id, "position");

CREATE INDEX portfolio_evidence_release_idx ON public.portfolio_evidence USING btree (curriculum_release_id);

CREATE INDEX portfolio_evidence_response_idx ON public.portfolio_evidence USING btree (prompt_response_id);

CREATE INDEX prompt_responses_learner_unit_idx ON public.prompt_responses USING btree (learner_id, unit_id, updated_at DESC);

CREATE INDEX prompt_responses_release_idx ON public.prompt_responses USING btree (curriculum_release_id, unit_id);

CREATE UNIQUE INDEX prompt_responses_release_key_unique ON public.prompt_responses USING btree (learner_id, curriculum_release_id, prompt_key) WHERE (curriculum_release_id IS NOT NULL);

CREATE INDEX school_memberships_school_role_idx ON public.school_memberships USING btree (school_id, status, role);

CREATE UNIQUE INDEX school_memberships_school_user_uidx ON public.school_memberships USING btree (school_id, user_id);

CREATE INDEX school_memberships_user_idx ON public.school_memberships USING btree (user_id, status, school_id);

CREATE INDEX school_memberships_user_school_idx ON public.school_memberships USING btree (user_id, school_id);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION private.add_cohort_staff_by_email_impl(p_cohort_id uuid, p_email text, p_role text DEFAULT 'educator'::text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare v_uid uuid; v_user uuid := (select auth.uid()); v_school uuid; v_converted_learner boolean := false;
begin
  select c.school_id into v_school from public.cohorts c where c.id=p_cohort_id;
  if v_user is null or v_school is null or not private.has_school_role(v_school,array['owner'::text,'admin'::text]) then
    raise insufficient_privilege using message='School administration access required';
  end if;
  if p_role not in ('lead','educator','assistant') then raise invalid_parameter_value using message='Invalid cohort staff role'; end if;
  select u.id into v_uid from auth.users u where lower(u.email)=lower(trim(p_email)) and coalesce(u.is_anonymous,false)=false limit 1;
  if v_uid is null then raise foreign_key_violation using message='No existing Applied Commerce account matches that email'; end if;
  if exists (select 1 from private.platform_admins pa where pa.user_id=v_uid and pa.status='active') then
    raise check_violation using message='The platform administrator cannot be assigned a facilitator role.';
  end if;
  if not exists (select 1 from public.school_memberships sm where sm.school_id=v_school and sm.user_id=v_uid and sm.status='active') then
    raise foreign_key_violation using message='The facilitator must first be an active member of this school';
  end if;
  delete from public.learner_profiles where user_id=v_uid;
  v_converted_learner := found;
  insert into public.cohort_staff(cohort_id,user_id,role,status) values(p_cohort_id,v_uid,p_role,'active')
  on conflict (cohort_id,user_id) do update set role=excluded.role,status='active',updated_at=now();
  insert into public.audit_events(actor_user_id,school_id,event_type,entity_type,entity_id,metadata)
  values(v_user,v_school,'cohort.staff_added','cohort',p_cohort_id,jsonb_build_object('user_id',v_uid,'role',p_role,'converted_from_learner',v_converted_learner));
  return v_uid;
end;
$function$
;

CREATE OR REPLACE FUNCTION private.add_school_member_by_email_impl(p_school_id uuid, p_email text, p_role text DEFAULT 'educator'::text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare v_uid uuid; v_user uuid := (select auth.uid()); v_converted_learner boolean := false;
begin
  if v_user is null or not private.has_school_role(p_school_id,array['owner'::text,'admin'::text]) then
    raise insufficient_privilege using message='School administration access required';
  end if;
  if p_role not in ('owner','admin','educator') then raise invalid_parameter_value using message='Invalid school role'; end if;
  if p_role='owner' and not private.has_school_role(p_school_id,array['owner'::text]) then
    raise insufficient_privilege using message='Only an existing school owner can assign the owner role';
  end if;
  select u.id into v_uid from auth.users u where lower(u.email)=lower(trim(p_email)) and coalesce(u.is_anonymous,false)=false limit 1;
  if v_uid is null then raise foreign_key_violation using message='No existing Applied Commerce account matches that email'; end if;
  if exists (select 1 from private.platform_admins pa where pa.user_id=v_uid and pa.status='active') then
    raise check_violation using message='The platform administrator cannot be assigned an institution role.';
  end if;
  delete from public.learner_profiles where user_id=v_uid;
  v_converted_learner := found;
  insert into public.school_memberships(school_id,user_id,role,status) values(p_school_id,v_uid,p_role,'active')
  on conflict (school_id,user_id) do update set role=excluded.role,status='active',updated_at=now();
  insert into public.audit_events(actor_user_id,school_id,event_type,entity_type,entity_id,metadata)
  values(v_user,p_school_id,'school.member_added','user',v_uid,jsonb_build_object('role',p_role,'converted_from_learner',v_converted_learner));
  return v_uid;
end;
$function$
;

CREATE OR REPLACE FUNCTION private.can_review_learner(target_learner uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and (
  private.is_platform_admin()
  or exists (select 1 from public.cohort_enrolments ce join public.cohort_staff cs on cs.cohort_id=ce.cohort_id
    where ce.learner_id=target_learner and ce.status='active' and cs.user_id=auth.uid() and cs.status='active')
  or exists (select 1 from public.cohort_enrolments ce join public.cohorts c on c.id=ce.cohort_id
    join public.school_memberships sm on sm.school_id=c.school_id
    where ce.learner_id=target_learner and ce.status='active' and sm.user_id=auth.uid()
      and sm.status='active' and sm.role in ('owner','admin'))
); $function$
;

CREATE OR REPLACE FUNCTION private.can_view_learner(target_learner uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and (
  private.is_platform_admin() or auth.uid()=target_learner
  or exists (select 1 from public.cohort_enrolments ce join public.cohort_staff cs on cs.cohort_id=ce.cohort_id
    where ce.learner_id=target_learner and ce.status='active' and cs.user_id=auth.uid() and cs.status='active')
  or exists (select 1 from public.cohort_enrolments ce join public.cohorts c on c.id=ce.cohort_id
    join public.school_memberships sm on sm.school_id=c.school_id
    where ce.learner_id=target_learner and ce.status='active' and sm.user_id=auth.uid()
      and sm.status='active' and sm.role in ('owner','admin'))
); $function$
;

CREATE OR REPLACE FUNCTION private.create_school_impl(p_name text, p_slug text)
 RETURNS schools
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare v_school public.schools; v_uid uuid := (select auth.uid());
begin
  if v_uid is null or not private.is_platform_admin() then
    raise insufficient_privilege using message='Only platform administrators can create institutions';
  end if;
  if trim(p_name) = '' or trim(p_slug) = '' then raise invalid_parameter_value using message='School name and slug are required'; end if;
  if lower(trim(p_slug)) !~ '^[a-z0-9]+(-[a-z0-9]+)*$' then raise invalid_parameter_value using message='Slug must use lowercase letters, numbers and hyphens'; end if;
  insert into public.schools(name,slug) values(trim(p_name),lower(trim(p_slug))) returning * into v_school;
  insert into public.audit_events(actor_user_id,school_id,event_type,entity_type,entity_id,metadata)
  values(v_uid,v_school.id,'school.created','school',v_school.id,jsonb_build_object('name',v_school.name,'created_by_platform_admin',true));
  return v_school;
exception when unique_violation then
  raise unique_violation using message='A school with that slug already exists';
end;
$function$
;

CREATE OR REPLACE FUNCTION private.enforce_exclusive_operating_roles()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare v_uid uuid;
begin
  if tg_table_name = 'learner_profiles' then
    v_uid := new.user_id;
    if exists (select 1 from private.platform_admins pa where pa.user_id=v_uid and pa.status='active')
       or exists (select 1 from public.school_memberships sm where sm.user_id=v_uid and sm.status='active')
       or exists (select 1 from public.cohort_staff cs where cs.user_id=v_uid and cs.status='active') then
      raise check_violation using message='This account is assigned an administrative or facilitator role and cannot also be a learner.';
    end if;
  elsif tg_table_name = 'school_memberships' then
    v_uid := new.user_id;
    if new.status = 'active' and exists (select 1 from private.platform_admins pa where pa.user_id=v_uid and pa.status='active') then
      raise check_violation using message='Platform administrators cannot be assigned institution-scoped roles.';
    end if;
    if new.status = 'active' and exists (select 1 from public.learner_profiles lp where lp.user_id=v_uid) then
      raise check_violation using message='This account has a learner role. Assigning staff access will convert it to staff and preserve learning history.';
    end if;
  elsif tg_table_name = 'cohort_staff' then
    v_uid := new.user_id;
    if new.status = 'active' and exists (select 1 from private.platform_admins pa where pa.user_id=v_uid and pa.status='active') then
      raise check_violation using message='Platform administrators cannot be assigned facilitator roles.';
    end if;
    if new.status = 'active' and exists (select 1 from public.learner_profiles lp where lp.user_id=v_uid) then
      raise check_violation using message='This account has a learner role. Assigning facilitator access will convert it to staff and preserve learning history.';
    end if;
  elsif tg_table_name = 'platform_admins' then
    v_uid := new.user_id;
    if new.status = 'active' and (
      exists (select 1 from public.learner_profiles lp where lp.user_id=v_uid)
      or exists (select 1 from public.school_memberships sm where sm.user_id=v_uid and sm.status='active')
      or exists (select 1 from public.cohort_staff cs where cs.user_id=v_uid and cs.status='active')
    ) then
      raise check_violation using message='A platform administrator must not also hold a learner, institution, or facilitator role.';
    end if;
  end if;
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION private.enrol_learner_by_email_impl(p_cohort_id uuid, p_email text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare v_uid uuid; v_user uuid := (select auth.uid()); v_school uuid;
begin
  select c.school_id into v_school from public.cohorts c where c.id=p_cohort_id;
  if v_user is null or v_school is null or (
    not private.is_cohort_staff_member(p_cohort_id)
    and not private.has_school_role(v_school,array['owner'::text,'admin'::text])
  ) then raise insufficient_privilege using message='Cohort administration access required'; end if;
  select u.id into v_uid from auth.users u where lower(u.email)=lower(trim(p_email)) and coalesce(u.is_anonymous,false)=false limit 1;
  if v_uid is null then raise foreign_key_violation using message='No existing Applied Commerce account matches that email'; end if;
  if exists (select 1 from private.platform_admins pa where pa.user_id=v_uid and pa.status='active')
     or exists (select 1 from public.school_memberships sm where sm.user_id=v_uid and sm.status='active')
     or exists (select 1 from public.cohort_staff cs where cs.user_id=v_uid and cs.status='active') then
    raise check_violation using message='This account is assigned to staff or administration and cannot be enrolled as a learner.';
  end if;
  insert into public.learner_profiles(user_id) values(v_uid) on conflict(user_id) do nothing;
  insert into public.cohort_enrolments(cohort_id,learner_id,status) values(p_cohort_id,v_uid,'active')
  on conflict (cohort_id,learner_id) do update set status='active',completed_at=null,updated_at=now();
  insert into public.audit_events(actor_user_id,school_id,event_type,entity_type,entity_id,metadata)
  values(v_user,v_school,'cohort.learner_enrolled','learner',v_uid,jsonb_build_object('cohort_id',p_cohort_id));
  return v_uid;
end;
$function$
;

CREATE OR REPLACE FUNCTION private.handle_new_auth_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  insert into public.profiles (id, display_name)
  values (new.id, nullif(trim(coalesce(new.raw_user_meta_data ->> 'display_name', '')), ''))
  on conflict (id) do nothing;
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION private.has_school_role(target_school uuid, target_roles text[] DEFAULT NULL::text[])
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and (
  private.is_platform_admin() or exists (
    select 1 from public.school_memberships sm
    where sm.school_id=target_school and sm.user_id=(select auth.uid())
      and sm.status='active' and (target_roles is null or sm.role=any(target_roles))
  )
); $function$
;

CREATE OR REPLACE FUNCTION private.is_cohort_admin(target_cohort uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and (
  private.is_platform_admin() or exists (
    select 1 from public.cohorts c join public.school_memberships sm on sm.school_id=c.school_id
    where c.id=target_cohort and sm.user_id=(select auth.uid()) and sm.status='active' and sm.role in ('owner','admin')
  )
); $function$
;

CREATE OR REPLACE FUNCTION private.is_cohort_staff_member(target_cohort uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and (
  private.is_platform_admin()
  or exists (select 1 from public.cohort_staff cs where cs.cohort_id=target_cohort and cs.user_id=auth.uid() and cs.status='active')
  or exists (select 1 from public.cohorts c join public.school_memberships sm on sm.school_id=c.school_id
    where c.id=target_cohort and sm.user_id=auth.uid() and sm.status='active' and sm.role in ('owner','admin'))
); $function$
;

CREATE OR REPLACE FUNCTION private.is_platform_admin()
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and exists (
  select 1 from private.platform_admins pa
  where pa.user_id=(select auth.uid()) and pa.status='active'
); $function$
;

CREATE OR REPLACE FUNCTION private.resolve_school_account_impl(p_school_id uuid, p_email text)
 RETURNS TABLE(user_id uuid, display_name text)
 LANGUAGE plpgsql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  if auth.uid() is null or not private.has_school_role(p_school_id,array['owner'::text,'admin'::text])
  then raise insufficient_privilege using message='School administration access required'; end if;
  return query
  select u.id,coalesce(nullif(trim(p.display_name),''),split_part(u.email,'@',1))::text
  from auth.users u left join public.profiles p on p.id=u.id
  where lower(u.email)=lower(trim(p_email)) and coalesce(u.is_anonymous,false)=false limit 1;
end;
$function$
;

CREATE OR REPLACE FUNCTION private.set_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path TO ''
AS $function$
begin
  new.updated_at = now();
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.add_cohort_staff_by_email(p_cohort_id uuid, p_email text, p_role text DEFAULT 'educator'::text)
 RETURNS uuid
 LANGUAGE sql
 SET search_path TO ''
AS $function$
  select private.add_cohort_staff_by_email_impl(p_cohort_id,p_email,p_role);
$function$
;

CREATE OR REPLACE FUNCTION public.add_school_member_by_email(p_school_id uuid, p_email text, p_role text DEFAULT 'educator'::text)
 RETURNS uuid
 LANGUAGE sql
 SET search_path TO ''
AS $function$
  select private.add_school_member_by_email_impl(p_school_id,p_email,p_role);
$function$
;

CREATE OR REPLACE FUNCTION public.create_school(p_name text, p_slug text)
 RETURNS schools
 LANGUAGE sql
 SET search_path TO ''
AS $function$
  select private.create_school_impl(p_name,p_slug);
$function$
;

CREATE OR REPLACE FUNCTION public.enrol_learner_by_email(p_cohort_id uuid, p_email text)
 RETURNS uuid
 LANGUAGE sql
 SET search_path TO ''
AS $function$
  select private.enrol_learner_by_email_impl(p_cohort_id,p_email);
$function$
;

CREATE OR REPLACE FUNCTION public.is_platform_admin()
 RETURNS boolean
 LANGUAGE sql
 STABLE
 SET search_path TO ''
AS $function$ select private.is_platform_admin(); $function$
;

CREATE OR REPLACE FUNCTION public.resolve_school_account(p_school_id uuid, p_email text)
 RETURNS TABLE(user_id uuid, display_name text)
 LANGUAGE plpgsql
 SET search_path TO ''
AS $function$ begin return query select * from private.resolve_school_account_impl(p_school_id,p_email); end; $function$
;

CREATE OR REPLACE FUNCTION public.upsert_facilitator_evidence_record(p_learner_id uuid, p_response_key text, p_response_value text, p_auto_result jsonb DEFAULT '{}'::jsonb, p_status text DEFAULT 'captured'::text)
 RETURNS uuid
 LANGUAGE plpgsql
 SET search_path TO ''
AS $function$
declare v_record public.evidence_records;
begin
  if (select auth.uid()) is null then
    raise insufficient_privilege using message='Authentication required';
  end if;
  if not private.can_review_learner(p_learner_id) then
    raise insufficient_privilege using message='Learner is outside the facilitator access scope';
  end if;

  insert into public.evidence_records(learner_id,response_key,response_value,auto_result,status,captured_at,updated_at)
  values(p_learner_id,p_response_key,p_response_value,p_auto_result,p_status,now(),now())
  on conflict (learner_id,response_key) do update
  set response_value=excluded.response_value,
      auto_result=excluded.auto_result,
      status=excluded.status,
      updated_at=now()
  returning * into v_record;

  return v_record.id;
end;
$function$
;

set check_function_bodies = on;

CREATE TRIGGER platform_admins_exclusive_operating_role BEFORE INSERT OR UPDATE OF user_id, status ON private.platform_admins FOR EACH ROW EXECUTE FUNCTION private.enforce_exclusive_operating_roles();

CREATE TRIGGER cohort_enrolments_set_updated_at BEFORE UPDATE ON cohort_enrolments FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER cohort_staff_exclusive_operating_role BEFORE INSERT OR UPDATE OF user_id, status ON cohort_staff FOR EACH ROW EXECUTE FUNCTION private.enforce_exclusive_operating_roles();

CREATE TRIGGER cohort_staff_set_updated_at BEFORE UPDATE ON cohort_staff FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER cohorts_set_updated_at BEFORE UPDATE ON cohorts FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER learner_profiles_exclusive_operating_role BEFORE INSERT OR UPDATE OF user_id ON learner_profiles FOR EACH ROW EXECUTE FUNCTION private.enforce_exclusive_operating_roles();

CREATE TRIGGER learner_profiles_set_updated_at BEFORE UPDATE ON learner_profiles FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER lesson_notes_set_updated_at BEFORE UPDATE ON lesson_notes FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER lesson_progress_set_updated_at BEFORE UPDATE ON lesson_progress FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER portfolio_artifacts_set_updated_at BEFORE UPDATE ON portfolio_artifacts FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER profiles_set_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER prompt_responses_set_updated_at BEFORE UPDATE ON prompt_responses FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER school_memberships_exclusive_operating_role BEFORE INSERT OR UPDATE OF user_id, status ON school_memberships FOR EACH ROW EXECUTE FUNCTION private.enforce_exclusive_operating_roles();

CREATE TRIGGER school_memberships_set_updated_at BEFORE UPDATE ON school_memberships FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

CREATE TRIGGER schools_set_updated_at BEFORE UPDATE ON schools FOR EACH ROW EXECUTE FUNCTION private.set_updated_at();

alter table public.assessment_attempts enable row level security;

alter table public.audit_events enable row level security;

alter table public.cohort_enrolments enable row level security;

alter table public.cohort_staff enable row level security;

alter table public.cohorts enable row level security;

alter table public.curriculum_releases enable row level security;

alter table public.evidence_definitions enable row level security;

alter table public.evidence_records enable row level security;

alter table public.evidence_report_snapshots enable row level security;

alter table public.evidence_reviews enable row level security;

alter table public.learner_profiles enable row level security;

alter table public.lesson_notes enable row level security;

alter table public.lesson_progress enable row level security;

alter table public.portfolio_artifacts enable row level security;

alter table public.portfolio_evidence enable row level security;

alter table public.profiles enable row level security;

alter table public.prompt_responses enable row level security;

alter table public.rubric_criteria enable row level security;

alter table public.rubric_templates enable row level security;

alter table public.school_memberships enable row level security;

alter table public.schools enable row level security;

alter table private.platform_admins enable row level security;

create policy "assessment attempts insert own" on public.assessment_attempts as permissive for INSERT to authenticated with check ((learner_id = ( SELECT auth.uid() AS uid)));

create policy "assessment attempts select" on public.assessment_attempts as permissive for SELECT to authenticated using (((learner_id = ( SELECT auth.uid() AS uid)) OR private.can_view_learner(learner_id)));

create policy "assessment attempts update own" on public.assessment_attempts as permissive for UPDATE to authenticated using ((learner_id = ( SELECT auth.uid() AS uid))) with check ((learner_id = ( SELECT auth.uid() AS uid)));

create policy "audit events deny client access" on public.audit_events as permissive for ALL to authenticated using (false) with check (false);

create policy "cohort staff delete enrolments" on public.cohort_enrolments as permissive for DELETE to authenticated using ((private.is_cohort_staff_member(cohort_id) OR private.has_school_role(( SELECT c.school_id
   FROM cohorts c
  WHERE (c.id = cohort_enrolments.cohort_id)), ARRAY['owner'::text, 'admin'::text])));

create policy "cohort staff insert enrolments" on public.cohort_enrolments as permissive for INSERT to authenticated with check ((private.is_cohort_staff_member(cohort_id) OR private.has_school_role(( SELECT c.school_id
   FROM cohorts c
  WHERE (c.id = cohort_enrolments.cohort_id)), ARRAY['owner'::text, 'admin'::text])));

create policy "cohort staff update enrolments" on public.cohort_enrolments as permissive for UPDATE to authenticated using ((private.is_cohort_staff_member(cohort_id) OR private.has_school_role(( SELECT c.school_id
   FROM cohorts c
  WHERE (c.id = cohort_enrolments.cohort_id)), ARRAY['owner'::text, 'admin'::text]))) with check ((private.is_cohort_staff_member(cohort_id) OR private.has_school_role(( SELECT c.school_id
   FROM cohorts c
  WHERE (c.id = cohort_enrolments.cohort_id)), ARRAY['owner'::text, 'admin'::text])));

create policy cohort_enrolments_select on public.cohort_enrolments as permissive for SELECT to authenticated using (((learner_id = ( SELECT auth.uid() AS uid)) OR private.is_cohort_staff_member(cohort_id)));

create policy cohort_staff_select on public.cohort_staff as permissive for SELECT to authenticated using (((user_id = ( SELECT auth.uid() AS uid)) OR private.has_school_role(( SELECT c.school_id
   FROM cohorts c
  WHERE (c.id = cohort_staff.cohort_id)), ARRAY['owner'::text, 'admin'::text])));

create policy "school admins delete cohort staff" on public.cohort_staff as permissive for DELETE to authenticated using (private.is_cohort_admin(cohort_id));

create policy "school admins insert cohort staff" on public.cohort_staff as permissive for INSERT to authenticated with check (private.is_cohort_admin(cohort_id));

create policy "school admins update cohort staff" on public.cohort_staff as permissive for UPDATE to authenticated using (private.is_cohort_admin(cohort_id)) with check (private.is_cohort_admin(cohort_id));

create policy cohorts_select on public.cohorts as permissive for SELECT to authenticated using ((private.is_cohort_staff_member(id) OR private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text]) OR (EXISTS ( SELECT 1
   FROM cohort_enrolments ce
  WHERE ((ce.cohort_id = cohorts.id) AND (ce.learner_id = ( SELECT auth.uid() AS uid)) AND (ce.status = ANY (ARRAY['active'::text, 'completed'::text])))))));

create policy "school admins delete cohorts" on public.cohorts as permissive for DELETE to authenticated using (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text]));

create policy "school admins insert cohorts" on public.cohorts as permissive for INSERT to authenticated with check (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text]));

create policy "school admins update cohorts" on public.cohorts as permissive for UPDATE to authenticated using (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text])) with check (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text]));

create policy "curriculum releases authenticated read" on public.curriculum_releases as permissive for SELECT to authenticated using (true);

create policy "authenticated reads evidence definitions" on public.evidence_definitions as permissive for SELECT to authenticated using (active);

create policy "assigned staff inserts evidence" on public.evidence_records as permissive for INSERT to authenticated with check (private.can_review_learner(learner_id));

create policy "learner inserts own evidence" on public.evidence_records as permissive for INSERT to authenticated with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy "learner or assigned staff reads evidence" on public.evidence_records as permissive for SELECT to authenticated using (((learner_id = ( SELECT auth.uid() AS uid)) OR private.can_review_learner(learner_id)));

create policy "learner or assigned staff updates evidence" on public.evidence_records as permissive for UPDATE to authenticated using (((( SELECT auth.uid() AS uid) = learner_id) OR private.can_review_learner(learner_id))) with check (((( SELECT auth.uid() AS uid) = learner_id) OR private.can_review_learner(learner_id)));

create policy "learner updates own evidence" on public.evidence_records as permissive for UPDATE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id)) with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy "learner or assigned staff reads report snapshots" on public.evidence_report_snapshots as permissive for SELECT to authenticated using (((learner_id = ( SELECT auth.uid() AS uid)) OR ((learner_id IS NOT NULL) AND private.can_review_learner(learner_id))));

create policy "assigned staff creates review" on public.evidence_reviews as permissive for INSERT to authenticated with check (((reviewer_id = ( SELECT auth.uid() AS uid)) AND (EXISTS ( SELECT 1
   FROM evidence_records er
  WHERE ((er.id = evidence_reviews.evidence_record_id) AND private.can_review_learner(er.learner_id))))));

create policy "assigned staff updates review" on public.evidence_reviews as permissive for UPDATE to authenticated using (((reviewer_id = ( SELECT auth.uid() AS uid)) AND (EXISTS ( SELECT 1
   FROM evidence_records er
  WHERE ((er.id = evidence_reviews.evidence_record_id) AND private.can_review_learner(er.learner_id)))))) with check (((reviewer_id = ( SELECT auth.uid() AS uid)) AND (EXISTS ( SELECT 1
   FROM evidence_records er
  WHERE ((er.id = evidence_reviews.evidence_record_id) AND private.can_review_learner(er.learner_id))))));

create policy "learner or assigned staff reads reviews" on public.evidence_reviews as permissive for SELECT to authenticated using (((reviewer_id = ( SELECT auth.uid() AS uid)) OR (EXISTS ( SELECT 1
   FROM evidence_records er
  WHERE ((er.id = evidence_reviews.evidence_record_id) AND ((er.learner_id = ( SELECT auth.uid() AS uid)) OR private.can_review_learner(er.learner_id)))))));

create policy "learner profiles insert own" on public.learner_profiles as permissive for INSERT to authenticated with check ((( SELECT auth.uid() AS uid) = user_id));

create policy learner_profiles_select on public.learner_profiles as permissive for SELECT to authenticated using (((( SELECT auth.uid() AS uid) = user_id) OR private.can_view_learner(user_id)));

create policy learner_profiles_update_own on public.learner_profiles as permissive for UPDATE to authenticated using ((( SELECT auth.uid() AS uid) = user_id)) with check ((( SELECT auth.uid() AS uid) = user_id));

create policy lesson_notes_delete_own on public.lesson_notes as permissive for DELETE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id));

create policy lesson_notes_insert_own on public.lesson_notes as permissive for INSERT to authenticated with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy lesson_notes_select on public.lesson_notes as permissive for SELECT to authenticated using (private.can_view_learner(learner_id));

create policy lesson_notes_update_own on public.lesson_notes as permissive for UPDATE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id)) with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy lesson_progress_delete_own on public.lesson_progress as permissive for DELETE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id));

create policy lesson_progress_insert_own on public.lesson_progress as permissive for INSERT to authenticated with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy lesson_progress_select on public.lesson_progress as permissive for SELECT to authenticated using (private.can_view_learner(learner_id));

create policy lesson_progress_update_own on public.lesson_progress as permissive for UPDATE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id)) with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy portfolio_artifacts_delete_own on public.portfolio_artifacts as permissive for DELETE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id));

create policy portfolio_artifacts_insert_own on public.portfolio_artifacts as permissive for INSERT to authenticated with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy portfolio_artifacts_select on public.portfolio_artifacts as permissive for SELECT to authenticated using (private.can_view_learner(learner_id));

create policy portfolio_artifacts_update_own on public.portfolio_artifacts as permissive for UPDATE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id)) with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy portfolio_evidence_delete_own on public.portfolio_evidence as permissive for DELETE to authenticated using ((EXISTS ( SELECT 1
   FROM portfolio_artifacts pa
  WHERE ((pa.id = portfolio_evidence.artifact_id) AND (pa.learner_id = ( SELECT auth.uid() AS uid))))));

create policy portfolio_evidence_insert_own on public.portfolio_evidence as permissive for INSERT to authenticated with check ((EXISTS ( SELECT 1
   FROM (portfolio_artifacts pa
     JOIN prompt_responses pr ON ((pr.id = portfolio_evidence.prompt_response_id)))
  WHERE ((pa.id = portfolio_evidence.artifact_id) AND (pa.learner_id = ( SELECT auth.uid() AS uid)) AND (pr.learner_id = ( SELECT auth.uid() AS uid))))));

create policy portfolio_evidence_select on public.portfolio_evidence as permissive for SELECT to authenticated using ((EXISTS ( SELECT 1
   FROM portfolio_artifacts pa
  WHERE ((pa.id = portfolio_evidence.artifact_id) AND private.can_view_learner(pa.learner_id)))));

create policy profiles_select on public.profiles as permissive for SELECT to authenticated using (((( SELECT auth.uid() AS uid) = id) OR private.can_view_learner(id) OR (EXISTS ( SELECT 1
   FROM school_memberships sm
  WHERE ((sm.user_id = profiles.id) AND private.has_school_role(sm.school_id, ARRAY['owner'::text, 'admin'::text]) AND (sm.status = 'active'::text))))));

create policy profiles_update_own on public.profiles as permissive for UPDATE to authenticated using ((( SELECT auth.uid() AS uid) = id)) with check ((( SELECT auth.uid() AS uid) = id));

create policy prompt_responses_delete_own on public.prompt_responses as permissive for DELETE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id));

create policy prompt_responses_insert_own on public.prompt_responses as permissive for INSERT to authenticated with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy prompt_responses_select on public.prompt_responses as permissive for SELECT to authenticated using (private.can_view_learner(learner_id));

create policy prompt_responses_update_own on public.prompt_responses as permissive for UPDATE to authenticated using ((( SELECT auth.uid() AS uid) = learner_id)) with check ((( SELECT auth.uid() AS uid) = learner_id));

create policy "authenticated reads rubric criteria" on public.rubric_criteria as permissive for SELECT to authenticated using (true);

create policy "authenticated reads rubric templates" on public.rubric_templates as permissive for SELECT to authenticated using (active);

create policy "school admins delete memberships" on public.school_memberships as permissive for DELETE to authenticated using (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text]));

create policy "school admins insert memberships" on public.school_memberships as permissive for INSERT to authenticated with check (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text]));

create policy "school admins update memberships" on public.school_memberships as permissive for UPDATE to authenticated using (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text])) with check (private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text]));

create policy school_memberships_select on public.school_memberships as permissive for SELECT to authenticated using (((user_id = ( SELECT auth.uid() AS uid)) OR private.has_school_role(school_id, ARRAY['owner'::text, 'admin'::text])));

create policy "school admins update schools" on public.schools as permissive for UPDATE to authenticated using (private.has_school_role(id, ARRAY['owner'::text, 'admin'::text])) with check (private.has_school_role(id, ARRAY['owner'::text, 'admin'::text]));

create policy "school owners delete schools" on public.schools as permissive for DELETE to authenticated using (private.has_school_role(id, ARRAY['owner'::text]));

create policy schools_select on public.schools as permissive for SELECT to authenticated using ((private.has_school_role(id, NULL::text[]) OR (EXISTS ( SELECT 1
   FROM (cohorts c
     JOIN cohort_enrolments ce ON ((ce.cohort_id = c.id)))
  WHERE ((c.school_id = schools.id) AND (ce.learner_id = ( SELECT auth.uid() AS uid)) AND (ce.status = ANY (ARRAY['active'::text, 'completed'::text])))))));







































































































































































































































































































































































































































































































-- Zimbabwe-specific account preferences, isolated from learner evidence and authorization.
create table public.account_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  appearance text not null default 'system' check (appearance in ('light', 'dark', 'system')),
  accent text not null default 'indigo' check (accent in ('indigo', 'blue', 'teal', 'violet', 'amber', 'rose')),
  text_size text not null default 'normal' check (text_size in ('small', 'normal', 'large')),
  reading_width text not null default 'comfortable' check (reading_width in ('narrow', 'comfortable', 'wide')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.account_preferences enable row level security;
create policy account_preferences_select_own on public.account_preferences
  for select to authenticated using (user_id = (select auth.uid()));
create policy account_preferences_insert_own on public.account_preferences
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy account_preferences_update_own on public.account_preferences
  for update to authenticated using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));
create trigger account_preferences_set_updated_at
  before update on public.account_preferences
  for each row execute function private.set_updated_at();

-- Reconcile copied catalog privileges before granting only the client access required by RLS.
revoke all privileges on all tables in schema public, private from public, anon, authenticated, service_role;
revoke all privileges on all functions in schema public, private from public, anon, authenticated, service_role;
grant usage on schema public, private to authenticated, service_role;
grant all privileges on all tables in schema public, private to service_role;
grant execute on function private.add_cohort_staff_by_email_impl(uuid, text, text) to authenticated;
grant execute on function private.add_school_member_by_email_impl(uuid, text, text) to authenticated;
grant execute on function private.can_review_learner(uuid) to authenticated;
grant execute on function private.can_view_learner(uuid) to authenticated;
grant execute on function private.create_school_impl(text, text) to authenticated;
grant execute on function private.enrol_learner_by_email_impl(uuid, text) to authenticated;
grant execute on function private.has_school_role(uuid, text[]) to authenticated;
grant execute on function private.is_cohort_admin(uuid) to authenticated;
grant execute on function private.is_cohort_staff_member(uuid) to authenticated;
grant execute on function private.is_platform_admin() to authenticated;
grant execute on function private.resolve_school_account_impl(uuid, text) to authenticated;
grant execute on function public.add_cohort_staff_by_email(uuid, text, text) to authenticated;
grant execute on function public.add_school_member_by_email(uuid, text, text) to authenticated;
grant execute on function public.create_school(text, text) to authenticated;
grant execute on function public.enrol_learner_by_email(uuid, text) to authenticated;
grant execute on function public.is_platform_admin() to authenticated;
grant execute on function public.resolve_school_account(uuid, text) to authenticated;
grant execute on function public.upsert_facilitator_evidence_record(uuid, text, text, jsonb, text) to authenticated;
grant select, insert, update on public.account_preferences to authenticated;
grant select, insert, update, delete on public.assessment_attempts to authenticated;
grant select on public.audit_events to authenticated;
grant select, insert, update, delete on public.cohort_enrolments to authenticated;
grant select, insert, update, delete on public.cohort_staff to authenticated;
grant select, insert, update, delete on public.cohorts to authenticated;
grant select on public.curriculum_releases to authenticated;
grant select on public.evidence_definitions to authenticated;
grant select, insert, update on public.evidence_records to authenticated;
grant select on public.evidence_report_snapshots to authenticated;
grant select, insert, update on public.evidence_reviews to authenticated;
grant select, insert, update on public.learner_profiles to authenticated;
grant select, insert, update, delete on public.lesson_notes to authenticated;
grant select, insert, update, delete on public.lesson_progress to authenticated;
grant select, insert, update, delete on public.portfolio_artifacts to authenticated;
grant select, insert, delete on public.portfolio_evidence to authenticated;
grant select, update on public.profiles to authenticated;
grant select, insert, update, delete on public.prompt_responses to authenticated;
grant select on public.rubric_criteria, public.rubric_templates to authenticated;
grant select, insert, update, delete on public.school_memberships to authenticated;
grant select, insert, update, delete on public.schools to authenticated;

-- The release metadata records the Zimbabwe delivery contract without rewriting internal source IDs.
insert into public.curriculum_releases
  (release_key, source_release_key, runtime_format_version, compiler_version, schema_version, metadata)
values
  ('ac-zw-forms-1-4', 'ac-zw-source-preserving-baseline', 3, 'ac-zw-compiler-v1', 1,
   '{"market":"ZW","programme":"O-Level","delivery_forms":4,"delivery_terms_per_form":3,"source_grade_ids_preserved":true,"source_term_ids_preserved":true,"curriculum_mapping":"Form 1=Grade 8; Form 2=Grade 9; Form 3=Grade 10 plus Grade 11 Terms 1-2; Form 4=Grade 11 Terms 3-4 plus Grade 12","curriculum_approval_status":"alignment proposition, not Ministry or ZIMSEC endorsement"}'::jsonb)
on conflict (release_key) do update
set metadata = excluded.metadata,
    source_release_key = excluded.source_release_key,
    compiler_version = excluded.compiler_version,
    schema_version = excluded.schema_version;


-- 20261009232153_ac_zw_rls_hardening.sql
-- AC Zimbabwe first-pass security/performance hardening.
-- Platform admin authority is held only in the private registry; client roles cannot read or mutate it.
create policy platform_admin_registry_deny_client_access
  on private.platform_admins as permissive for all to anon, authenticated
  using (false) with check (false);

-- Keep the unique constraints as the canonical indexes; remove redundant standalone duplicates.
drop index if exists public.cohort_enrolments_cohort_learner_uidx;
drop index if exists public.cohort_staff_cohort_user_uidx;
drop index if exists public.school_memberships_school_user_uidx;
create index if not exists platform_admins_granted_by_idx
  on private.platform_admins (granted_by);

-- Combine overlapping evidence policies so each authenticated write is checked once.
drop policy if exists "assigned staff inserts evidence" on public.evidence_records;
drop policy if exists "learner inserts own evidence" on public.evidence_records;
create policy evidence_records_insert_learner_or_assigned_staff
  on public.evidence_records for insert to authenticated
  with check (
    learner_id = (select auth.uid())
    or private.can_review_learner(learner_id)
  );

drop policy if exists "learner or assigned staff updates evidence" on public.evidence_records;
drop policy if exists "learner updates own evidence" on public.evidence_records;
create policy evidence_records_update_learner_or_assigned_staff
  on public.evidence_records for update to authenticated
  using (
    learner_id = (select auth.uid())
    or private.can_review_learner(learner_id)
  )
  with check (
    learner_id = (select auth.uid())
    or private.can_review_learner(learner_id)
  );


-- 20261009232404_ac_zw_preferences_parity.sql
-- Match AC account-preference vocabulary so the Zimbabwe settings port can share tested behaviour.
alter table public.account_preferences
  alter column appearance set default 'system',
  alter column accent set default 'commerce',
  alter column text_size set default 'standard',
  alter column reading_width set default 'standard';

alter table public.account_preferences
  drop constraint if exists account_preferences_appearance_check,
  drop constraint if exists account_preferences_accent_check,
  drop constraint if exists account_preferences_text_size_check,
  drop constraint if exists account_preferences_reading_width_check;

alter table public.account_preferences
  add constraint account_preferences_appearance_check
    check (appearance in ('system', 'light', 'warm', 'dark')),
  add constraint account_preferences_accent_check
    check (accent in ('commerce', 'blue', 'amber', 'sage')),
  add constraint account_preferences_text_size_check
    check (text_size in ('small', 'standard', 'large', 'extra_large')),
  add constraint account_preferences_reading_width_check
    check (reading_width in ('narrow', 'standard', 'wide'));


-- 20261009234929_ac_zw_learning_state.sql
-- Preserve the Zimbabwe delivery identity alongside the source curriculum grade.
-- Grade/term/unit_id remain the stable source identity used by the compiler and existing content.
alter table public.learner_profiles
  add column if not exists current_form smallint;

alter table public.learner_profiles
  drop constraint if exists learner_profiles_current_form_check;

alter table public.learner_profiles
  add constraint learner_profiles_current_form_check
  check (current_form is null or current_form between 1 and 4);


-- 20261009235541_ac_zw_institution_operations.sql
-- Zimbabwe-specific cohort identity and safe first-owner onboarding.
alter table public.cohorts
  add column if not exists zimbabwe_form smallint;

alter table public.cohorts
  drop constraint if exists cohorts_zimbabwe_form_check;

alter table public.cohorts
  add constraint cohorts_zimbabwe_form_check
  check (zimbabwe_form is null or zimbabwe_form between 1 and 4);

create or replace function public.create_school_with_owner(
  p_name text,
  p_slug text,
  p_owner_email text
) returns public.schools
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_school public.schools;
  v_actor uuid := (select auth.uid());
  v_owner uuid;
begin
  if v_actor is null or not private.is_platform_admin() then
    raise insufficient_privilege using message = 'Only platform administrators can create institutions';
  end if;
  if trim(coalesce(p_name,'')) = '' or trim(coalesce(p_slug,'')) = '' or trim(coalesce(p_owner_email,'')) = '' then
    raise invalid_parameter_value using message = 'Institution name, slug and owner email are required';
  end if;
  if lower(trim(p_slug)) !~ '^[a-z0-9]+(-[a-z0-9]+)*$' then
    raise invalid_parameter_value using message = 'Slug must use lowercase letters, numbers and hyphens';
  end if;
  select u.id into v_owner from auth.users u
    where lower(u.email) = lower(trim(p_owner_email))
      and coalesce(u.is_anonymous,false) = false
    limit 1;
  if v_owner is null then
    raise foreign_key_violation using message = 'No existing account matches the institution owner email';
  end if;
  if private.is_platform_admin() and v_owner = v_actor then
    raise check_violation using message = 'Choose a separate institution owner account';
  end if;
  insert into public.schools(name,slug) values(trim(p_name),lower(trim(p_slug))) returning * into v_school;
  insert into public.school_memberships(school_id,user_id,role,status)
    values(v_school.id,v_owner,'owner','active');
  insert into public.audit_events(actor_user_id,school_id,event_type,entity_type,entity_id,metadata)
    values(v_actor,v_school.id,'school.created','school',v_school.id,
      jsonb_build_object('name',v_school.name,'owner_user_id',v_owner,'created_by_platform_admin',true));
  return v_school;
exception when unique_violation then
  raise unique_violation using message = 'A school with that slug already exists';
end;
$function$;

revoke all on function public.create_school_with_owner(text,text,text) from public;
grant execute on function public.create_school_with_owner(text,text,text) to authenticated;


-- 20261009235803_ac_zw_review_integrity.sql
-- Prevent duplicate reviews by the same facilitator for one evidence record.
create unique index if not exists evidence_reviews_record_reviewer_uidx
  on public.evidence_reviews (evidence_record_id, reviewer_id);


-- 20261009235935_ac_zw_owner_rpc_acl.sql
-- Supabase default privileges may grant RPC execute to anon; keep owner provisioning signed-in only.
revoke execute on function public.create_school_with_owner(text,text,text) from public, anon;
grant execute on function public.create_school_with_owner(text,text,text) to authenticated;


-- 20261010000133_ac_zw_auth_profile_trigger.sql
-- Ensure every newly registered Supabase user has the base profile row required by learner profiles and enrolments.
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function private.handle_new_auth_user();


-- 20261010000354_ac_zw_owner_rpc_invoker.sql
-- Keep the exposed RPC invoker-security; the privileged implementation lives in the non-exposed private schema.
create or replace function private.create_school_with_owner_impl(
  p_name text,
  p_slug text,
  p_owner_email text
) returns public.schools
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_school public.schools;
  v_actor uuid := (select auth.uid());
  v_owner uuid;
begin
  if v_actor is null or not private.is_platform_admin() then
    raise insufficient_privilege using message = 'Only platform administrators can create institutions';
  end if;
  if trim(coalesce(p_name,'')) = '' or trim(coalesce(p_slug,'')) = '' or trim(coalesce(p_owner_email,'')) = '' then
    raise invalid_parameter_value using message = 'Institution name, slug and owner email are required';
  end if;
  if lower(trim(p_slug)) !~ '^[a-z0-9]+(-[a-z0-9]+)*$' then
    raise invalid_parameter_value using message = 'Slug must use lowercase letters, numbers and hyphens';
  end if;
  select u.id into v_owner from auth.users u
    where lower(u.email) = lower(trim(p_owner_email))
      and coalesce(u.is_anonymous,false) = false
    limit 1;
  if v_owner is null then
    raise foreign_key_violation using message = 'No existing account matches the institution owner email';
  end if;
  if v_owner = v_actor then
    raise check_violation using message = 'Choose a separate institution owner account';
  end if;
  insert into public.schools(name,slug) values(trim(p_name),lower(trim(p_slug))) returning * into v_school;
  insert into public.school_memberships(school_id,user_id,role,status)
    values(v_school.id,v_owner,'owner','active');
  insert into public.audit_events(actor_user_id,school_id,event_type,entity_type,entity_id,metadata)
    values(v_actor,v_school.id,'school.created','school',v_school.id,
      jsonb_build_object('name',v_school.name,'owner_user_id',v_owner,'created_by_platform_admin',true));
  return v_school;
exception when unique_violation then
  raise unique_violation using message = 'A school with that slug already exists';
end;
$function$;

revoke execute on function private.create_school_with_owner_impl(text,text,text) from public, anon;
grant execute on function private.create_school_with_owner_impl(text,text,text) to authenticated;

create or replace function public.create_school_with_owner(
  p_name text,
  p_slug text,
  p_owner_email text
) returns public.schools
language sql
security invoker
set search_path = ''
as $function$
  select private.create_school_with_owner_impl(p_name,p_slug,p_owner_email);
$function$;

revoke execute on function public.create_school_with_owner(text,text,text) from public, anon;
grant execute on function public.create_school_with_owner(text,text,text) to authenticated;


-- 20261010004952_ac_zw_cohort_enrolment_rls_recursion_fix.sql
create or replace function private.can_manage_cohort_enrolments(target_cohort uuid)
returns boolean
language sql
stable
security definer
set search_path to ''
as $function$
  select (select auth.uid()) is not null and (
    private.is_platform_admin()
    or private.is_cohort_staff_member(target_cohort)
    or exists (
      select 1
      from public.cohorts c
      where c.id = target_cohort
        and private.has_school_role(c.school_id, array['owner'::text, 'admin'::text])
    )
  );
$function$;

drop policy if exists "cohort staff delete enrolments" on public.cohort_enrolments;
create policy "cohort staff delete enrolments"
on public.cohort_enrolments
for delete to authenticated
using (private.can_manage_cohort_enrolments(cohort_id));

drop policy if exists "cohort staff insert enrolments" on public.cohort_enrolments;
create policy "cohort staff insert enrolments"
on public.cohort_enrolments
for insert to authenticated
with check (private.can_manage_cohort_enrolments(cohort_id));

drop policy if exists "cohort staff update enrolments" on public.cohort_enrolments;
create policy "cohort staff update enrolments"
on public.cohort_enrolments
for update to authenticated
using (private.can_manage_cohort_enrolments(cohort_id))
with check (private.can_manage_cohort_enrolments(cohort_id));

