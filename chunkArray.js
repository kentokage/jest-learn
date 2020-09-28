const chunkArray = (arr, len) => {
	const chunkedArr = [];
	
	let ctr = 0;
	let chunk = [];
	chunkedArr.push(chunk);
	arr.forEach(item => {
		if (ctr < len) {
			chunk.push(item)
			ctr++;
		} else {
			chunk = [];
			chunkedArr.push(chunk);
			chunk.push(item)
			ctr = 1;
		}
	})

	return chunkedArr;
}

module.exports = chunkArray;
