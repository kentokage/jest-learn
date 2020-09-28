const chunkArray = require('./chunkArray');

test('does func exist', () => {
	expect(chunkArray).toBeDefined();
})

test('type of function', () => {
	expect(typeof chunkArray).toEqual('function');
})

test('chunk 10 nums, 3 length', () => {
	const numbers = [1,2,3,4,5,6,7,8,9,10];
	const length = 3;
	const output = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ];

	expect(chunkArray(numbers, length)).toEqual(output);
})