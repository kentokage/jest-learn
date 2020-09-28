const isAnagram = require('./isAnagram');

test('is function', () => {
	expect(typeof isAnagram).toBe('function');
})

test('test iceman and cinema', () => {
	expect(isAnagram('iceman', 'cinema')).toBeTruthy();
})

test('test iceman and cinema with random non chars', () => {
	expect(isAnagram('icema##n', 'cin;em#a')).toBeTruthy();
})

test('test iceman and sssscinema should be false', () => {
	expect(isAnagram('icema##n', 'ssscin;em#a')).toBeFalsy();
})