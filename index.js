/**
 * returns:
 *	 0 if same value
 *	-1 if left bigger
 *	 1 if right bigger
 */
function numberComparison(left, right) {
	var diff;

	if (left === right) {
		return 0;
	} else {
		diff = left - right;

		if (diff.toString()[0] === '-') {
			return 1;
		} else {
			return -1;
		}
	}
}

function getAsciiValue (char) {
	return char.charCodeAt(0);
}

function getWordInAscii(word) {
	var sum = 0;

	word
		.split('')
		.map(getAsciiValue)
		.forEach(function (value) {
			sum = sum + parseInt(value, 10);
		});

	return sum;
}

/**
 * returns:
 *	 0 if same value
 *	-1 if left bigger
 *	 1 if right bigger
 */
function wordComparison(_left, _right) {
	var diff;
	var left = _left.toLowerCase();
	var right = _right.toLowerCase();
	var leftValue;
	var rightValue;

	// compare word length
	// edit left and right word have same length when then are different

	

	leftValue = getWordInAscii(left);
	rightValue = getWordInAscii(right);
		
	return numberComparison(leftValue, rightValue);
}

/*
 * Number testing
 * 3 cases
 */

console.log('---------------------------------------------');
console.log('Number testing');
console.log('Left value bigger 		(should return -1): ' + numberComparison(10, 5));
console.log('Equal values 			(should return  0): ' + numberComparison(10, 10));
console.log('Right value bigger 	(should return  1): ' + numberComparison(5, 10));

/*
 * Word testing
 * 3 cases
 */

console.log('---------------------------------------------');
console.log('Word testing');
console.log('Left value bigger (should return -1): ' + wordComparison('Tomato', 'Avocado'));
console.log('Left value bigger (should return  0): ' + wordComparison('Tomato', 'Tomato'));
console.log('Left value bigger (should return  1): ' + wordComparison('Avocado', 'Tomato'));