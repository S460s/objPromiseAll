# objPromiseAll

Object support for Promise.All

## How to use

```js
const objPromiseAll = require('obj-promise-all');
const todo1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
const todo2 = fetch('https://jsonplaceholder.typicode.com/todos/2');

objPromiseAll({ todo1, todo2 }).then((data) => {
	objPromiseAll({
		i1: data.todo1.json(),
		i2: data.todo2.json(),
	}).then((res) => {
		console.log(res);
	});
});
```
