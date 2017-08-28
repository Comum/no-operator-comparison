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

function getDifferentCharIndex(word1, word2) {
	var length;
}

/**
 * returns:
 *	 0 if same value
 *	-1 if left word comes first
 *	 1 if right word comes first
 */
function wordComparison(_left, _right) {
	var diff;
	var left = _left.toLowerCase();
	var right = _right.toLowerCase();
	var leftValue;
	var rightValue;
	var comparison;
	var index = 0;
	var equalWords = true;

	/**
	 * Use cases:
	 *	words are the same: returns 0
	 *	words are different:
	 *		left word comes first - returns -1
	 *		right word comes first - returns 1
	 *	one word is contained inside the other
	 */

	// check if words are the same (they are both lower case)
	if (left === right) {
		return 0;
	}

	// check if word in contained inside the other
	comparison = numberComparison(left.length, right.length);

	if (comparison === -1) {
		if (left.indexOf(right) !== -1) {
			// right word comes first
			return 1;
		}
	} else if (comparison === 1) {
		if (right.indexOf(left) !== -1) {
			// right word comes first
			return -1;
		}
	}

	// compare words

	// get index where words start to get different
	while(equalWords) {
		if (left[index] !== right[index]) {
			equalWords = false;
		}

		index++;
	}

	left = left.substring(0, index);
	right = right.substring(0, index);

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
console.log('Left value bigger						(should return -1): ' + wordComparison('Tomato', 'Avocado'));
console.log('Equal values 							(should return  0): ' + wordComparison('Tomato', 'Tomato'));
console.log('Right value bigger						(should return  1): ' + wordComparison('Avocado', 'Tomato'));
console.log('Left word contained inside right word 	(should return  -1): ' + wordComparison('Like', 'Liked'));
console.log('Right word contained inside left word 	(should return  1): ' + wordComparison('Liked', 'Like'));