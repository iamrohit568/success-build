
const { someHelper } = require('../src/utils/helpers');

describe('Utils', () => {
    test('someHelper should return helper', () => {
        expect(someHelper()).toBe('helper');
    });
});
