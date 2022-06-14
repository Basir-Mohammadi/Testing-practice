const characterCount = require('./StringCount');

//Arrange
const message = {
  success: 'Length of string is 4',
  error: 'length of the string must be less than 11 and greater than 0'
}

//Act
const countSuccessFunc = characterCount('basir');
const countFailFunc = () => characterCount('');

//Assert
test(message.success, () => { expect(countSuccessFunc).toBe(5); });
test(message.error, () => { expect(countFailFunc).toThrow('Error') });