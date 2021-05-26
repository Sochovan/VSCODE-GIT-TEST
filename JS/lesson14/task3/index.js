let a = 0;

const getMemo = () => a;

const add = num => (a += num);

const decrease = num => (a -= num);

const reset = () => (a = 0);

export { getMemo, add, decrease, reset } from './index.js';
