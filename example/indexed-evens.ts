import { flow } from 'fp-ts/function';
import { range, filter, print, index } from '@saroamirkhanyan/ranges';

/**
 *  Example of printing even numbers with
 *  it's indexes
 */

const isEven = (a: number) => a % 2 === 0;
const evens = flow(() => range(0, 1000), filter(isEven));

const main = flow(evens, index(), print('evens-with-indexes'));

main();
