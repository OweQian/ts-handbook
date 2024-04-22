let anyVar: any = "putong";

anyVar = false;
anyVar = {
  age: 18,
};

anyVar = function () {};

const var1: string = anyVar;
const var2: number = anyVar;
const var3: number = anyVar;
const var4: {} = anyVar;

anyVar.foo.bar.baz();
anyVar[0][1][2].prop;
