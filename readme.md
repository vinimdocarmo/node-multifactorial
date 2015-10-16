# node-multifactorial [![Build Status](https://travis-ci.org/vinimdocarmo/node-multifactorial.svg?branch=master)](https://travis-ci.org/vinimdocarmo/node-multifactorial)

The factorial of a number, written as `n!`, is defined as `n! = n(n − 1)(n − 2)...(2)(1)`.
Multifactorials generalize factorials as follows:

```
	n! = n(n − 1)(n − 2)...(2)(1)
	n!! = n(n − 2)(n − 4)...
	n!!! = n(n − 3)(n − 6)...
	n!!!! = n(n − 4)(n − 8)...
	n!!!!! = n(n − 5)(n − 10)...
```

In all cases, the terms in the products are positive integers.

If we define the degree of the multifactorial as the difference in successive terms that are multiplied together for a multifactorial (the number of exclamation marks), then the task is twofold:
Write a function that given n and the degree, calculates the multifactorial.
Use the function to generate and display here a table of the first ten members (1 to 10) of the first five degrees of multifactorial.

For more information, see: [https://en.wikipedia.org/wiki/Factorial#Multifactorials](https://en.wikipedia.org/wiki/Factorial#Multifactorials)

## Install

```
$ npm install --save multifactorial
```

## Usage

```js
var multifactorial = require('multifactorial');

multifactorial(10, 1);
//=> 3628800

multifactorial(10, 4);
//=> 120
```

## API

### multifactorial(number, degree)

#### number

*Required*  
Type: `Number`

#### degree

*Optional*  
Type: `Number`
Default: 1

## License

MIT © [Vinícius do Carmo](http://vinimdocarmo.js.org)
