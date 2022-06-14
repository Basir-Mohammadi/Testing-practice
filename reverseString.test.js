const reverseString = require ('./reverseString');

//Arrange
const message = 'Reversed string';

//Act
const reverseFunction = reverseString('jest');

//Assert
test(message, () => { expect(reverseFunction).toBe('tsej') });