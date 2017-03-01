'use strict';

let util = {};
util.list = {};
util.list.build = {};

/**
 * Function that creates an ordered array of non increasing elements.
 * @param {Integer} n - Size of the array.
 * @return {Array}
 */
util.list.build.inverseList = function inverseList(n) {
    let array = [];
    for(let i=n-1; i>=0; i--)
        array.push(i);
    return array;
}

/**
 * Function that creates an unordered array of random elements.
 * @param {Integer} n - Size of the list.
 * @return {Array}
 */
util.list.build.randomList = function randomList(n) {
	let array = [];
	for (let i=0; i<n; i++){
		let rand = Math.round(Math.random()*100);
		array.push(rand);
	}
	return array;
}

/**
 * Generator function that yields arays.
 * @param {Function} builder - Function that returns an array.
 * @param {Integer} k - Step increment of the array size.
 */
util.list.generator = function* generator(builder, k) {
	let n = 5;
	while(true) {
		yield builder(n);
		n += k;
	}
}
