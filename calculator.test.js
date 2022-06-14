const calculator = require ("./calculator");

//Arrange
const message = {
  add: 'sum of 2 numbers are:',
  divide: 'division of 2 numbers are:',
  multiply: 'multiplication of 2 numbers are:'
}

//Act
const sumOfNumbers = calculator.add(10, 5);
const divideOfNumbers = calculator.divide(10, 5);
const multiplyOfNumbers = calculator.multiply(10, 5);

//Assert
describe('calculate', () => {
  test(message.add, () => { expect(sumOfNumbers).toBe(15) })
  test(message.divide, () => { expect(divideOfNumbers).toBe(2); })
  test(message.multiply, () => { expect(multiplyOfNumbers).toBe(50); })
})