export class Validate {
  static isInva(value: string) {
    if (value.length === 0) {
      return false;
    }
  }

  static isIn(value: string) {
    if (value.length === 0) {
      return null;
    }
    return true;
  }
}
