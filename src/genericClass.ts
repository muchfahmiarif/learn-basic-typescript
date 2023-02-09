class List<T> {
  private data: T[];

  constructor(...args: T[]) {
    this.data = args;
  }

  add(value: T): void {
    this.data.push(value);
  }

  addMultiple(...args: T[]): void {
    this.data.push(...args);
  }

  getAll(): T[] {
    return this.data;
  }
}

const numberList = new List<number>(1, 2, 3, 4, 5);
numberList.add(6);
numberList.addMultiple(7, 8, 9, 10);
console.log(numberList.getAll());

let random = new List<number | string>(1, "a", 3, "c", 5);
random.add("d");
random.add(6);
random.addMultiple(7, "e", 9, "f");
console.log(random.getAll());
