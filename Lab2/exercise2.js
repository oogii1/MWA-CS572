//1. Sometimes we need to execute a function asynchronously, in this case we use setImmediate. If we need to wait until finish specific time we have to use setTimeout.
//2. setImmediate is related libuv and process.nextTick is related Node. libuv has a maximum count that works with callbacks and other doesn't have the maximum count.  
//3. Array, Buffer, Atomics, DataView, Error, Date, DataView, Function, Math, Map