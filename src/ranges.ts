'use strict';

export function* range(start: number, end: number): Iterable<number> {
    for (let i = start; i <= end; i++) yield i;
}

export function filter<A>(p: (a: A) => boolean) {
    return function* (iterable: Iterable<A>): Iterable<A> {
        for (const a of iterable) {
            if (p(a)) yield a;
        }
    };
}

export function map<A, B>(f: (a: A) => B) {
    return function* (iterable: Iterable<A>) {
        for (const a of iterable) yield f(a);
    };
}
