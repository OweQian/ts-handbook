function foo(name: string, age?: number): number {
  const inputAge = age ?? 18;
  return name.length + inputAge;
}

function foo1(name: string, age: number = 18): number {
  return name.length + age;
}
