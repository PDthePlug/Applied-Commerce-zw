import {curriculumKeys, yearLabel} from "@/lib/edition";
import availability from "@/content/zimbabwe/teaching-availability.json";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonReader } from "@/components/lesson-reader";
export async function generateMetadata({params}:{params:Promise<{grade:string;term:string}>}):Promise<Metadata>{const p=await params;return {title:`${yearLabel(Number(p.grade))} · Term ${p.term}`};}
export default async function UnitPage({params,searchParams}:{params:Promise<{grade:string;term:string;unit:string}>;searchParams:Promise<{classroom?:string;presentation?:string}>}){const p=await params;const grade=Number(p.grade),term=Number(p.term);if(!(curriculumKeys as readonly number[]).includes(grade)||![1,2,3].includes(term))notFound();const context=await searchParams;const presentationOnly=(availability.lessonIds as string[]).includes(p.unit)&&context.presentation==="1";return <LessonReader grade={grade} term={term} unitId={p.unit} classroomContext={!presentationOnly&&context.classroom==="1"} presentationOnly={presentationOnly}/>;}
