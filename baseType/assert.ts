let unknownVar1: unknown;

(unknownVar1 as { foo: () => {} }).foo();

const str: string = "putong";
(str as any).func().foo().prop;

function foo1(union: string | number) {
  if ((union as string).includes("putong")) {
  }
  if ((union as number).toFixed() === "18") {
  }
}

interface IFoo {
  name: string;
}

declare const obj5: {
  foo: IFoo;
};

const { foo = {} as IFoo } = obj5;
