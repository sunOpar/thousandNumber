const thousandNumber = require('./index');
test('common test', () => {
  expect(thousandNumber('123')).toBe('123.00');
  expect(thousandNumber('123456')).toBe('123,456.00');
  expect(thousandNumber('1234567',1)).toBe('1,234,567.0');
  expect(thousandNumber('1234567.765')).toBe('1,234,567.77');
  expect(thousandNumber(1234567.765)).toBe('1,234,567.77');
  expect(thousandNumber('1234567.7',3)).toBe('1,234,567.700');
  expect(thousandNumber('1234567.7',0)).toBe('1,234,568');
});
test('edge test', () => {
  expect(thousandNumber()).toBe('0.00');
  expect(thousandNumber(null)).toBe('0.00');
  expect(thousandNumber(123456789,5)).toBe('123,456,789.00000');
});