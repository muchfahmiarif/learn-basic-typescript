import Laptop from "./BaseLaptop";

class Asus<T> extends Laptop<T> {
  constructor(type: T, withNumeric: boolean, withTouchScreen: boolean) {
    super("Asus", type, withNumeric, withTouchScreen);
  }
}

export default Asus;
