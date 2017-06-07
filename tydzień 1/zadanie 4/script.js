function sum(param) {
	result = 0;

	for(var i = 0; i < param.length; i++) {
		result += param[i];
	}

	return result;
}
console.log(sum([1, 10, 5, 4]));