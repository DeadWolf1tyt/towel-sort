
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix === undefined || matrix.length === 0) {
		return [];
	}
	const arr = [];
	for (let i = 0; i < matrix.length; i++) {
		if (i % 2 === 0) {
			arr.push(...matrix[i]);
		} else if (i % 2 !== 0) {
			arr.push(...matrix[i].reverse());
		}
	}
	return arr;
}
