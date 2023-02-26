'use strict';
import { Monoid } from 'fp-ts/Monoid';
import { pipe, flow } from 'fp-ts/function';

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
    return function* (iterable: Iterable<A>): Iterable<B> {
        for (const a of iterable) yield f(a);
    };
}

export function zip<A, B>(iterableA: Iterable<A>) {
    return function* (iterableB: Iterable<B>): Iterable<[A, B]> {
        const iteratorB: Iterator<B> = iterableB[Symbol.iterator]();
        for (const a of iterableA) {
            const bResult = iteratorB.next();
            if (bResult.done) break;
            yield [a, bResult.value as B];
        }
    };
}

export function index<A>() {
    return (iterable: Iterable<A>) => pipe(range(0, Infinity), zip(iterable));
}

export const take = <A>(n: number) =>
    flow(
        index<A>(),
        filter(([_, i]: [A, number]) => i < n),
        map(([a]: [A, number]) => a)
    );

export const drop = <A>(n: number) =>
    flow(
        index<A>(),
        filter(([_, i]: [A, number]) => i >= n),
        map(([a]: [A, number]) => a)
    );

export const head = take(1);
export const tail = drop(1);

export function fold<A>(M: Monoid<A>) {
    return function* (iterable: Iterable<A>): Iterable<A> {
        let result = M.empty;
        for (const a of iterable) {
            result = M.concat(result, a);
        }
        yield result;
    };
}

export function unwrap<A>() {
    return function (iterable: Iterable<A>): A {
        for (const a of iterable) return a;
    };
}

export function print<A>(label: string) {
    return function (iterable: Iterable<A>) {
        console.group(label);
        for (const a of iterable) {
            console.log(a);
        }
        console.groupEnd();
    };
}
