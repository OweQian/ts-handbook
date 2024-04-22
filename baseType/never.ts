type UnionWithNever = "putong" | 18 | false | void | never;

declare let v1: never;
declare let v2: void;

v1 = v2;
v2 = v1;

function justThrow(): never {
  throw new Error("Function not implemented.");
}
