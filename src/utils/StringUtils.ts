import CryptoJS from 'crypto-js';

export default class StringUtils {
  static SHA256Hex = (str: string) => {
    return CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex);
  };
}
