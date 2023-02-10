import InterfaceLaptop from "./InterfaceLaptop";
import * as Keyboard from "./Keyboard";
import { b } from "./Keyboard";

abstract class BaseLaptop<T> implements InterfaceLaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchScreen: boolean;

  constructor(name: string, type: T, withNumeric: boolean, withTouchScreen: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchScreen = withTouchScreen;
  }

  a(): string {
    return Keyboard.a();
  }

  b(): string {
    return b();
  }
}

export default BaseLaptop;
