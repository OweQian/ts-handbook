class Foo {
  prop: string;

  constructor(inputProps: string) {
    this.prop = inputProps;
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  get PropA(): string {
    return `${this.prop}+A`;
  }

  set PropA(value: string): string {
    this.prop = `${value}+A`;
  }
}

const _Foo = class {
  prop: string;

  constructor(inputProps: string) {
    this.prop = inputProps;
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  get PropA(): string {
    return `${this.prop}+A`;
  }

  set PropA(value: string) {
    this.prop = `${value}+A`;
  }
};

class MofifiedFoo {
  private prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  public get PropA(): string {
    return `${this.prop}+A`;
  }

  public set PropA(value: string) {
    this.prop = `${value}+A`;
  }
}

class Foo2 {
  constructor(public arg1: string, private arg2: boolean) {}
}

new Foo2("putong", false);
