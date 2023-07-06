/**
 * Add and multiply
 * @param  {...any} funcs
 * @returns
 */
function compose(...funcs) {
  if (funcs.length < 2) return funcs[0];

  return funcs.reduce((acc, curr) => {
    return (...args) => {
      if (!args.length) return acc;

      return acc(curr(...args));
    };
  });
}
const add5 = (x) => x + 5;
const multiply = (x, y = 2) => x * y;
// const multiplyAndAdd5 = compose(add5);
// const multiplyAndAdd5 = compose(add5, multiply);
// console.log(multiplyAndAdd5(3, 2));

/**
 * Divde, square and get max
 * @param {*} a
 * @returns
 */
const divideBy2 = (a) => a / 2;
const square = (a) => a * a;
const max = (...args) => Math.max.apply(null, args);

const multiplyAndAdd5 = compose(divideBy2, square, max);
console.log(multiplyAndAdd5(2, 1, 4, 3));

/**
 * Flatten and concat given array of arrays
 */
