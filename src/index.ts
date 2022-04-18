import Job, { Person, Type2 } from './interfaces';

const isOpen: boolean = false;
const userName: string = 'Baz';
const myAge: number = 40;
const list: number[] = [0, 1, 2, 4, 5];
const me: [string, number, boolean] = ['Baz', 40, false];

const job: Job = Job.WebDesigner;

const phone: any = 'Pixel';
const tablet: any = 3;

// TypeScript Functions
// const sayWord = (word?: string): string => {
//   console.log(word || 'Hello');
//   return word || 'Hello';
// };

// Default params - type inferred from default param type
// Rest params work as expected
const sayWord = (word = 'Hello', ...otherStuff: string[]): string => {
  console.log(word);
  console.log(otherStuff);
  return word;
};

sayWord('DFgre', 'Bob', 'Dave');
sayWord();
// sayWord(3 + '');

// Implicit types
let newName: string | number = 'Chas';
newName = 'Harry';
newName = 10;

let newNameTwo = newName;
newNameTwo = 10;

// Union Types with '|'
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
};

makeMargin(10);
makeMargin('Bob');

// Null types
let dog: string | null = 'Sammy';
dog = null;
console.log(dog);
dog = 'Lucy';
dog = undefined;
// dog = 10;
// dog = true;

// Interfaces
// interface Person {
//   name: string;
//   age?: number; // optional with ?
// }

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};

sayName({ age: 32, name: 'Bob' });
sayName({ name: 'Bob', age: 32 });

// Enums

// Numeric enums
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz, //2
}

const createContent = (contentType: Type) => {};

// createContent('Video');
createContent(Type.Video);

console.log(Type.Quiz);

const createContent2 = (contentType: Type2) => {};

// createContent2('Video');
createContent2(Type2.Video);

console.log(Type2.Quiz);

// Classes

class Team {
  teamName: string;
  // public teamName: string; <- same as above
  // private teamName: string; <- prevents outside usage
  // readonly teamName: string; <- prevents from being changed

  constructor(teamName) {
    this.teamName = teamName;
  }

  score(): string {
    this.teamName = 'changing';
    console.log(this.teamName);
    return 'goal!';
  }
}

const redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;

// Generics
const outputInput = <T>(arg: T): T => {
  return arg;
};

const output = outputInput('hi');
outputInput(3);

// Duck typing
class Dancer implements Person {
  name: string;
  age: number;
}

let ElNino: Person = new Dancer();

const fake = {
  name: 'Bob',
  age: 64,
};

ElNino = fake;
