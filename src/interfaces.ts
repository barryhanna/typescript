export interface Person {
  name: string;
  age?: number; // optional with ?
}

// String enums
export enum Type2 {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST', // 1
  Quiz = 'QUIZ', //2
}

enum Job {
  WebDev,
  WebDesigner,
  PM,
}

export default Job;
