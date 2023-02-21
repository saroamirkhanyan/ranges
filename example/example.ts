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
    () => range(0, 1000),
    filter(isEven),
    index(),
    take(50),
    drop(20),
    print('example')
);

main();
