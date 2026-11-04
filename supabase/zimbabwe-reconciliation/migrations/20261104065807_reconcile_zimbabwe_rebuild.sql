-- Zimbabwe rebuild reconciliation; preserves all existing learner and staff rows.
-- Apply only to the inspected original Zimbabwe backend, never the ZA baseline.
begin;
do $$ begin
 if not exists(select 1 from public.curriculum_releases where release_key='ac-zw-forms-1-4' and metadata->>'market'='ZW') then
  raise exception 'The original Zimbabwe release is required';
 end if;
 if to_regprocedure('public.save_learning_changes_for_account(uuid,jsonb,text)') is not null then
  raise exception 'Reconciliation is already present; inspect migration history';
 end if;
end $$;
create table private.zimbabwe_runtime_units(
 unit_id text primary key, delivery_grade smallint not null check(delivery_grade in (8,9,10,12)),
 delivery_term smallint not null check(delivery_term between 1 and 3),
 form smallint not null check(form between 1 and 4),
 source_grade smallint not null,source_term smallint not null
);
alter table private.zimbabwe_runtime_units enable row level security;
revoke all on private.zimbabwe_runtime_units from public,anon,authenticated;
insert into private.zimbabwe_runtime_units values
('g8-t1-l01-001',8,1,1,8,1),
('g8-t1-l02-002',8,1,1,8,1),
('g8-t1-l03-003',8,1,1,8,1),
('g8-t1-l04-004',8,1,1,8,1),
('g8-t1-l05-005',8,1,1,8,1),
('g8-t1-l06-006',8,1,1,8,1),
('g8-t1-l07-007',8,1,1,8,1),
('g8-t1-l08-008',8,1,1,8,1),
('g8-t1-l09-009',8,1,1,8,1),
('g8-t1-l10-010',8,1,1,8,1),
('g8-t1-l11-011',8,1,1,8,1),
('g8-t1-l12-012',8,1,1,8,1),
('g8-t1-l13-013',8,1,1,8,1),
('g8-t1-l14-014',8,1,1,8,1),
('g8-t1-l15-015',8,1,1,8,1),
('g8-t1-l16-016',8,1,1,8,1),
('g8-t1-l17-017',8,1,1,8,1),
('g8-t1-l18-018',8,1,1,8,1),
('g8-t1-l19-019',8,1,1,8,1),
('g8-t1-l20-020',8,1,1,8,1),
('g8-t2-l21-021',8,1,1,8,2),
('g8-t2-l22-022',8,1,1,8,2),
('g8-t2-l23-023',8,1,1,8,2),
('g8-t2-l24-024',8,1,1,8,2),
('g8-t2-l25-025',8,1,1,8,2),
('g8-t2-l26-026',8,1,1,8,2),
('g8-t2-l27-027',8,2,1,8,2),
('g8-t2-l28-028',8,2,1,8,2),
('g8-t2-l29-029',8,2,1,8,2),
('g8-t2-l30-030',8,2,1,8,2),
('g8-t2-l31-031',8,2,1,8,2),
('g8-t2-l32-032',8,2,1,8,2),
('g8-t2-l33-033',8,2,1,8,2),
('g8-t2-l34-034',8,2,1,8,2),
('g8-t2-l35-035',8,2,1,8,2),
('g8-t2-l37-036',8,2,1,8,2),
('g8-t2-l38-037',8,2,1,8,2),
('g8-t2-l39-038',8,2,1,8,2),
('g8-t2-l40-039',8,2,1,8,2),
('g8-t3-l41-040',8,2,1,8,3),
('g8-t3-l42-041',8,2,1,8,3),
('g8-t3-l43-042',8,2,1,8,3),
('g8-t3-l44-043',8,2,1,8,3),
('g8-t3-l45-044',8,2,1,8,3),
('g8-t3-l46-045',8,2,1,8,3),
('g8-t3-l47-046',8,2,1,8,3),
('g8-t3-l48-047',8,2,1,8,3),
('g8-t3-l49-048',8,2,1,8,3),
('g8-t3-l50-049',8,2,1,8,3),
('g8-t3-l51-050',8,2,1,8,3),
('g8-t3-l52-051',8,2,1,8,3),
('g8-t3-l53-052',8,2,1,8,3),
('g8-t3-l54-053',8,3,1,8,3),
('g8-t3-l55-054',8,3,1,8,3),
('g8-t3-l56-055',8,3,1,8,3),
('g8-t3-l57-056',8,3,1,8,3),
('g8-t3-l58-057',8,3,1,8,3),
('g8-t3-l59-058',8,3,1,8,3),
('g8-t3-l60-059',8,3,1,8,3),
('g8-t4-l61-060',8,3,1,8,4),
('g8-t4-l62-061',8,3,1,8,4),
('g8-t4-l63-062',8,3,1,8,4),
('g8-t4-l64-063',8,3,1,8,4),
('g8-t4-l65-064',8,3,1,8,4),
('g8-t4-l66-065',8,3,1,8,4),
('g8-t4-l67-066',8,3,1,8,4),
('g8-t4-l68-067',8,3,1,8,4),
('g8-t4-l69-068',8,3,1,8,4),
('g8-t4-l70-069',8,3,1,8,4),
('g8-t4-l71-070',8,3,1,8,4),
('g8-t4-l72-071',8,3,1,8,4),
('g8-t4-l73-072',8,3,1,8,4),
('g8-t4-l74-073',8,3,1,8,4),
('g8-t4-l75-074',8,3,1,8,4),
('g8-t4-l76-075',8,3,1,8,4),
('g8-t4-l77-076',8,3,1,8,4),
('g8-t4-l78-077',8,3,1,8,4),
('g8-t4-l79-078',8,3,1,8,4),
('g8-t4-l80-079',8,3,1,8,4),
('g9-t1-l01-001',9,1,2,9,1),
('g9-t1-l02-002',9,1,2,9,1),
('g9-t1-l03-003',9,1,2,9,1),
('g9-t1-l04-004',9,1,2,9,1),
('g9-t1-l05-005',9,1,2,9,1),
('g9-t1-l06-006',9,1,2,9,1),
('g9-t1-l07-007',9,1,2,9,1),
('g9-t1-l08-008',9,1,2,9,1),
('g9-t1-l09-009',9,1,2,9,1),
('g9-t1-l10-010',9,1,2,9,1),
('g9-t1-l11-011',9,1,2,9,1),
('g9-t1-l12-012',9,1,2,9,1),
('g9-t1-l13-013',9,1,2,9,1),
('g9-t1-l14-014',9,1,2,9,1),
('g9-t1-l15-015',9,1,2,9,1),
('g9-t1-l16-016',9,1,2,9,1),
('g9-t2-l17-018',9,1,2,9,2),
('g9-t2-l18-019',9,1,2,9,2),
('g9-t2-l19-020',9,1,2,9,2),
('g9-t2-l20-021',9,1,2,9,2),
('g9-t2-l21-022',9,1,2,9,2),
('g9-t2-l22-023',9,1,2,9,2),
('g9-t2-l23-024',9,1,2,9,2),
('g9-t2-l24-025',9,1,2,9,2),
('g9-t2-l25-026',9,1,2,9,2),
('g9-t2-l26-027',9,1,2,9,2),
('g9-t2-l27-028',9,1,2,9,2),
('g9-t2-l28-029',9,1,2,9,2),
('g9-t2-l29-030',9,1,2,9,2),
('g9-t2-l30-031',9,1,2,9,2),
('g9-t2-l31-032',9,1,2,9,2),
('g9-t2-l32-033',9,1,2,9,2),
('g9-t2-l33-034',9,1,2,9,2),
('g9-t2-l34-035',9,1,2,9,2),
('g9-t1-assessment-1',9,1,2,9,1),
('g9-t3-l35-024',9,2,2,9,3),
('g9-t3-l36-025',9,2,2,9,3),
('g9-t3-l37-026',9,2,2,9,3),
('g9-t3-l38-027',9,2,2,9,3),
('g9-t3-l39-028',9,2,2,9,3),
('g9-t3-l40-029',9,2,2,9,3),
('g9-t3-l41-030',9,2,2,9,3),
('g9-t3-l42-031',9,2,2,9,3),
('g9-t3-l43-032',9,2,2,9,3),
('g9-t3-l44-033',9,2,2,9,3),
('g9-t3-l45-034',9,2,2,9,3),
('g9-t3-l46-035',9,2,2,9,3),
('g9-t3-l47-036',9,2,2,9,3),
('g9-t3-l48-037',9,2,2,9,3),
('g9-t3-l49-038',9,2,2,9,3),
('g9-t3-l50-039',9,2,2,9,3),
('g9-t3-l51-040',9,2,2,9,3),
('g9-t3-l52-041',9,2,2,9,3),
('g9-t3-l53-042',9,2,2,9,3),
('g9-t3-l54-043',9,2,2,9,3),
('g9-t3-assessment-2',9,2,2,9,3),
('g9-t4-l55-045',9,3,2,9,4),
('g9-t4-l56-046',9,3,2,9,4),
('g9-t4-l57-047',9,3,2,9,4),
('g9-t4-l58-048',9,3,2,9,4),
('g9-t4-l59-049',9,3,2,9,4),
('g9-t4-l60-050',9,3,2,9,4),
('g9-t4-l61-051',9,3,2,9,4),
('g9-t4-l62-052',9,3,2,9,4),
('g9-t4-l63-053',9,3,2,9,4),
('g9-t4-l64-054',9,3,2,9,4),
('g9-t4-l65-055',9,3,2,9,4),
('g9-t4-l66-056',9,3,2,9,4),
('g9-t4-l67-057',9,3,2,9,4),
('g9-t4-l68-058',9,3,2,9,4),
('g9-t4-l69-059',9,3,2,9,4),
('g9-t4-l70-060',9,3,2,9,4),
('g9-t4-l71-061',9,3,2,9,4),
('g9-t4-l72-062',9,3,2,9,4),
('g9-t4-l73-063',9,3,2,9,4),
('g9-t4-l74-064',9,3,2,9,4),
('g9-t4-l75-065',9,3,2,9,4),
('g9-t4-assessment-3',9,3,2,9,4),
('g10-t1-l01-001',10,1,3,10,1),
('g10-t1-l02-002',10,1,3,10,1),
('g10-t1-l03-003',10,1,3,10,1),
('g10-t1-l04-004',10,1,3,10,1),
('g10-t1-l05-005',10,1,3,10,1),
('g10-t1-l06-006',10,1,3,10,1),
('g10-t1-l07-007',10,1,3,10,1),
('g10-t1-l08-008',10,1,3,10,1),
('g10-t1-l09-009',10,1,3,10,1),
('g10-t1-l10-010',10,1,3,10,1),
('g10-t1-l11-011',10,1,3,10,1),
('g10-t1-l12-012',10,1,3,10,1),
('g10-t1-l13-013',10,1,3,10,1),
('g10-t1-l14-014',10,1,3,10,1),
('g10-t1-l15-015',10,1,3,10,1),
('g10-t1-l16-016',10,1,3,10,1),
('g10-t2-l17-017',10,1,3,10,2),
('g10-t2-l18-018',10,1,3,10,2),
('g10-t2-l19-019',10,1,3,10,2),
('g10-t2-l20-020',10,1,3,10,2),
('g10-t2-l21-021',10,1,3,10,2),
('g10-t2-l22-022',10,1,3,10,2),
('g10-t2-l23-023',10,1,3,10,2),
('g10-t2-l24-024',10,1,3,10,2),
('g10-t2-l25-025',10,1,3,10,2),
('g10-t2-l26-026',10,1,3,10,2),
('g10-t2-l27-027',10,1,3,10,2),
('g10-t2-l28-028',10,1,3,10,2),
('g10-t2-l29-029',10,1,3,10,2),
('g10-t2-l30-030',10,1,3,10,2),
('g10-t2-l31-031',10,1,3,10,2),
('g10-t2-l32-032',10,1,3,10,2),
('g10-t2-l33-033',10,1,3,10,2),
('g10-t2-l34-034',10,1,3,10,2),
('g10-t2-l35-035',10,1,3,10,2),
('g10-t2-l36-036',10,1,3,10,2),
('g10-t3-l37-037',10,2,3,10,3),
('g10-t3-l38-038',10,2,3,10,3),
('g10-t3-l39-039',10,2,3,10,3),
('g10-t3-l40-040',10,2,3,10,3),
('g10-t3-l41-041',10,2,3,10,3),
('g10-t3-l42-042',10,2,3,10,3),
('g10-t3-l43-043',10,2,3,10,3),
('g10-t3-l44-044',10,2,3,10,3),
('g10-t3-l45-045',10,2,3,10,3),
('g10-t3-l46-046',10,2,3,10,3),
('g10-t3-l47-047',10,2,3,10,3),
('g10-t3-l48-048',10,2,3,10,3),
('g10-t3-l49-049',10,2,3,10,3),
('g10-t3-l50-050',10,2,3,10,3),
('g10-t3-l51-051',10,2,3,10,3),
('g10-t3-l52-052',10,2,3,10,3),
('g10-t3-l53-053',10,2,3,10,3),
('g10-t3-l54-054',10,2,3,10,3),
('g10-t3-l55-055',10,2,3,10,3),
('g10-t3-l56-056',10,2,3,10,3),
('g10-t3-l57-057',10,2,3,10,3),
('g10-t3-l58-058',10,2,3,10,3),
('g10-t4-l59-059',10,2,3,10,4),
('g10-t4-l60-060',10,2,3,10,4),
('g10-t4-l61-061',10,2,3,10,4),
('g10-t4-l62-062',10,2,3,10,4),
('g10-t4-l63-063',10,2,3,10,4),
('g10-t4-l64-064',10,2,3,10,4),
('g10-t4-l65-065',10,2,3,10,4),
('g10-t4-l66-066',10,2,3,10,4),
('g10-t4-l67-067',10,2,3,10,4),
('g10-t4-l68-068',10,2,3,10,4),
('g10-t4-l69-069',10,2,3,10,4),
('g10-t4-l70-070',10,2,3,10,4),
('g10-t4-l75-071',10,2,3,10,4),
('g10-t4-l76-072',10,2,3,10,4),
('g10-t4-l77-073',10,2,3,10,4),
('g10-t4-l78-074',10,2,3,10,4),
('g10-t4-l79-075',10,2,3,10,4),
('g10-t4-l80-076',10,2,3,10,4),
('g11-t1-l01-001',10,3,3,11,1),
('g11-t1-l02-002',10,3,3,11,1),
('g11-t1-l03-003',10,3,3,11,1),
('g11-t1-l04-004',10,3,3,11,1),
('g11-t1-l05-005',10,3,3,11,1),
('g11-t1-l06-006',10,3,3,11,1),
('g11-t1-l07-007',10,3,3,11,1),
('g11-t1-l08-008',10,3,3,11,1),
('g11-t1-l09-009',10,3,3,11,1),
('g11-t1-l10-010',10,3,3,11,1),
('g11-t1-l11-011',10,3,3,11,1),
('g11-t1-l12-012',10,3,3,11,1),
('g11-t1-l13-013',10,3,3,11,1),
('g11-t1-l14-014',10,3,3,11,1),
('g11-t1-l15-015',10,3,3,11,1),
('g11-t1-l16-016',10,3,3,11,1),
('g11-t1-l17-017',10,3,3,11,1),
('g11-t1-l18-018',10,3,3,11,1),
('g11-t1-l19-019',10,3,3,11,1),
('g11-t1-l20-020',10,3,3,11,1),
('g11-t2-l21-021',10,3,3,11,2),
('g11-t2-l22-022',10,3,3,11,2),
('g11-t2-l23-023',10,3,3,11,2),
('g11-t2-l24-024',10,3,3,11,2),
('g11-t2-l25-025',10,3,3,11,2),
('g11-t2-l26-026',10,3,3,11,2),
('g11-t2-l27-027',10,3,3,11,2),
('g11-t2-l28-028',10,3,3,11,2),
('g11-t2-l29-029',10,3,3,11,2),
('g11-t2-l30-030',10,3,3,11,2),
('g11-t2-l31-031',10,3,3,11,2),
('g11-t2-l32-032',10,3,3,11,2),
('g11-t2-l33-033',10,3,3,11,2),
('g11-t2-l34-034',10,3,3,11,2),
('g11-t2-l35-035',10,3,3,11,2),
('g11-t2-l36-036',10,3,3,11,2),
('g11-t2-l37-037',10,3,3,11,2),
('g11-t2-l38-038',10,3,3,11,2),
('g11-t2-l39-039',10,3,3,11,2),
('g11-t2-l40-040',10,3,3,11,2),
('g11-t3-l41-041',12,1,4,11,3),
('g11-t3-l42-042',12,1,4,11,3),
('g11-t3-l43-043',12,1,4,11,3),
('g11-t3-l44-044',12,1,4,11,3),
('g11-t3-l45-045',12,1,4,11,3),
('g11-t3-l46-046',12,1,4,11,3),
('g11-t3-l47-047',12,1,4,11,3),
('g11-t3-l48-048',12,1,4,11,3),
('g11-t3-l49-049',12,1,4,11,3),
('g11-t3-l50-050',12,1,4,11,3),
('g11-t3-l51-051',12,1,4,11,3),
('g11-t3-l52-052',12,1,4,11,3),
('g11-t3-l53-053',12,1,4,11,3),
('g11-t3-l54-054',12,1,4,11,3),
('g11-t3-l55-055',12,1,4,11,3),
('g11-t3-l56-056',12,1,4,11,3),
('g11-t3-l57-057',12,1,4,11,3),
('g11-t3-l58-058',12,1,4,11,3),
('g11-t3-l59-059',12,1,4,11,3),
('g11-t3-l60-060',12,1,4,11,3),
('g11-t4-l61-061',12,1,4,11,4),
('g11-t4-l62-062',12,1,4,11,4),
('g11-t4-l63-063',12,1,4,11,4),
('g11-t4-l64-064',12,1,4,11,4),
('g11-t4-l65-065',12,1,4,11,4),
('g11-t4-l66-066',12,1,4,11,4),
('g11-t4-l67-067',12,1,4,11,4),
('g11-t4-l68-068',12,1,4,11,4),
('g11-t4-l69-069',12,1,4,11,4),
('g11-t4-l70-070',12,1,4,11,4),
('g11-t4-l71-071',12,1,4,11,4),
('g11-t4-l72-072',12,1,4,11,4),
('g11-t4-l73-073',12,1,4,11,4),
('g11-t4-l74-074',12,1,4,11,4),
('g11-t4-l75-075',12,1,4,11,4),
('g11-t4-l76-076',12,1,4,11,4),
('g11-t4-l77-077',12,1,4,11,4),
('g11-t4-l78-078',12,1,4,11,4),
('g11-t4-l79-079',12,1,4,11,4),
('g11-t4-l80-080',12,1,4,11,4),
('g12-t1-l01-001',12,2,4,12,1),
('g12-t1-l02-002',12,2,4,12,1),
('g12-t1-l03-003',12,2,4,12,1),
('g12-t1-l04-004',12,2,4,12,1),
('g12-t1-l05-005',12,2,4,12,1),
('g12-t1-l06-006',12,2,4,12,1),
('g12-t1-l07-007',12,2,4,12,1),
('g12-t1-l08-008',12,2,4,12,1),
('g12-t1-l09-009',12,2,4,12,1),
('g12-t1-l10-010',12,2,4,12,1),
('g12-t1-l11-011',12,2,4,12,1),
('g12-t1-l12-012',12,2,4,12,1),
('g12-t1-l13-013',12,2,4,12,1),
('g12-t1-l14-014',12,2,4,12,1),
('g12-t1-l15-015',12,2,4,12,1),
('g12-t1-l16-016',12,2,4,12,1),
('g12-t1-l17-017',12,2,4,12,1),
('g12-t1-l18-018',12,2,4,12,1),
('g12-t1-l19-019',12,2,4,12,1),
('g12-t1-l20-020',12,2,4,12,1),
('g12-t2-l21-021',12,2,4,12,2),
('g12-t2-l22-022',12,2,4,12,2),
('g12-t2-l23-023',12,2,4,12,2),
('g12-t2-l24-024',12,2,4,12,2),
('g12-t2-l25-025',12,2,4,12,2),
('g12-t2-l26-026',12,2,4,12,2),
('g12-t2-l27-027',12,2,4,12,2),
('g12-t2-l28-028',12,2,4,12,2),
('g12-t2-l29-029',12,2,4,12,2),
('g12-t2-l30-030',12,2,4,12,2),
('g12-t2-l31-031',12,2,4,12,2),
('g12-t2-l32-032',12,2,4,12,2),
('g12-t2-l33-033',12,2,4,12,2),
('g12-t2-l34-034',12,2,4,12,2),
('g12-t2-l35-035',12,2,4,12,2),
('g12-t2-l36-036',12,2,4,12,2),
('g12-t2-l37-037',12,2,4,12,2),
('g12-t2-l38-038',12,2,4,12,2),
('g12-t2-l39-039',12,2,4,12,2),
('g12-t2-l40-040',12,2,4,12,2),
('g12-t3-l41-041',12,3,4,12,3),
('g12-t3-l42-042',12,3,4,12,3),
('g12-t3-l43-043',12,3,4,12,3),
('g12-t3-l44-044',12,3,4,12,3),
('g12-t3-l45-045',12,3,4,12,3),
('g12-t3-l46-046',12,3,4,12,3),
('g12-t3-l47-047',12,3,4,12,3),
('g12-t3-l48-048',12,3,4,12,3),
('g12-t3-l49-049',12,3,4,12,3),
('g12-t3-l50-050',12,3,4,12,3),
('g12-t3-l51-051',12,3,4,12,3),
('g12-t3-l52-052',12,3,4,12,3),
('g12-t4-l61-053',12,3,4,12,4),
('g12-t4-l62-054',12,3,4,12,4),
('g12-t4-l63-055',12,3,4,12,4),
('g12-t4-l64-056',12,3,4,12,4),
('g12-t4-l65-057',12,3,4,12,4),
('g12-t4-l66-058',12,3,4,12,4),
('g12-t4-l67-059',12,3,4,12,4),
('g12-t4-l68-060',12,3,4,12,4),
('g12-t4-l69-061',12,3,4,12,4),
('g12-t4-l70-062',12,3,4,12,4),
('g12-t4-l71-063',12,3,4,12,4),
('g12-t4-l72-064',12,3,4,12,4),
('g12-t4-l73-065',12,3,4,12,4),
('g12-t4-l74-066',12,3,4,12,4),
('g12-t4-l75-067',12,3,4,12,4),
('g12-t4-l76-068',12,3,4,12,4),
('g12-t4-l77-069',12,3,4,12,4),
('g12-t4-l78-070',12,3,4,12,4),
('g12-t4-l79-071',12,3,4,12,4),
('g12-t4-l80-072',12,3,4,12,4);
insert into public.curriculum_releases(release_key,source_release_key,runtime_format_version,compiler_version,schema_version,metadata)
values('ac-runtime-3','ac-zw-forms-1-4',3,'ac-zw-rebuild-v1',2,
 '{"market":"ZW","delivery_forms":4,"delivery_terms_per_form":3,"lessons":382,"assessments":3,"source_ids_preserved":true,"curriculum_approval_status":"not Ministry or ZIMSEC endorsement"}'::jsonb);

-- Reused verified contract: 20261009083654_pending_role_assignments_and_signup_claim.sql
-- Support assigning school, cohort-staff and learner roles before an email
-- address has registered. Assignments remain private and activate only for the
-- Auth user that registers with the matching normalized email address.
create table if not exists private.pending_role_assignments (
  id uuid primary key default gen_random_uuid(),
  email_normalized text not null,
  role_type text not null check (role_type in ('school_member','cohort_staff','learner')),
  school_id uuid not null references public.schools(id) on delete cascade,
  cohort_id uuid references public.cohorts(id) on delete cascade,
  role text not null,
  assigned_by uuid references auth.users(id) on delete set null,
  status text not null default 'pending'
    check (status in ('pending','applied','rejected','cancelled')),
  claimed_user_id uuid references auth.users(id) on delete set null,
  claimed_at timestamptz,
  failure_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint pending_role_assignment_shape check (
    (role_type = 'school_member' and cohort_id is null and role in ('owner','admin','educator'))
    or (role_type = 'cohort_staff' and cohort_id is not null and role in ('lead','educator','assistant'))
    or (role_type = 'learner' and cohort_id is not null and role = 'learner')
  )
);

create unique index if not exists pending_role_assignments_unique_pending_scope
  on private.pending_role_assignments (
    email_normalized, role_type, school_id, coalesce(cohort_id, '00000000-0000-0000-0000-000000000000'::uuid)
  ) where status = 'pending';
create index if not exists pending_role_assignments_pending_email
  on private.pending_role_assignments(email_normalized, created_at)
  where status = 'pending';

alter table private.pending_role_assignments enable row level security;
revoke all on table private.pending_role_assignments from anon, authenticated;

create or replace function private.guard_pending_role_assignment()
returns trigger
language plpgsql
security definer
set search_path to ''
as $function$
begin
  new.email_normalized := lower(trim(new.email_normalized));
  if new.email_normalized = '' or new.email_normalized !~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$' then
    raise invalid_parameter_value using message = 'A valid email address is required for a pending role assignment';
  end if;

  if new.status = 'pending' and new.role_type = 'learner' and exists (
    select 1 from private.pending_role_assignments p
    where p.email_normalized = new.email_normalized and p.status = 'pending'
      and p.role_type in ('school_member','cohort_staff') and p.id is distinct from new.id
  ) then
    raise check_violation using message = 'This email already has a pending staff assignment and cannot also be assigned as a learner';
  end if;

  if new.status = 'pending' and new.role_type in ('school_member','cohort_staff') and exists (
    select 1 from private.pending_role_assignments p
    where p.email_normalized = new.email_normalized and p.status = 'pending'
      and p.role_type = 'learner' and p.id is distinct from new.id
  ) then
    raise check_violation using message = 'This email already has a pending learner assignment and cannot also be assigned as staff';
  end if;

  new.updated_at := now();
  return new;
end;
$function$;

drop trigger if exists guard_pending_role_assignment on private.pending_role_assignments;
create trigger guard_pending_role_assignment
before insert or update of email_normalized, role_type, school_id, cohort_id, role, status
on private.pending_role_assignments
for each row execute function private.guard_pending_role_assignment();

create or replace function private.apply_pending_role_assignments_after_signup()
returns trigger
language plpgsql
security definer
set search_path to ''
as $function$
declare
  v_assignment private.pending_role_assignments%rowtype;
  v_error text;
begin
  if new.email is null or coalesce(new.is_anonymous, false) then
    return new;
  end if;

  insert into public.profiles(id, display_name, status)
  values (new.id, nullif(trim(coalesce(new.raw_user_meta_data ->> 'full_name', '')), ''), 'active')
  on conflict (id) do nothing;

  for v_assignment in
    select p.*
    from private.pending_role_assignments p
    where p.email_normalized = lower(trim(new.email)) and p.status = 'pending'
    order by case p.role_type when 'school_member' then 1 when 'cohort_staff' then 2 else 3 end,
             p.created_at, p.id
    for update
  loop
    begin
      if exists (
        select 1 from private.platform_admins pa
        where pa.user_id = new.id and pa.status = 'active'
      ) then
        raise check_violation using message = 'Platform administrators cannot receive learner, institution or facilitator assignments';
      end if;

      if v_assignment.role_type = 'school_member' then
        delete from public.learner_profiles where user_id = new.id;
        insert into public.school_memberships(school_id, user_id, role, status)
        values (v_assignment.school_id, new.id, v_assignment.role, 'active')
        on conflict (school_id, user_id) do update
          set role = excluded.role, status = 'active', updated_at = now();

      elsif v_assignment.role_type = 'cohort_staff' then
        if not exists (
          select 1 from public.school_memberships sm
          where sm.school_id = v_assignment.school_id and sm.user_id = new.id and sm.status = 'active'
        ) then
          raise foreign_key_violation using message = 'Facilitator assignment requires an active school membership';
        end if;
        delete from public.learner_profiles where user_id = new.id;
        insert into public.cohort_staff(cohort_id, user_id, role, status)
        values (v_assignment.cohort_id, new.id, v_assignment.role, 'active')
        on conflict (cohort_id, user_id) do update
          set role = excluded.role, status = 'active', updated_at = now();

      elsif v_assignment.role_type = 'learner' then
        if exists (
          select 1 from public.school_memberships sm where sm.user_id = new.id and sm.status = 'active'
        ) or exists (
          select 1 from public.cohort_staff cs where cs.user_id = new.id and cs.status = 'active'
        ) then
          raise check_violation using message = 'This account already has staff access and cannot also be assigned as a learner';
        end if;
        insert into public.learner_profiles(user_id)
        values (new.id)
        on conflict (user_id) do nothing;
        insert into public.cohort_enrolments(cohort_id, learner_id, status)
        values (v_assignment.cohort_id, new.id, 'active')
        on conflict (cohort_id, learner_id) do update
          set status = 'active', completed_at = null, updated_at = now();
      end if;

      update private.pending_role_assignments
      set status = 'applied', claimed_user_id = new.id, claimed_at = now(),
          failure_reason = null, updated_at = now()
      where id = v_assignment.id;

      insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, entity_id, metadata)
      values (
        v_assignment.assigned_by, v_assignment.school_id, 'pending_role.applied', 'user', new.id,
        jsonb_build_object('assignment_id', v_assignment.id, 'email', lower(trim(new.email)),
          'role_type', v_assignment.role_type, 'role', v_assignment.role, 'cohort_id', v_assignment.cohort_id)
      );
    exception when others then
      get stacked diagnostics v_error = message_text;
      update private.pending_role_assignments
      set status = 'rejected', claimed_user_id = new.id, claimed_at = now(),
          failure_reason = left(v_error, 500), updated_at = now()
      where id = v_assignment.id;
      insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, entity_id, metadata)
      values (
        v_assignment.assigned_by, v_assignment.school_id, 'pending_role.rejected', 'user', new.id,
        jsonb_build_object('assignment_id', v_assignment.id, 'email', lower(trim(new.email)),
          'role_type', v_assignment.role_type, 'role', v_assignment.role, 'reason', left(v_error, 500))
      );
    end;
  end loop;

  return new;
end;
$function$;

drop trigger if exists on_auth_user_created_apply_pending_roles on auth.users;
create trigger on_auth_user_created_apply_pending_roles
after insert on auth.users
for each row execute function private.apply_pending_role_assignments_after_signup();

create or replace function private.add_school_member_by_email_impl(p_school_id uuid, p_email text, p_role text default 'educator')
returns uuid
language plpgsql
security definer
set search_path to ''
as $function$
declare
  v_uid uuid;
  v_user uuid := (select auth.uid());
  v_converted_learner boolean := false;
  v_email text := lower(trim(p_email));
begin
  if v_user is null or not private.has_school_role(p_school_id, array['owner','admin']::text[]) then
    raise insufficient_privilege using message = 'School administration access required';
  end if;
  if p_role not in ('owner','admin','educator') then
    raise invalid_parameter_value using message = 'Invalid school role';
  end if;
  if p_role = 'owner' and not private.has_school_role(p_school_id, array['owner']::text[]) then
    raise insufficient_privilege using message = 'Only an existing school owner can assign the owner role';
  end if;
  if v_email is null or v_email = '' then
    raise invalid_parameter_value using message = 'A valid email address is required';
  end if;

  select u.id into v_uid from auth.users u
  where lower(u.email) = v_email and coalesce(u.is_anonymous, false) = false
  limit 1;

  if v_uid is null then
    insert into private.pending_role_assignments(email_normalized, role_type, school_id, cohort_id, role, assigned_by)
    values (v_email, 'school_member', p_school_id, null, p_role, v_user)
    on conflict do nothing;
    insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, metadata)
    values (v_user, p_school_id, 'school.member_assignment_pending', 'email',
      jsonb_build_object('email', v_email, 'role', p_role));
    return null;
  end if;

  if exists (select 1 from private.platform_admins pa where pa.user_id = v_uid and pa.status = 'active') then
    raise check_violation using message = 'The platform administrator cannot be assigned an institution role.';
  end if;

  delete from public.learner_profiles where user_id = v_uid;
  v_converted_learner := found;
  insert into public.school_memberships(school_id, user_id, role, status)
  values (p_school_id, v_uid, p_role, 'active')
  on conflict (school_id, user_id) do update set role = excluded.role, status = 'active', updated_at = now();

  insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, entity_id, metadata)
  values (v_user, p_school_id, 'school.member_added', 'user', v_uid,
    jsonb_build_object('role', p_role, 'converted_from_learner', v_converted_learner));
  return v_uid;
end;
$function$;

create or replace function private.add_cohort_staff_by_email_impl(p_cohort_id uuid, p_email text, p_role text default 'educator')
returns uuid
language plpgsql
security definer
set search_path to ''
as $function$
declare
  v_uid uuid;
  v_user uuid := (select auth.uid());
  v_school uuid;
  v_converted_learner boolean := false;
  v_email text := lower(trim(p_email));
begin
  select c.school_id into v_school from public.cohorts c where c.id = p_cohort_id;
  if v_user is null or v_school is null or not private.has_school_role(v_school, array['owner','admin']::text[]) then
    raise insufficient_privilege using message = 'School administration access required';
  end if;
  if p_role not in ('lead','educator','assistant') then
    raise invalid_parameter_value using message = 'Invalid cohort staff role';
  end if;
  if v_email is null or v_email = '' then
    raise invalid_parameter_value using message = 'A valid email address is required';
  end if;

  select u.id into v_uid from auth.users u
  where lower(u.email) = v_email and coalesce(u.is_anonymous, false) = false
  limit 1;

  if v_uid is null then
    if not exists (
      select 1 from private.pending_role_assignments p
      where p.email_normalized = v_email and p.school_id = v_school
        and p.role_type = 'school_member' and p.status = 'pending'
    ) then
      insert into private.pending_role_assignments(email_normalized, role_type, school_id, cohort_id, role, assigned_by)
      values (v_email, 'school_member', v_school, null, 'educator', v_user)
      on conflict do nothing;
    end if;
    insert into private.pending_role_assignments(email_normalized, role_type, school_id, cohort_id, role, assigned_by)
    values (v_email, 'cohort_staff', v_school, p_cohort_id, p_role, v_user)
    on conflict do nothing;
    insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, entity_id, metadata)
    values (v_user, v_school, 'cohort.staff_assignment_pending', 'cohort', p_cohort_id,
      jsonb_build_object('email', v_email, 'role', p_role));
    return null;
  end if;

  if exists (select 1 from private.platform_admins pa where pa.user_id = v_uid and pa.status = 'active') then
    raise check_violation using message = 'The platform administrator cannot be assigned a facilitator role.';
  end if;
  if not exists (
    select 1 from public.school_memberships sm
    where sm.school_id = v_school and sm.user_id = v_uid and sm.status = 'active'
  ) then
    raise foreign_key_violation using message = 'The facilitator must first be an active member of this school';
  end if;

  delete from public.learner_profiles where user_id = v_uid;
  v_converted_learner := found;
  insert into public.cohort_staff(cohort_id, user_id, role, status)
  values (p_cohort_id, v_uid, p_role, 'active')
  on conflict (cohort_id, user_id) do update set role = excluded.role, status = 'active', updated_at = now();

  insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, entity_id, metadata)
  values (v_user, v_school, 'cohort.staff_added', 'cohort', p_cohort_id,
    jsonb_build_object('user_id', v_uid, 'role', p_role, 'converted_from_learner', v_converted_learner));
  return v_uid;
end;
$function$;

create or replace function private.enrol_learner_by_email_impl(p_cohort_id uuid, p_email text)
returns uuid
language plpgsql
security definer
set search_path to ''
as $function$
declare
  v_uid uuid;
  v_user uuid := (select auth.uid());
  v_school uuid;
  v_email text := lower(trim(p_email));
begin
  select c.school_id into v_school from public.cohorts c where c.id = p_cohort_id;
  if v_user is null or v_school is null or (
    not private.is_cohort_staff_member(p_cohort_id)
    and not private.has_school_role(v_school, array['owner','admin']::text[])
  ) then
    raise insufficient_privilege using message = 'Cohort administration access required';
  end if;
  if v_email is null or v_email = '' then
    raise invalid_parameter_value using message = 'A valid email address is required';
  end if;

  select u.id into v_uid from auth.users u
  where lower(u.email) = v_email and coalesce(u.is_anonymous, false) = false
  limit 1;

  if v_uid is null then
    insert into private.pending_role_assignments(email_normalized, role_type, school_id, cohort_id, role, assigned_by)
    values (v_email, 'learner', v_school, p_cohort_id, 'learner', v_user)
    on conflict do nothing;
    insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, entity_id, metadata)
    values (v_user, v_school, 'cohort.learner_assignment_pending', 'cohort', p_cohort_id,
      jsonb_build_object('email', v_email));
    return null;
  end if;

  if exists (select 1 from private.platform_admins pa where pa.user_id = v_uid and pa.status = 'active')
     or exists (select 1 from public.school_memberships sm where sm.user_id = v_uid and sm.status = 'active')
     or exists (select 1 from public.cohort_staff cs where cs.user_id = v_uid and cs.status = 'active') then
    raise check_violation using message = 'This account is assigned to staff or administration and cannot be enrolled as a learner.';
  end if;

  insert into public.learner_profiles(user_id) values (v_uid) on conflict (user_id) do nothing;
  insert into public.cohort_enrolments(cohort_id, learner_id, status)
  values (p_cohort_id, v_uid, 'active')
  on conflict (cohort_id, learner_id) do update set status = 'active', completed_at = null, updated_at = now();

  insert into public.audit_events(actor_user_id, school_id, event_type, entity_type, entity_id, metadata)
  values (v_user, v_school, 'cohort.learner_enrolled', 'learner', v_uid,
    jsonb_build_object('cohort_id', p_cohort_id));
  return v_uid;
end;
$function$;



-- Reused verified contract: 20261009084320_pending_role_assignments_deny_client_access.sql
-- Make the private pending-assignment deny posture explicit and remove default
-- function execution grants from trigger-only helpers.
drop policy if exists pending_role_assignments_deny_client_access on private.pending_role_assignments;
create policy pending_role_assignments_deny_client_access
on private.pending_role_assignments
as permissive
for all
to anon, authenticated
using (false)
with check (false);

revoke all on table private.pending_role_assignments from anon, authenticated;
revoke execute on function private.guard_pending_role_assignment() from public, anon, authenticated;
revoke execute on function private.apply_pending_role_assignments_after_signup() from public, anon, authenticated;



-- Reused verified contract: 20261009121509_add_portfolio_review_guidance.sql
alter table public.evidence_reviews
  add column if not exists portfolio_interpretation text not null default '',
  add column if not exists next_pathway text not null default '';

comment on column public.evidence_reviews.portfolio_interpretation is
  'Facilitator validation or correction of the learner portfolio interpretation.';
comment on column public.evidence_reviews.next_pathway is
  'Facilitator-recommended next learning experience, grounded in reviewed evidence.';


-- Reused verified contract: 20261009151609_revoke_excessive_client_table_privileges.sql
-- Tighten client table privileges and fail closed for future app objects.
-- RLS controls row access; it does not make TRUNCATE safe, and table-level
-- TRIGGER / REFERENCES grants are not needed by learner-facing clients.
-- No AC application table is intended for anonymous Data API access; the
-- learner curriculum itself is served from application assets, not anon table grants.
revoke all privileges on all tables in schema public from public, anon;
revoke all privileges on all tables in schema private from public, anon;
revoke maintain, truncate, trigger, references on all tables in schema public
  from authenticated;
revoke maintain, truncate, trigger, references on all tables in schema private
  from authenticated;
revoke all privileges on all sequences in schema public from public, anon, authenticated;
revoke all privileges on all sequences in schema private from public, anon, authenticated;

-- Migrations run as postgres. Do not automatically grant broad table, sequence,
-- or function privileges to clients on objects created by future migrations.
-- Required access must be granted explicitly per object in its migration.
alter default privileges for role postgres in schema public
  revoke all on tables from public, anon, authenticated;
alter default privileges for role postgres in schema public
  revoke all on sequences from public, anon, authenticated;
alter default privileges for role postgres in schema public
  revoke execute on functions from public, anon, authenticated;
alter default privileges for role postgres in schema private
  revoke all on tables from public, anon, authenticated;
alter default privileges for role postgres in schema private
  revoke all on sequences from public, anon, authenticated;
alter default privileges for role postgres in schema private
  revoke execute on functions from public, anon, authenticated;

do $$
begin
  if exists (
    select 1
    from information_schema.table_privileges
    where table_schema in ('public', 'private')
      and grantee in ('PUBLIC', 'anon')
  ) then
    raise exception 'AC application tables still grant anonymous/public access';
  end if;

  if exists (
    select 1
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    cross join lateral aclexplode(coalesce(c.relacl, acldefault('r', c.relowner))) a
    where n.nspname in ('public', 'private')
      and c.relkind in ('r', 'p')
      and a.grantee in (
        0,
        (select oid from pg_roles where rolname = 'anon'),
        (select oid from pg_roles where rolname = 'authenticated')
      )
      and a.privilege_type in ('MAINTAIN', 'TRUNCATE', 'TRIGGER', 'REFERENCES')
  ) then
    raise exception 'AC client roles retain excessive table privileges';
  end if;

  if exists (
    select 1
    from pg_default_acl d
    join pg_namespace n on n.oid = d.defaclnamespace
    cross join lateral aclexplode(d.defaclacl) a
    where n.nspname in ('public', 'private')
      and d.defaclrole = (select oid from pg_roles where rolname = 'postgres')
      and a.grantee in (
        0,
        (select oid from pg_roles where rolname = 'anon'),
        (select oid from pg_roles where rolname = 'authenticated')
      )
      and d.defaclobjtype in ('r', 'S', 'f')
  ) then
    raise exception 'AC postgres defaults still grant broad client privileges';
  end if;
end;
$$;


-- Reused verified contract: 20261012091449_protect_assessment_decisions.sql
-- Preserve rows; protect staff-controlled decisions independently of row ownership.
-- Validate on an isolated project before release. Do not apply directly to production.

-- Seed the existing authored rubric contract (no new assessment criteria).
insert into public.rubric_templates(key,name,purpose) values('analysis-v1','Analysis and reasoning','For checkpoints and analytical responses where the learner must explain, compare, connect or justify.') on conflict(key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('analysis-v1','task-coverage','Addresses the task','Responds to the actual question and its required parts.',1,'[{"level":1,"label":"Beginning","description":"The response does not yet address the task."},{"level":2,"label":"Developing","description":"The response addresses some of the task but leaves important parts unresolved."},{"level":3,"label":"Secure","description":"The response addresses the required task clearly."},{"level":4,"label":"Strong","description":"The response addresses the full task with precision and useful detail."}]'::jsonb,0) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('analysis-v1','reasoning','Reasoning','Shows why the learner reached the conclusion.',1,'[{"level":1,"label":"Beginning","description":"A conclusion is given without supporting reasoning."},{"level":2,"label":"Developing","description":"Some reasoning is present but connections are limited."},{"level":3,"label":"Secure","description":"Reasoning is clear and supports the conclusion."},{"level":4,"label":"Strong","description":"Reasoning is well connected, considered and shows depth."}]'::jsonb,1) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('analysis-v1','application','Application','Connects the idea to a real example, system, decision or consequence.',1,'[{"level":1,"label":"Beginning","description":"No meaningful application is visible yet."},{"level":2,"label":"Developing","description":"An example or application is mentioned but not developed."},{"level":3,"label":"Secure","description":"The response applies the idea appropriately."},{"level":4,"label":"Strong","description":"The response applies the idea thoughtfully and shows consequences or trade-offs."}]'::jsonb,2) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_templates(key,name,purpose) values('reflection-v1','Reflection and learning','For reflections where the learner is making meaning from an experience, decision or change in thinking.') on conflict(key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('reflection-v1','specificity','Specificity','Uses concrete detail rather than a generic statement.',1,'[{"level":1,"label":"Beginning","description":"The reflection is too general to show what happened."},{"level":2,"label":"Developing","description":"Some specific detail is present."},{"level":3,"label":"Secure","description":"The reflection identifies a clear experience, thought or example."},{"level":4,"label":"Strong","description":"The reflection uses precise detail that makes the learning visible."}]'::jsonb,0) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('reflection-v1','insight','Insight','Explains what the learner noticed, understood or reconsidered.',1,'[{"level":1,"label":"Beginning","description":"The response describes without identifying learning."},{"level":2,"label":"Developing","description":"A learning point is present but lightly explained."},{"level":3,"label":"Secure","description":"The learner explains a meaningful insight."},{"level":4,"label":"Strong","description":"The learner shows a deeper shift, tension or connection in their thinking."}]'::jsonb,1) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('reflection-v1','next-step','Next step','Identifies what the learner will do, test or pay attention to next where relevant.',1,'[{"level":1,"label":"Beginning","description":"No next step is visible where one is required."},{"level":2,"label":"Developing","description":"A broad intention is stated."},{"level":3,"label":"Secure","description":"A practical next step is identified."},{"level":4,"label":"Strong","description":"The next step is specific, realistic and clearly linked to the reflection."}]'::jsonb,2) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_templates(key,name,purpose) values('action-v1','Action and real-world evidence','For interviews, observations, behavioural experiments and launch tasks.') on conflict(key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('action-v1','action-evidence','Evidence of action','Shows that the learner actually carried out the required action.',1,'[{"level":1,"label":"Beginning","description":"There is not yet enough evidence that the action happened."},{"level":2,"label":"Developing","description":"The action is described but supporting detail is limited."},{"level":3,"label":"Secure","description":"The response provides credible evidence that the action was completed."},{"level":4,"label":"Strong","description":"The evidence is specific, traceable and clearly connected to the task."}]'::jsonb,0) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('action-v1','observation','Observation','Records what happened rather than only what the learner expected.',1,'[{"level":1,"label":"Beginning","description":"The response does not yet record what happened."},{"level":2,"label":"Developing","description":"Some result or observation is recorded."},{"level":3,"label":"Secure","description":"The learner records the relevant result clearly."},{"level":4,"label":"Strong","description":"The learner notices important detail, differences or unintended outcomes."}]'::jsonb,1) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('action-v1','learning','Learning from action','Explains what the learner learned from doing the task.',1,'[{"level":1,"label":"Beginning","description":"No learning is identified yet."},{"level":2,"label":"Developing","description":"A learning point is stated but not developed."},{"level":3,"label":"Secure","description":"The learner explains what the action taught them."},{"level":4,"label":"Strong","description":"The learner connects the action to a broader decision, system or future behaviour."}]'::jsonb,2) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_templates(key,name,purpose) values('project-v1','Project evidence','For projects, maps, plans, presentations and multi-step portfolio work.') on conflict(key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('project-v1','completeness','Completeness','Includes the required elements of the project.',1,'[{"level":1,"label":"Beginning","description":"Major required elements are missing."},{"level":2,"label":"Developing","description":"The project is partially complete."},{"level":3,"label":"Secure","description":"The required elements are present."},{"level":4,"label":"Strong","description":"The project is complete, coherent and carefully developed."}]'::jsonb,0) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('project-v1','application','Application','Uses the curriculum idea in the project rather than only repeating theory.',1,'[{"level":1,"label":"Beginning","description":"The project does not yet apply the idea."},{"level":2,"label":"Developing","description":"Some application is visible."},{"level":3,"label":"Secure","description":"The project applies the idea appropriately."},{"level":4,"label":"Strong","description":"The application is thoughtful, contextual and shows trade-offs or consequences."}]'::jsonb,1) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('project-v1','evidence','Use of evidence','Uses observations, information, calculations or artefacts appropriately.',1,'[{"level":1,"label":"Beginning","description":"Evidence is absent or unrelated."},{"level":2,"label":"Developing","description":"Some relevant evidence is included."},{"level":3,"label":"Secure","description":"Relevant evidence supports the work."},{"level":4,"label":"Strong","description":"Evidence is well selected, interpreted and strengthens the project."}]'::jsonb,2) on conflict(rubric_key,criterion_key) do nothing;
insert into public.rubric_criteria(rubric_key,criterion_key,label,description,weight,levels,position) values('project-v1','communication','Communication','Makes the learner''s thinking understandable to another person.',1,'[{"level":1,"label":"Beginning","description":"The work is difficult to follow."},{"level":2,"label":"Developing","description":"The main idea can be understood with some gaps."},{"level":3,"label":"Secure","description":"The work communicates its purpose and reasoning clearly."},{"level":4,"label":"Strong","description":"The work is clear, purposeful and communicates complex thinking effectively."}]'::jsonb,3) on conflict(rubric_key,criterion_key) do nothing;


create or replace function private.guard_evidence_decision()
returns trigger language plpgsql set search_path='' as $$
begin
  if current_user in ('anon','authenticated') then
    if tg_op='UPDATE' and (new.learner_id,new.response_key,new.definition_id) is distinct from (old.learner_id,old.response_key,old.definition_id) then
      raise insufficient_privilege using message='Evidence identity cannot be reassigned';
    end if;
    if not private.can_review_learner(new.learner_id) then
      if new.status not in ('captured','in-review') then
        raise insufficient_privilege using message='A facilitator must assign review decisions';
      end if;
      if tg_op='UPDATE' and old.status in ('accepted','verified','needs-revision') and new.response_value is not distinct from old.response_value then
        raise insufficient_privilege using message='Reviewed evidence requires a revised response';
      end if;
    end if;
  end if;
  return new;
end;
$$;
revoke all on function private.guard_evidence_decision() from public,anon,authenticated;
create trigger guard_evidence_decision before insert or update on public.evidence_records
for each row execute function private.guard_evidence_decision();

create or replace function private.guard_assessment_decision()
returns trigger language plpgsql set search_path='' as $$
begin
  if current_user in ('anon','authenticated') then
    if tg_op='UPDATE' and (new.learner_id,new.curriculum_release_id,new.unit_id,new.attempt_number) is distinct from (old.learner_id,old.curriculum_release_id,old.unit_id,old.attempt_number) then
      raise insufficient_privilege using message='Assessment identity cannot be reassigned';
    end if;
    if not private.can_review_learner(new.learner_id) then
      if new.status='reviewed' or new.score is not null or new.reviewed_at is not null or new.result<>'{}'::jsonb then
        raise insufficient_privilege using message='A facilitator must assign assessment results';
      end if;
      if tg_op='UPDATE' and old.status='reviewed' then
        raise insufficient_privilege using message='Reviewed attempts cannot be overwritten';
      end if;
    end if;
  end if;
  return new;
end;
$$;
revoke all on function private.guard_assessment_decision() from public,anon,authenticated;
create trigger guard_assessment_decision before insert or update on public.assessment_attempts
for each row execute function private.guard_assessment_decision();

-- A review is tied to the exact answer seen by its reviewer. Existing history
-- remains unchanged and has no invented historical snapshot.
alter table public.evidence_reviews add column response_value_at_review text;

create or replace function private.capture_review_history()
returns trigger language plpgsql security definer set search_path='' as $$
declare v_evidence public.evidence_records;
begin
  if (select auth.uid()) is null or new.reviewer_id<>(select auth.uid()) then
    raise insufficient_privilege using message='Authenticated reviewer required';
  end if;
  select * into strict v_evidence from public.evidence_records where id=new.evidence_record_id for update;
  if not private.can_review_learner(v_evidence.learner_id) then
    raise insufficient_privilege using message='Learner is outside reviewer scope';
  end if;
  if exists(select 1 from public.evidence_reviews where evidence_record_id=new.evidence_record_id and reviewer_id<>new.reviewer_id) then
    raise insufficient_privilege using message='Evidence has already been reviewed by another facilitator';
  end if;
  -- The same check covers direct Data API review writes, not only the RPC.
  perform private.lock_review_response(v_evidence.learner_id,v_evidence.response_key,v_evidence.response_value);
  if tg_op='UPDATE' and (new.evidence_record_id,new.reviewer_id) is distinct from (old.evidence_record_id,old.reviewer_id) then
    raise insufficient_privilege using message='Review identity cannot be reassigned';
  end if;
  if jsonb_typeof(new.criteria_scores)<>'object' or exists (
    select 1 from jsonb_each(new.criteria_scores) e where e.value not in ('1'::jsonb,'2'::jsonb,'3'::jsonb,'4'::jsonb)
  ) then raise check_violation using message='Rubric scores must be integers from one to four'; end if;
  if new.status='needs-revision' and trim(new.feedback)='' then
    raise check_violation using message='Revision feedback is required';
  end if;
  if new.rubric_key is not null then
    if exists(select 1 from jsonb_object_keys(new.criteria_scores) k where not exists(
      select 1 from public.rubric_criteria rc where rc.rubric_key=new.rubric_key and rc.criterion_key=k
    )) then raise check_violation using message='Scores must use the authored rubric criteria'; end if;
    if new.status in ('accepted','verified') and exists(
      select 1 from public.rubric_criteria rc where rc.rubric_key=new.rubric_key and not new.criteria_scores ? rc.criterion_key
    ) then raise check_violation using message='Score every authored criterion before accepting'; end if;
  end if;
  new.response_value_at_review:=v_evidence.response_value;
  new.reviewed_at:=now(); new.updated_at:=now();
  return new;
end;
$$;
revoke all on function private.capture_review_history() from public,anon,authenticated;
create trigger capture_review_history before insert or update on public.evidence_reviews
for each row execute function private.capture_review_history();

-- AFTER triggers log only committed insert/update operations, never an
-- attempted INSERT that becomes ON CONFLICT UPDATE.
create or replace function private.record_review_history()
returns trigger language plpgsql security definer set search_path='' as $$
begin
  if (select auth.uid()) is null or new.reviewer_id<>(select auth.uid()) then
    raise insufficient_privilege using message='Authenticated reviewer required';
  end if;
  insert into public.audit_events(actor_user_id,event_type,entity_type,entity_id,metadata)
  values((select auth.uid()),'evidence.review_saved','evidence_review',new.id,
    jsonb_build_object('previous',case when tg_op='UPDATE' then to_jsonb(old) else null end,'current',to_jsonb(new)));
  update public.evidence_records set status=case when new.status='pending' then 'in-review' else new.status end,updated_at=now() where id=new.evidence_record_id;
  return new;
end;
$$;
revoke all on function private.record_review_history() from public,anon,authenticated;
create trigger record_review_history after insert or update on public.evidence_reviews
for each row execute function private.record_review_history();

-- One transaction: lock the canonical response, compare the reviewed answer,
-- store the evidence, then store the review. Any failure rolls everything back.
-- Staff have SELECT rather than UPDATE access to learner answers. Keep the
-- scoped lock in private code so taking a lock never grants answer-write access.
create or replace function private.lock_review_response(p_learner_id uuid,p_response_key text,p_response_value text)
returns void language plpgsql security definer set search_path='' as $$
declare v_response jsonb;
begin
  if (select auth.uid()) is null or not private.can_review_learner(p_learner_id) then
    raise insufficient_privilege using message='Authorized facilitator required';
  end if;
  select pr.response into v_response from public.prompt_responses pr
    join public.curriculum_releases cr on cr.id=pr.curriculum_release_id
    where pr.learner_id=p_learner_id and pr.prompt_key=p_response_key and cr.release_key='ac-runtime-3' for update of pr;
  if not found or jsonb_typeof(v_response)<>'string' or (v_response#>>'{}') is distinct from p_response_value then
    raise serialization_failure using message='The learner answer changed; reload it before reviewing';
  end if;
end;
$$;
revoke all on function private.lock_review_response(uuid,text,text) from public,anon;
grant execute on function private.lock_review_response(uuid,text,text) to authenticated;

create or replace function public.save_facilitator_review(
  p_learner_id uuid,p_response_key text,p_response_value text,p_auto_result jsonb,p_review jsonb
) returns uuid language plpgsql security invoker set search_path='' as $$
declare v_record uuid; v_review uuid; v_status text:=p_review->>'status'; v_actor uuid:=(select auth.uid());
begin
  if v_actor is null or not private.can_review_learner(p_learner_id) then
    raise insufficient_privilege using message='Authorized facilitator required';
  end if;
  if v_status not in ('pending','accepted','needs-revision','verified') or v_status is null then
    raise check_violation using message='Invalid review status';
  end if;
  perform private.lock_review_response(p_learner_id,p_response_key,p_response_value);
  v_record:=public.upsert_facilitator_evidence_record(p_learner_id,p_response_key,p_response_value,p_auto_result,
    case when v_status='pending' then 'in-review' else v_status end);
  insert into public.evidence_reviews(evidence_record_id,reviewer_id,rubric_key,status,criteria_scores,feedback,portfolio_interpretation,next_pathway)
    values(v_record,v_actor,p_review->>'rubricKey',v_status,coalesce(p_review->'criteria','{}'::jsonb),coalesce(p_review->>'feedback',''),coalesce(p_review->>'portfolioInterpretation',''),coalesce(p_review->>'nextPathway',''))
    on conflict(evidence_record_id,reviewer_id) do update set rubric_key=excluded.rubric_key,status=excluded.status,criteria_scores=excluded.criteria_scores,feedback=excluded.feedback,portfolio_interpretation=excluded.portfolio_interpretation,next_pathway=excluded.next_pathway
    returning id into v_review;
  return v_review;
end;
$$;
revoke all on function public.save_facilitator_review(uuid,text,text,jsonb,jsonb) from public,anon;
grant execute on function public.save_facilitator_review(uuid,text,text,jsonb,jsonb) to authenticated;


-- Reused verified contract: 20261012095153_learning_revision_sync.sql
-- Additive revision metadata; no learner content is rewritten or removed.
alter table public.prompt_responses add column sync_revision bigint not null default 1 check (sync_revision > 0);
alter table public.lesson_notes add column sync_revision bigint not null default 1 check (sync_revision > 0);
alter table public.lesson_progress add column sync_revision bigint not null default 1 check (sync_revision > 0);
alter table public.learner_profiles add column sync_revision bigint not null default 1 check (sync_revision > 0);

create function private.advance_learning_revision() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  -- Opening a lesson must not invalidate a concurrent completion change.
  new.sync_revision := old.sync_revision + 1;
  if tg_table_name = 'lesson_progress' then
    if new.status is not distinct from old.status and new.completed_at is not distinct from old.completed_at then new.sync_revision := old.sync_revision; end if;
  end if;
  return new;
end; $$;
revoke all on function private.advance_learning_revision() from public,anon,authenticated;
create trigger advance_learning_revision before update on public.prompt_responses for each row execute function private.advance_learning_revision();
create trigger advance_learning_revision before update on public.lesson_notes for each row execute function private.advance_learning_revision();
create trigger advance_learning_revision before update on public.lesson_progress for each row execute function private.advance_learning_revision();
create trigger advance_learning_revision before update on public.learner_profiles for each row execute function private.advance_learning_revision();

create function public.save_learning_changes(p_changes jsonb, p_opened_unit text default null)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  v_uid uuid := auth.uid(); v_release uuid; v_item jsonb; v_kind text; v_key text;
  v_unit text; v_value jsonb; v_current jsonb; v_expected bigint; v_revision bigint;
  v_match text[]; v_grade smallint; v_term smallint; v_results jsonb := '[]';
  v_profile public.learner_profiles%rowtype;
begin
  if v_uid is null or not private.has_active_session() then raise insufficient_privilege using message='Sign in before saving learning work'; end if;
  if not exists (select 1 from public.profiles where id=v_uid and status='active') then
    raise insufficient_privilege using message='An active account is required';
  end if;
  if jsonb_typeof(p_changes) is distinct from 'array' or jsonb_array_length(p_changes)>500
    or octet_length(p_changes::text)>1048576 then
    raise invalid_parameter_value using message='Invalid learning change batch';
  end if;
  select id into strict v_release from public.curriculum_releases where release_key='ac-runtime-3';
  -- Serialize all saves for this account, including insertion races. A transaction
  -- cannot write another account: ownership comes only from the verified JWT.
  perform pg_advisory_xact_lock(hashtextextended(v_uid::text,0));
  if exists (select 1 from jsonb_array_elements(p_changes) x
    group by x->>'kind',x->>'key' having count(*)>1) then
    raise invalid_parameter_value using message='Duplicate learning change';
  end if;
  for v_item in select value from jsonb_array_elements(p_changes) order by value->>'kind',value->>'key' loop
    v_kind:=v_item->>'kind'; v_key:=v_item->>'key'; v_value:=v_item->'value';
    if v_kind is null or v_kind not in ('prompt','note','completion','profile')
      or v_key is null or length(v_key)>400 or (v_item->>'expected') is null
      or (v_item->>'expected') !~ '^[0-9]{1,15}$' then
      raise invalid_parameter_value using message='Invalid learning change';
    end if;
    v_expected:=(v_item->>'expected')::bigint; v_revision:=0; v_current:=null;
    if v_kind='profile' then
      if v_key<>'self' or jsonb_typeof(v_value) is distinct from 'object'
        or jsonb_typeof(v_value->'displayName') is distinct from 'string' or length(v_value->>'displayName')>80
        or not (v_value ? 'grade') or not ((v_value->'grade')='null'::jsonb or ((v_value->>'grade') ~ '^(8|9|10|12)$')) then
        raise invalid_parameter_value using message='Invalid learning profile';
      end if;
      -- Preserve the existing product rule: staff and platform admins have no
      -- learner profile. Their local learning profile remains device-specific.
      if private.is_platform_admin() or exists(select 1 from public.school_memberships where user_id=v_uid and status='active')
        or exists(select 1 from public.cohort_staff where user_id=v_uid and status='active') then
        raise insufficient_privilege using message='Learner profile is unavailable for this role';
      end if;
      select * into v_profile from public.learner_profiles where user_id=v_uid for update;
      if found then v_revision:=v_profile.sync_revision; v_current:=jsonb_build_object('displayName',coalesce(v_profile.preferred_name,''),'grade',v_profile.current_grade); end if;
    else
      v_unit:=split_part(v_key,'::',1); v_match:=regexp_match(v_unit,'^g(8|9|10|11|12)-t([1-4])-[a-zA-Z0-9_-]+$');
      if v_match is null or (v_kind='prompt' and v_key !~ '::prompt-[a-zA-Z0-9_-]+::[a-zA-Z0-9_-]+$')
        or (v_kind<>'prompt' and v_key<>v_unit) then
        raise invalid_parameter_value using message='Invalid lesson identity';
      end if;
      select delivery_grade,delivery_term into v_grade,v_term from private.zimbabwe_runtime_units where unit_id=v_unit;
      if not found then raise invalid_parameter_value using message='Lesson is outside the Zimbabwe release'; end if;
      if (v_kind in ('note','prompt') and (jsonb_typeof(v_value) is distinct from 'string' or length(v_value#>>'{}')>100000))
        or (v_kind='completion' and jsonb_typeof(v_value) is distinct from 'boolean') then
        raise invalid_parameter_value using message='Invalid learning value';
      end if;
      if v_kind='prompt' then
        select sync_revision,response into v_revision,v_current from public.prompt_responses where learner_id=v_uid and curriculum_version='ac-runtime-3' and unit_id=v_unit and prompt_key=v_key for update;
      elsif v_kind='note' then
        select sync_revision,to_jsonb(note) into v_revision,v_current from public.lesson_notes where learner_id=v_uid and curriculum_version='ac-runtime-3' and unit_id=v_unit for update;
      else
        select sync_revision,to_jsonb(status='completed') into v_revision,v_current from public.lesson_progress where learner_id=v_uid and curriculum_version='ac-runtime-3' and unit_id=v_unit for update;
      end if;
      v_revision:=coalesce(v_revision,0);
    end if;
    -- Equal values acknowledge retries without advancing a revision. Different
    -- values require the exact baseline revision, irrespective of client time.
    if v_value is distinct from v_current and v_expected<>v_revision then
      v_results:=v_results||jsonb_build_array(jsonb_build_object('kind',v_kind,'key',v_key,'value',v_current,'revision',v_revision,'conflict',true));
      continue;
    end if;
    if v_value is distinct from v_current then
      if v_kind='profile' then
        insert into public.learner_profiles(user_id,preferred_name,current_grade) values(v_uid,nullif(v_value->>'displayName',''),(v_value->>'grade')::smallint)
          on conflict(user_id) do update set preferred_name=excluded.preferred_name,current_grade=excluded.current_grade returning sync_revision into v_revision;
      elsif v_kind='prompt' then
        insert into public.prompt_responses(learner_id,curriculum_version,curriculum_release_id,grade,term,unit_id,prompt_key,response,response_kind)
          values(v_uid,'ac-runtime-3',v_release,v_grade,v_term,v_unit,v_key,v_value,'text')
          on conflict(learner_id,curriculum_version,unit_id,prompt_key) do update set response=excluded.response,answered_at=now() returning sync_revision into v_revision;
      elsif v_kind='note' then
        insert into public.lesson_notes(learner_id,curriculum_version,curriculum_release_id,grade,term,unit_id,note)
          values(v_uid,'ac-runtime-3',v_release,v_grade,v_term,v_unit,v_value#>>'{}')
          on conflict(learner_id,curriculum_version,unit_id) do update set note=excluded.note returning sync_revision into v_revision;
      else
        insert into public.lesson_progress(learner_id,curriculum_version,curriculum_release_id,grade,term,unit_id,status,completed_at)
          values(v_uid,'ac-runtime-3',v_release,v_grade,v_term,v_unit,case when v_value='true' then 'completed' else 'in_progress' end,case when v_value='true' then now() else null end)
          on conflict(learner_id,curriculum_version,unit_id) do update set status=excluded.status,completed_at=excluded.completed_at returning sync_revision into v_revision;
      end if;
    end if;
    v_results:=v_results||jsonb_build_array(jsonb_build_object('kind',v_kind,'key',v_key,'value',v_value,'revision',v_revision,'conflict',false));
  end loop;
  if p_opened_unit is not null then
    v_match:=regexp_match(p_opened_unit,'^g(8|9|10|11|12)-t([1-4])-[a-zA-Z0-9_-]+$');
    select delivery_grade,delivery_term into v_grade,v_term from private.zimbabwe_runtime_units where unit_id=p_opened_unit;
    if not found then raise invalid_parameter_value using message='Invalid opened lesson'; end if;
    insert into public.lesson_progress(learner_id,curriculum_version,curriculum_release_id,grade,term,unit_id,last_opened_at)
      values(v_uid,'ac-runtime-3',v_release,v_grade,v_term,p_opened_unit,now())
      on conflict(learner_id,curriculum_version,unit_id) do update set last_opened_at=excluded.last_opened_at;
  end if;
  if p_opened_unit is not null and not exists(select 1 from jsonb_array_elements(v_results) x where x->>'kind'='completion' and x->>'key'=p_opened_unit) then
    select sync_revision,to_jsonb(status='completed') into v_revision,v_current from public.lesson_progress where learner_id=v_uid and curriculum_version='ac-runtime-3' and unit_id=p_opened_unit;
    v_results:=v_results||jsonb_build_array(jsonb_build_object('kind','completion','key',p_opened_unit,'value',v_current,'revision',v_revision,'conflict',false));
  end if;
  return v_results;
end; $$;
revoke all on function public.save_learning_changes(jsonb,text) from public,anon;
grant execute on function public.save_learning_changes(jsonb,text) to authenticated;
-- Stale clients cannot bypass conflict checks with unconditional writes/deletes.



-- Reused verified contract: 20261012095157_active_role_sessions.sql
-- JWTs remain cryptographically valid after logout. Require their real Auth
-- session for private data and privileged actions, without client-set role claims.
create function private.has_active_session() returns boolean
language sql stable security definer set search_path='' as $$
  select exists (
    select 1 from auth.sessions s join auth.users u on u.id=s.user_id
      join public.profiles p on p.id=u.id
    where s.id=case when (auth.jwt()->>'session_id') ~ '^[0-9a-fA-F-]{36}$' then (auth.jwt()->>'session_id')::uuid else null end
      and s.user_id=auth.uid() and (s.not_after is null or s.not_after>now())
      and u.deleted_at is null and (u.banned_until is null or u.banned_until<now())
      and p.status='active'
  );
$$;
revoke all on function private.has_active_session() from public,anon;
grant execute on function private.has_active_session() to authenticated;
create function public.has_active_session() returns boolean
language sql stable security invoker set search_path='' as $$ select private.has_active_session(); $$;
revoke all on function public.has_active_session() from public,anon;
grant execute on function public.has_active_session() to authenticated;

CREATE OR REPLACE FUNCTION private.can_review_learner(target_learner uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and private.has_active_session() and (
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
AS $function$ select (select auth.uid()) is not null and private.has_active_session() and (
  private.is_platform_admin() or auth.uid()=target_learner
  or exists (select 1 from public.cohort_enrolments ce join public.cohort_staff cs on cs.cohort_id=ce.cohort_id
    where ce.learner_id=target_learner and ce.status='active' and cs.user_id=auth.uid() and cs.status='active')
  or exists (select 1 from public.cohort_enrolments ce join public.cohorts c on c.id=ce.cohort_id
    join public.school_memberships sm on sm.school_id=c.school_id
    where ce.learner_id=target_learner and ce.status='active' and sm.user_id=auth.uid()
      and sm.status='active' and sm.role in ('owner','admin'))
); $function$
;

CREATE OR REPLACE FUNCTION private.has_school_role(target_school uuid, target_roles text[] DEFAULT NULL::text[])
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$ select (select auth.uid()) is not null and private.has_active_session() and (
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
AS $function$ select (select auth.uid()) is not null and private.has_active_session() and (
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
AS $function$ select (select auth.uid()) is not null and private.has_active_session() and (
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
AS $function$ select (select auth.uid()) is not null and private.has_active_session() and exists (
  select 1 from private.platform_admins pa
  where pa.user_id=(select auth.uid()) and pa.status='active'
); $function$
;

-- Restrictive policy ANDs with every existing role/ownership policy. The
-- session lookup is an init-plan per statement, not a check for every row.
do $$ declare t record; begin
  for t in select tablename from pg_tables where schemaname='public' loop
    execute format('create policy active_auth_session on public.%I as restrictive for all to authenticated using ((select private.has_active_session())) with check ((select private.has_active_session()))',t.tablename);
  end loop;
end; $$;

-- Apply only explicitly edited settings under the account lock. No stale
-- read/merge/upsert cycle can overwrite unrelated preferences from a device.
create function public.save_account_preferences(p_patch jsonb) returns public.account_preferences
language plpgsql security definer set search_path='' as $$
declare v_uid uuid:=auth.uid(); v_row public.account_preferences;
begin
  if not private.has_active_session() then raise insufficient_privilege using message='Active session required'; end if;
  if jsonb_typeof(p_patch) is distinct from 'object' or p_patch='{}'::jsonb
    or exists(select 1 from jsonb_object_keys(p_patch) k where k not in ('appearance','accent','textSize','readingWidth'))
    or (p_patch ? 'appearance' and coalesce(p_patch->>'appearance','') not in ('system','light','warm','dark'))
    or (p_patch ? 'accent' and coalesce(p_patch->>'accent','') not in ('commerce','blue','amber','sage'))
    or (p_patch ? 'textSize' and coalesce(p_patch->>'textSize','') not in ('small','standard','large','extra_large'))
    or (p_patch ? 'readingWidth' and coalesce(p_patch->>'readingWidth','') not in ('narrow','standard','wide')) then
    raise invalid_parameter_value using message='Invalid preferences';
  end if;
  perform pg_advisory_xact_lock(hashtextextended(v_uid::text,0));
  insert into public.account_preferences(user_id,appearance,accent,text_size,reading_width)
    values(v_uid,coalesce(p_patch->>'appearance','system'),coalesce(p_patch->>'accent','commerce'),coalesce(p_patch->>'textSize','standard'),coalesce(p_patch->>'readingWidth','standard'))
    on conflict(user_id) do update set
      appearance=case when p_patch ? 'appearance' then excluded.appearance else account_preferences.appearance end,
      accent=case when p_patch ? 'accent' then excluded.accent else account_preferences.accent end,
      text_size=case when p_patch ? 'textSize' then excluded.text_size else account_preferences.text_size end,
      reading_width=case when p_patch ? 'readingWidth' then excluded.reading_width else account_preferences.reading_width end
    returning * into v_row;
  return v_row;
end; $$;
revoke all on function public.save_account_preferences(jsonb) from public,anon;
grant execute on function public.save_account_preferences(jsonb) to authenticated;



-- Reused verified contract: 20261012102159_account_bound_learning_saves.sql
-- Add this facade before the new frontend. The SDK reads its bearer token at
-- dispatch time, so a local getSession check cannot bind an in-flight save to
-- its originating account. Derive ownership in the existing save transaction,
-- and additionally reject any difference from the account that authored it.
create function public.save_learning_changes_for_account(p_account_id uuid,p_changes jsonb,p_opened_unit text default null)
returns jsonb language plpgsql security invoker set search_path='' as $$
begin
  if p_account_id is null or p_account_id is distinct from auth.uid() then
    raise insufficient_privilege using message='The active account changed; reload before saving';
  end if;
  return public.save_learning_changes(p_changes,p_opened_unit);
end; $$;
revoke all on function public.save_learning_changes_for_account(uuid,jsonb,text) from public,anon;
grant execute on function public.save_learning_changes_for_account(uuid,jsonb,text) to authenticated;


-- Reused verified contract: 20261012103733_require_revision_checked_writes.sql
-- Run after the revised frontend is deployed. Earlier rollout migrations are
-- additive, allowing active old clients to keep saving until the release switches.
-- Stale clients retain local edits and receive a visible sync/reload error.
revoke insert,update,delete on public.prompt_responses,public.lesson_notes,public.lesson_progress,public.learner_profiles,public.account_preferences from authenticated;

-- Keep elevated implementation code out of the exposed API schema. Public
-- wrappers are invoker functions; private implementations validate the live
-- session and derive ownership from auth.uid(), never from client parameters.
alter function public.save_learning_changes(jsonb,text) set schema private;
alter function private.save_learning_changes(jsonb,text) rename to save_learning_changes_impl;
revoke all on function private.save_learning_changes_impl(jsonb,text) from public,anon;
grant execute on function private.save_learning_changes_impl(jsonb,text) to authenticated;
create function public.save_learning_changes(p_changes jsonb,p_opened_unit text default null) returns jsonb
language sql security invoker set search_path='' as $$ select private.save_learning_changes_impl(p_changes,p_opened_unit); $$;
revoke all on function public.save_learning_changes(jsonb,text) from public,anon;
grant execute on function public.save_learning_changes(jsonb,text) to authenticated;
alter function public.save_account_preferences(jsonb) set schema private;
alter function private.save_account_preferences(jsonb) rename to save_account_preferences_impl;
revoke all on function private.save_account_preferences_impl(jsonb) from public,anon;
grant execute on function private.save_account_preferences_impl(jsonb) to authenticated;
create function public.save_account_preferences(p_patch jsonb) returns public.account_preferences
language sql security invoker set search_path='' as $$ select private.save_account_preferences_impl(p_patch); $$;
revoke all on function public.save_account_preferences(jsonb) from public,anon;
grant execute on function public.save_account_preferences(jsonb) to authenticated;


-- Reused verified contract: 20261012165126_reject_stale_reviews_without_retry_loop.sql
-- Logical stale-answer rejection must not request transaction retries.
-- PostgREST 14 can retry SQLSTATE 40001 indefinitely; P0001 returns HTTP 400.
-- Keep the existing authorization, row lock and atomic review operation.

create or replace function private.lock_review_response(p_learner_id uuid,p_response_key text,p_response_value text)
returns void language plpgsql security definer set search_path='' as $$
declare v_response jsonb;
begin
  if (select auth.uid()) is null or not private.can_review_learner(p_learner_id) then
    raise insufficient_privilege using message='Authorized facilitator required';
  end if;
  select pr.response into v_response from public.prompt_responses pr
    join public.curriculum_releases cr on cr.id=pr.curriculum_release_id
    where pr.learner_id=p_learner_id and pr.prompt_key=p_response_key and cr.release_key='ac-runtime-3' for update of pr;
  if not found or jsonb_typeof(v_response)<>'string' or (v_response#>>'{}') is distinct from p_response_value then
    raise exception using message='The learner answer changed; reload it before reviewing';
  end if;
end;
$$;


-- Maintain the old Zimbabwe delivery fields when current clients set a Form key.
create function private.set_zimbabwe_delivery_form() returns trigger
language plpgsql set search_path='' as $$
begin
 if tg_table_name='learner_profiles' then
  new.current_form:=case new.current_grade when 8 then 1 when 9 then 2 when 10 then 3 when 12 then 4 else new.current_form end;
 else
  new.zimbabwe_form:=case new.grade when 8 then 1 when 9 then 2 when 10 then 3 when 12 then 4 else new.zimbabwe_form end;
 end if;
 return new;
end $$;
revoke all on function private.set_zimbabwe_delivery_form() from public,anon,authenticated;
create trigger set_zimbabwe_delivery_form before insert or update of current_grade on public.learner_profiles for each row execute function private.set_zimbabwe_delivery_form();
create trigger set_zimbabwe_delivery_form before insert or update of grade on public.cohorts for each row execute function private.set_zimbabwe_delivery_form();
notify pgrst,'reload schema';
commit;
