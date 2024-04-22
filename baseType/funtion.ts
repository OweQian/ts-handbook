function foo(name: string): number {
  return name.length;
}

function foo2(name: string) {
  return name.length;
}

const foo3 = function (name: string): number {
  return name.length;
};

const foo4: (name: string) => number = function (name) {
  return name.length;
};

type FuncFoo = (name: string) => number;
const foo5: FuncFoo = (name) => {
  return name.length;
};
