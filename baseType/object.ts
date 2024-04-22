interface IDescription {
  name: string;
  age: number;
  male: boolean;
}

const obj1: IDescription = {
  name: "putong",
  age: 18,
  male: false,
};

interface IDescription1 {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescription1 = {
  name: "putong",
  age: 18,
  male: false,
  // 无需实现 func 也是合法的
};

obj2.male = true;
obj2.func = () => {};

interface IDescription2 {
  readonly name: string;
  age: number;
}

const obj3: IDescription2 = {
  name: "putong",
  age: 18,
};

obj3.name = "wangxiaobai";
