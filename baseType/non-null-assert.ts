declare const foo6: {
  func?: () => {
    prop?: number | null;
  };
};

foo6.func().prop.toFixed();

foo6.func!().prop!.toFixed();

foo6.func?.().prop?.toFixed();

const element = document.querySelector("#id")!;
const target = [1, 2, 3, 4].find((item) => item === 18)!;

(
  (
    foo6.func as () => {
      prop?: number;
    }
  )().prop as number
).toFixed();

interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

const obj6 = <IStruct>{
  bar: {
    baz: {},
  },
};
