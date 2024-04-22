function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo;
  }
}

const res1 = func(18); // number
const res2 = func(18, true); // string
const res3 = func(18, false); // number
