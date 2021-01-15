import Counter from './counter.js';

let cnt = new Counter(10);

console.log('Counter initial = ' + cnt.getCounter())

cnt.increment()
cnt.increment()

console.log(`Counter after 2 increments = ${cnt.getCounter()}`)

cnt.decrement()

console.log(`Counter after 1 decrement = ${cnt.getCounter()}`)