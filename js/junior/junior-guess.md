### TASK

What is the output of the following code?
```js

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
setTimeout(() => console.log(b[i]), 1000);
}
```

### TASK

What will be the output of the following code?

```js
var output = (function(x) {
delete x;
return x;
})(0);

console.log(output);
```

### TASK

What will the following code output?

```js
(function() {
var a = b = 5;
})();

console.log(b);

```