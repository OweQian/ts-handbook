abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

class ImpFoo implements AbsFoo {
  absProp: string = "putong";

  get absGetter() {
    return "putong";
  }

  absMethod(name: string): string {
    return name;
  }
}

interface FooStruct {
  absProp: string;
  get absGetter(): string;
  absMethod(names: string): string;
}

class IFFoo implements FooStruct {
  absProp: string = "putong";

  get absGetter() {
    return "putong";
  }

  absMethod(name: string): string {
    return name;
  }
}
