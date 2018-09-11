/**
 * Write a simple memoization function that caches the result of
 * another function, `add()`. `add()` returns the sum of the two
 * numeric arguments. `memoize(add)` should return a version of
 * `add()` that only calculates the value the first time, stores
 * the result in a cache and uses that cache when given the same
 * arguments every time after.
 *
 * @example
 *
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * var memoizedAdd = memoize(add); // returns the memoized add() function
 *
 * memoizedAdd(1, 2); // calls add(), returns 3
 * memoizedAdd(1, 2); // does not call add(), returns 3
 * memoizedAdd(3, 4); // calls add(), returns 7
 * memoizedAdd(3, 4); // does not call add(), returns 7
 *
 * @param {Function} add The add function
 * @returns {Function(a, b)}
 */

