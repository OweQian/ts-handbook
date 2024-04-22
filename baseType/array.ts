const arr1: string[] = [];
const arr2: Array<string> = [];

const arr3: string[] = ["a", "b", "c"];
console.log(arr3[99]);
const arr4: [string, string, string] = ["a", "b", "c"];
console.log(arr4[4]);

const arr5: [string, number, boolean] = ["a", 4, false];

const arr6: [string, number?, boolean?] = ["a"];

type TupleLength = typeof arr6.length;

const arr7: [name: string, age: number, male: boolean] = ["a", 4, false];

const arr8: [name: string, age?: number, male?: boolean] = ["a"];

const arr9: string[] = [];
const [ele1, ele2, ...rest] = arr9;

const arr10: [string, number, boolean] = ["a", 20, false];
const [nameValue, ageValue, maleValue, other] = arr10;
