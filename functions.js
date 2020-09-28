const axios = require('axios');

const functions = {
	add: (x, y) => x + y,
	isNull: () => null,
	checkValue: x => x,
	createUser: () => {
		const user = { firstName: "Kenny" };
		user["lastName"] = "To";
		return user;
	},
	fetchUser: () => {
		return axios.get('https://jsonplaceholder.typicode.com/users/1')
		.then(res => res.data)
		.catch(err => 'error')
	},
	sleep: (timeout) => {
		return new Promise(resolve => setTimeout(resolve('done'), timeout))
	}
};

module.exports = functions;