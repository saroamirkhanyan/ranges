import { pipe } from 'fp-ts/function';
import {
    take,
    after,
    merge,
    range,
    reversedRange,
    print,
} from '@saroamirkhanyan/ranges';

/**
 *  Example of iterating over itegers sequence
 */

const naturals = () => range(1, Infinity);
const negatives = () => reversedRange(-1, -Infinity);

pipe(naturals(), take(5), print('5 naturals'));
pipe(negatives(), take(5), print('5 negatives'));

const integers = () => pipe(negatives(), merge(naturals()), after([0]));

pipe(integers(), take(15), print('15 merged'));
