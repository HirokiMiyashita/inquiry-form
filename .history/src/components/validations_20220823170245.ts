export class Validate {
  static isLengthName(value: string) {
    if (value.length >= 17) {
      return false;
    } else {
      return value;
    }
  }

  static isIn(value: string) {
    if (value.length === 0) {
      return false;
    } else {
      return value;
    }
  }
}
