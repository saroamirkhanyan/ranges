import { flow, pipe } from 'fp-ts/function';
import {
    range,
    print,
    fold,
    map,
    filter,
    unwrap,
} from '@saroamirkhanyan/ranges';
import { MonoidAll } from 'fp-ts/lib/boolean';

/**
 *  Example of full functionality of library
 */
const { sqrt, floor } = Math;

const sqrtInt = flow(sqrt, floor);

const isPrime = (n) =>
    n > 1 &&
    pipe(
        range(2, sqrtInt(n)),
        map((a) => n % a !== 0),
        fold(MonoidAll),
        unwrap()
    );

const main = flow(() => range(0, 1000), filter(isPrime), print('primes'));

main();
