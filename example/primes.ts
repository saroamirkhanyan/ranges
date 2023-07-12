import { flow, pipe } from 'fp-ts/function';
import {
    head,
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

const divides = (n) => (a) => n % a === 0;
const not = (a) => !a;


const isPrime = (n) =>
    n > 1 &&
    pipe(
        range(2, sqrtInt(n)),
        map(flow(divides(n), not)),
        fold(MonoidAll),
        head(),
        unwrap()
    );

const main = flow(() => range(0, 1000), filter(isPrime), print('primes'));

main();
