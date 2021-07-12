const objPromiseAll = (obj) => {
	const promiseList = Object.values(obj);
	const keys = Object.keys(obj);
	return Promise.all(promiseList).then((result) => {
		const promiseObj = {};
		for (let i = 0; i < result.length; i++) {
			promiseObj[keys[i]] = result[i];
		}
		return promiseObj;
	});
};

module.exports = objPromiseAll;
