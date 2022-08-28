export class Validate {
  static isLengthName(value: string) {
    if (value.length >= 17) {
      return false;
    } else {
      return value;
    }
  }

  static isLengthAddress(value: string) {
    if (value.length >= 201) {
      return false;
    } else {
      return value;
    }
  }

  static isLengthPhone(value: string) {
    if (value.length >= 13) {
      return false;
    } else {
      return value;
    }
  }
}
