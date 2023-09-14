### TASK +

Show user IP address with JavaScript

### TASK

Create throttle function

### TASK

Create an object `newObj` with properties/methods, that will allow next code to work

```js

// your code here
const newObj = {};

// next code should work

newObj.update = 30;

console.log(newObj.update); // [30]

newObj.update = -66;

console.log(newObj.update); // [30, -66]

newObj.update = 30;

console.log(newObj.update); // [-66]

```

```js

// your code here
const newObj = {
	_list: [],
	
	set update(num) {
		console.log('set')
		if (!this._list.includes(num)) {
          this._list.push(num);
        } else if (this._list.indexOf(num) !== -1) {
          this._list.splice(this._list.indexOf(num), 1);			
        } 
    },
	
	get update() {
	  return this._list;	
    },
};

// next code should work

newObj.update = 30;

console.log(newObj.update); // [30]

newObj.update = -66;

console.log(newObj.update); // [30, -66]

newObj.update = 30;

console.log(newObj.update); // [-66]

```


### TASK to think

Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.

The catch is you can only use arithmetic or comparison operators, which means:

- No if... else statements.
- No objects.
- No arrays.
- No formatting methods, etc.


### TASK ARRAYS +

Remove all duplicates in the given array

```js
const arr = [1,2,1,1,1,1,2,3,3,1,1,2,3,3,2,1]
```

### TASK REGEXP +

Write a function to Replace parameters in url

```js

const initialUrl = "/posts/:postId/comments/:commentId";

const resultUrl = replaceParamsInUrl(initialUrl, [
{ from: "postId", to: "1" },
{ from: "commentId", to: "3" },
]);
console.log(resultUrl);
```

## TASK

Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

```js
removeLeadingTrailing("230.000") // "230"

removeLeadingTrailing("00402") // "402"

removeLeadingTrailing("03.1400") // "3.14"

removeLeadingTrailing("30") // "30"
```

## TASK

In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

Examples

```js
sortIt([4, 1, 3]) // [1, 3, 4]

sortIt([[4], [1], [3]]) // [[1], [3], [4]]

sortIt([4, [1], 3]) // [[1], 3, 4]

sortIt([[4], 1, [3]]) // [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) // [1, [2], [3], 4, [5], 6]

```

## TASK

A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples

```js
isPandigital(98140723568910) // true

isPandigital(90864523148909) // false
// 7 is missing.

isPandigital(112233445566778899) // false
```