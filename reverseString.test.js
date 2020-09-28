const reverseString = require('./reverseString');

test('does reverse string func exist', () => {
	expect(reverseString).toBeDefined();
})

test('does string reverse', () => {
	expect(reverseString('hello')).toEqual('olleh');
})

test('does string reverse with uppercase', () => {
	expect(reverseString('Hello')).toEqual('olleh');
})