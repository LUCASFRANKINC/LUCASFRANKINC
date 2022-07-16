let buffer = new ArrayBuffer(4);
let _32 = new Int32Array(buffer);
_32[0] = 1;
let _8 = new Int8Array(buffer)
console.log(_8[0] === 1)