/** Zimbabwe delivery labels; numeric curriculum keys retain the ZA backend contract. */
export const curriculumKeys = [8, 9, 10, 12] as const;
export const schoolTerms = [1, 2, 3] as const;
export const curriculumRoot = "/zimbabwe-curriculum";
export const formNumber = (key:number):number => ({8:1,9:2,10:3,12:4}[key] ?? key);
export const yearLabel = (key:number|string):string => `Form ${typeof key==="number"?formNumber(key):key}`;
export const yearNoun = "Form";
export const programmeSpan = "Forms 1–4";
export const formThemes:Record<number,string> = {
  8:"Identity, Money & Habits", 9:"Work, Value & Enterprise",
  10:"Assets, Systems, Leverage & Leadership", 12:"Wealth, Adult Systems & Life Launch",
};
