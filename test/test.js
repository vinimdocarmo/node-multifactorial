'use strict';

var assert = require('assert');
var multifactorial = require('../src/multifactorial');

it('should return the multifactorial of a number given the degree', function () {
	var tests = [
		{
			n: 10,
			degree: 1,
			output: 3628800
		},
		{
			n: 10,
			degree: 2,
			output: 3840
		},
		{
			n: 10,
			degree: 3,
			output: 280
		},
		{
			n: 10,
			degree: 4,
			output: 120
		},
		{
			n: 10,
			degree: 5,
			output: 50
		}
	];

	tests.forEach(function (test) {
		assert.strictEqual(multifactorial(test.n, test.degree), test.output);
	});
});

it('should return the factorial of a number if the degree was not passed', function () {
	assert.strictEqual(multifactorial(10), 3628800);
});
