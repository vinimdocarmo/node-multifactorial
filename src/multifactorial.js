'use strict';

/**
 *
 * Multifactorials generalize factorials as follows:
 *	 n! = n(n − 1)(n − 2)...(2)(1)
 *	 n!! = n(n − 2)(n − 4)...
 *	 n!!! = n(n − 3)(n − 6)...
 *	 n!!!! = n(n − 4)(n − 8)...
 *	 n!!!!! = n(n − 5)(n − 10)...
 * In all cases, the terms in the products are positive integers.
 *
 * @param {Number} n
 * @param {Number} [degree = 1]
 * @returns {Number}
 */
module.exports = function multifactorial(n, degree) {
	degree = degree || 1;

	if (!n) {
		throw new Error('You must pass a number as the first argument');
	} else if (typeof n !== 'number' || typeof degree !== 'number') {
		throw new TypeError('Expected two numbers');
	}

	return n <= degree ? n : n * multifactorial(n - degree, degree);
};
