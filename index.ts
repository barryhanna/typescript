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
