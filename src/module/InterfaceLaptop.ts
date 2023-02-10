// Ini adalah blueprint
export default interface InterfaceLaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchScreen: boolean;
}
