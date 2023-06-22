import calculate from './calculate';
import operate from './operate';

describe('calculate', () => {
  let obj;

  beforeEach(() => {
    obj = {
      total: null,
      next: null,
      operation: null,
    };
  });

  it('should handle AC button', () => {
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should handle decimal point button', () => {
    const buttonName = '.';
    const expected = { ...obj, next: '0.' };

    // Test when obj.next is null
    const result1 = calculate(obj, buttonName);
    expect(result1).toEqual(expected);

    // Test when obj.next already contains a decimal point
    obj.next = '1.5';
    const result2 = calculate(obj, buttonName);
    expect(result2).toEqual({ ...obj });

    // Test when obj.total already contains a decimal point
    obj.total = '3.14';
    const result3 = calculate(obj, buttonName);
    expect(result3).toEqual({ ...obj });

    // Test when obj.total and obj.next are null
    obj.total = null;
    obj.next = null;
    const result4 = calculate(obj, buttonName);
    expect(result4).toEqual(expected);
  });

  it('should handle = button', () => {
    const buttonName = '=';
    const total = '10';
    const next = '5';
    const operation = '+';
    obj.total = total;
    obj.next = next;
    obj.operation = operation;
    const expected = {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('should handle +/- button', () => {
    const buttonName = '+/-';
    const number = '5';
    obj.next = number;
    const expected = { ...obj, next: (-1 * parseFloat(number)).toString() };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });
});
