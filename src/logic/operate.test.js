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
});
