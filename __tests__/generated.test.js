const Unknown = require('./Unknown');

describe('Input validation for user input in the unknown name file', () => {
  test('Valid input should return true', () => {
    const userInput = 'John Doe';
    const isValid = Unknown.validateInput(userInput);
    expect(isValid).toBe(true);
  });

  test('Empty input should return false', () => {
    const userInput = '';
    const isValid = Unknown.validateInput(userInput);
    expect(isValid).toBe(false);
  });

  test('Input with special characters should return false', () => {
    const userInput = 'John@Doe';
    const isValid = Unknown.validateInput(userInput);
    expect(isValid).toBe(false);
  });

  test('Input with numbers should return false', () => {
    const userInput = 'John123';
    const isValid = Unknown.validateInput(userInput);
    expect(isValid).toBe(false);
  });
});