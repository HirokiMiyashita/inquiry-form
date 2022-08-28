export class Validate {
  static isInva(value: string) {
    if (value.length === 0) {
      return;
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
