### TASK

What’s the output?
```js

async function getData() {
return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);

```

A: "I made it!"
B: Promise {<resolved>: "I made it!"}
C: Promise {<pending>}
D: undefined

### TASK

What’s the value of output?
```js

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
myPromise().then(res => console.log(res));
console.log('second');
}

async function secondFunction() {
console.log(await myPromise());
console.log('second');
}

firstFunction();
secondFunction();

```

A: I have resolved!, second and I have resolved!, second
B: second, I have resolved! and second, I have resolved!
C: I have resolved!, second and second, I have resolved!
D: second, I have resolved! and I have resolved!, second

### TASK

What’s the output?

```js

async function* range(start, end) {
for (let i = start; i <= end; i++) {
yield Promise.resolve(i);
}
}

(async () => {
const gen = range(1, 3);
for await (const item of gen) {
console.log(item);
}
})();

```

A: Promise {1} Promise {2} Promise {3}
B: Promise {<pending>} Promise {<pending>} Promise {<pending>}
C: 1 2 3
D: undefined undefined undefined

### TASK
### TASK
