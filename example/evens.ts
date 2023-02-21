import { flow } from 'fp-ts/function';
import { range, filter, print } from '@saroamirkhanyan/ranges';

/**
 * Example of printing even numbers between
 * 0 and 1000
 */

const isEven = (a: number) => a % 2 === 0;
const evens = flow(() => range(0, 1000), filter(isEven));

const main = flow(evens, print('evens'));

main();
