### TASK
Create a es6 module with function getName, getSurname and default export getFullname.
Create the same with commonJS module
What is the difference?

### TASK

Design the same classes by using only Javascript prototypes

### TASK

Remove all duplicates in the given array

```js
const arr = [1,2,1,1,1,1,2,3,3,2,1]
```

### TASK

Write a function which implements shuffle

### TASK

Create a promise function to be able to use callback function via promise approach

```js

const asyncFunc = (callback) => {
setTimeout(() => {
callback(1);
}, 3000);
};
```

### TASK

Design a deep comparison function

### TASK

Write a function to Replace parameters in url

```js

const initialUrl = "/posts/:postId/comments/:commentId";

const resultUrl = replaceParamsInUrl(initialUrl, [
{ from: "postId", to: "1" },
{ from: "commentId", to: "3" },
]);
console.log(resultUrl);


```