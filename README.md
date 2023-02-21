# Ranges

> Ranges is a JavaScript library for working with ranges and iterators
using beauty of Functional Programming


## Example
This code prints all even numbers between 0 and 100 which
are also root of integer
```typescript
import { flow } from 'fp-ts/function'
import { range, filter } from '@saroamirkhanyan/ranges' 

const isEven = (a: number) => a % 2 === 0;
const evens = flow(
	() => range(0, 100),
	filter(isEven)
);

const isRoot = flow(Math.sqrt, Number.isInteger);
const evenRoots = flow(
	evens,
	filter(isRoot)
);

for(const a of evenRoots()) {
	console.log(a);
}
```
