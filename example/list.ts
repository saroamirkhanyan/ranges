import { flow } from 'fp-ts/function';
import {
    range,
    filter,
    print,
    index,
    take,
    drop,
} from '@saroamirkhanyan/ranges';

/**
 *  Example of full functionality of library
 */

const isEven = (a: number) => a % 2 === 0;

const main = flow(
    () => [1, 2, 3, 4],
    filter(isEven),
    print('example')
);

main();
