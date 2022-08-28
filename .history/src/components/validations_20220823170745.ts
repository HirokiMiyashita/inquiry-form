export class Validate {
  static isLengthName(value: string) {
    if (value.length >= 17) {
      return false;
    } else {
      return value;
    }
  }

  static isLengthAddress(value: string) {
    if (value.length > 200) {
      return false;
    } else {
      return value;
    }
  }

  static isLengthPhone(value: string) {
    if (value.length > 12) {
      return false;
    } else {
      return value;
    }
  }
}
