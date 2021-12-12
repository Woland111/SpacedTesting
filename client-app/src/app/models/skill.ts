export interface Skill {
  id: string;
  question: string;
  answer: string;
  creationTimestamp: Date;
  nextTestOn: Date;
  result: string;
}