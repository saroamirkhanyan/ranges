import { flow } from 'fp-ts/function'
import { range, filter } from '@saroamirkhanyan/ranges' 

const isEven = (a: number) => a % 2 === 0;
const evens = flow(
	() => range(0, 100),
	filter((a: number) => a % 2 === 0)
);

const isRoot = flow(Math.sqrt, Number.isInteger);
const evenRoots = flow(
	evens,
	filter(isRoot)
);

for(const a of evenRoots()) {
	console.log(a);
}

