export default class StringUtils {
  static calculateUpdatedTotal = (type_dummy: string, all_price: number, shipping: string) => {
    const parseNumber = parseFloat(shipping.replace(/[^\d.-]/g, '')).toFixed(2);
    if (type_dummy === 'Express shipping') return (all_price + Number(parseNumber)).toFixed(2);
    if (type_dummy === 'Pick Up')
      return (all_price - (all_price * Number(parseNumber)) / 100).toFixed(2);
    if (type_dummy === 'Free shipping') return all_price.toFixed(2);
    return 0;
  };
}
