const isOpen: boolean = false;
const userName: string = 'Baz';
const myAge: number = 40;
const list: number[] = [0, 1, 2, 4, 5];
const me: [string, number, boolean] = ['Baz', 40, false];

enum Job {
  WebDev,
  WebDesigner,
  PM,
}

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
dog = 10;
dog = true;

// Interfaces
interface Person {
  name: string;
  age?: number; // optional with ?
}

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};

sayName({ age: 32, name: 'Bob' });
sayName({ name: 'Bob', age: 32 });
