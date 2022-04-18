"use strict";
exports.__esModule = true;
var interfaces_1 = require("./src/interfaces");
var isOpen = false;
var userName = 'Baz';
var myAge = 40;
var list = [0, 1, 2, 4, 5];
var me = ['Baz', 40, false];
var job = interfaces_1["default"].WebDesigner;
var phone = 'Pixel';
var tablet = 3;
// TypeScript Functions
// const sayWord = (word?: string): string => {
//   console.log(word || 'Hello');
//   return word || 'Hello';
// };
// Default params - type inferred from default param type
// Rest params work as expected
var sayWord = function (word) {
    if (word === void 0) { word = 'Hello'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(word);
    console.log(otherStuff);
    return word;
};
sayWord('DFgre', 'Bob', 'Dave');
sayWord();
// sayWord(3 + '');
// Implicit types
var newName = 'Chas';
newName = 'Harry';
newName = 10;
var newNameTwo = newName;
newNameTwo = 10;
// Union Types with '|'
var makeMargin = function (x) {
    return "margin: ".concat(x, "px");
};
makeMargin(10);
makeMargin('Bob');
// Null types
var dog = 'Sammy';
dog = null;
console.log(dog);
dog = 'Lucy';
dog = undefined;
dog = 10;
dog = true;
// Interfaces
// interface Person {
//   name: string;
//   age?: number; // optional with ?
// }
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({ age: 32, name: 'Bob' });
sayName({ name: 'Bob', age: 32 });
// Enums
// Numeric enums
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz";
})(Type || (Type = {}));
var createContent = function (contentType) { };
createContent('Video');
createContent(Type.Video);
console.log(Type.Quiz);
var createContent2 = function (contentType) { };
createContent2('Video');
createContent2(interfaces_1.Type2.Video);
console.log(interfaces_1.Type2.Quiz);
// Classes
var Team = /** @class */ (function () {
    // public teamName: string; <- same as above
    // private teamName: string; <- prevents outside usage
    // readonly teamName: string; <- prevents from being changed
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        this.teamName = 'changing';
        console.log(this.teamName);
        return 'goal!';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;
