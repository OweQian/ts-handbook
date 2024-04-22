let unknownVar: unknown = "putong";

unknownVar = false;
unknownVar = {
  age: 18,
};
unknownVar = function () {};

const var1: string = unknownVar;
const var2: number = unknownVar;
const var5: boolean = unknownVar;

const var6: any = unknownVar;
const var7: unknown = unknownVar;

unknownVar.foo();
