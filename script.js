function fibonacci(num) {
// your code here
	let val1 = 0;
	let val2 = 1;

	if(num === 0) return val1;
	if(num === 1) return val2;
	
	for(let i = 2; i <= num; i++) {
		let temp = val1 + val2;
		val1 = val2;
		val2 = temp;
	}

	return val2;
}

module.exports = fibonacci;
