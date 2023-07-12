'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = exports.unwrap = exports.fold = exports.tail = exports.head = exports.drop = exports.take = exports.index = exports.after = exports.then = exports.merge = exports.unzip = exports.zip = exports.map = exports.filter = exports.reversedRange = exports.range = void 0;
const fp_ts_1 = require("fp-ts");
const function_1 = require("fp-ts/function");
function* range(start, end) {
    for (let i = start; i <= end; ++i)
        yield i;
}
exports.range = range;
function* reversedRange(start, end) {
    for (let i = start; i >= end; --i)
        yield i;
}
exports.reversedRange = reversedRange;
function filter(p) {
    return function* (iterable) {
        for (const a of iterable) {
            if (p(a))
                yield a;
        }
    };
}
exports.filter = filter;
function map(f) {
    return function* (iterable) {
        for (const a of iterable)
            yield f(a);
    };
}
exports.map = map;
function zip(iterableA) {
    return function* (iterableB) {
        const iteratorB = iterableB[Symbol.iterator]();
        for (const a of iterableA) {
            const bResult = iteratorB.next();
            if (bResult.done)
                break;
            yield [a, bResult.value];
        }
    };
}
exports.zip = zip;
function unzip() {
    return function* (iterable) {
        for (const a of iterable) {
            yield a[0];
            yield a[1];
        }
    };
}
exports.unzip = unzip;
function merge(iterableA) {
    return (0, function_1.flow)(zip(iterableA), unzip());
}
exports.merge = merge;
function then(iterableB) {
    return function* (iterableA) {
        yield* iterableA;
        yield* iterableB;
    };
}
exports.then = then;
function after(iterableA) {
    return function* (iterableB) {
        yield* iterableA;
        yield* iterableB;
    };
}
exports.after = after;
function index() {
    return (iterable) => (0, function_1.pipe)(range(0, Infinity), zip(iterable));
}
exports.index = index;
const take = (n) => (0, function_1.flow)(zip(range(0, n)), map(fp_ts_1.tuple.snd));
exports.take = take;
const drop = (n) => (0, function_1.flow)(index(), filter(([_, i]) => i >= n), map(fp_ts_1.tuple.fst));
exports.drop = drop;
const head = () => (0, exports.take)(1);
exports.head = head;
const tail = () => (0, exports.drop)(1);
exports.tail = tail;
function fold(M) {
    return function* (iterable) {
        let result = M.empty;
        for (const a of iterable)
            result = M.concat(result, a);
        yield result;
    };
}
exports.fold = fold;
function unwrap() {
    return function (iterable) {
        for (const a of iterable)
            return a;
    };
}
exports.unwrap = unwrap;
function print(label) {
    return function (iterable) {
        console.group(label);
        for (const a of iterable) {
            console.log(a);
        }
        console.groupEnd();
    };
}
exports.print = print;
