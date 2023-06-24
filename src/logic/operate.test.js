import operate from './operate';

describe('Calculation operation works', () => {
  test('Addiion operation works', () => {
    expect(operate(3, 4, '+')).toBe('7');
  });

  test('Multiplication operation works', () => {
    expect(operate(3, 4, 'x')).toBe('12');
  });

  test('Subtraction operation works', () => {
    expect(operate(5, 4, '-')).toBe('1');
  });

  test('Division operation works', () => {
    expect(operate(8, 4, '÷')).toBe('2');
  });

  test('No Division with Zero ', () => {
    expect(operate(8, 0, '÷')).toBe("Can't divide by 0.");
  });
  it('should clear the calculator data when "AC" button is pressed', () => {
    expect(() => operate({ total: '5', next: '3', operation: '+' }).toBe("clear the calculator 'AC'"));
    expect(() => operate({ total: null, next: null, operation: null }).toBe("Clear  'AC'"));
  });
  it('should perform the calculation when the "=" button is pressed', () => {
    expect(() => operate({ total: '5', next: '3', operation: '+' }).toBe("Got the result '='"));
    expect(() => operate({ total: '8', next: null, operation: null }).toBe("Equal '='"));
    expect(() => operate({ total: '5', next: '3', operation: '-' }).toBe("Got the result '='"));
    expect(() => operate({ total: '8', next: null, operation: null }).toBe("Equal '='"));
  });
  it('should append numbers correctly when multiple number buttons are pressed', () => {
    expect(() => operate({ total: null, next: null, operation: null }).toBe('1'));
    expect(() => operate({ total: null, next: null, operation: null }).toBe('5'));
  });
  it('should change the sign of the number when "+/-" button is pressed', () => {
    expect(() => operate({ total: null, next: '5', operation: null }).toBe('+/-'));
    expect(() => operate({ total: null, next: '-5', operation: null }).toBe('-5'));
    expect(() => operate({ total: null, next: '10', operation: null }).toBe('+/-'));
    expect(() => operate({ total: null, next: '-10', operation: null }).toBe('-10'));
  });
});
