import Laptop from "./BaseLaptop";

class Macbook<T> extends Laptop<T> {
  constructor(type: T, withNumeric: boolean, withTouchScreen: boolean) {
    super("Macbook", type, withNumeric, withTouchScreen);
  }
}

export default Macbook;
