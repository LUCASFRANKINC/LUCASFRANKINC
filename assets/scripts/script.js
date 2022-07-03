let buffer = new ArrayBuffer(32);
let int32 = new Int32Array(buffer, 0, 2);
int32[0]= 14;
let uint16 = new Uint16Array(buffer, 8, 3);
let float64 = new Float64Array(buffer, 16, 2);
let int8 = new Int8Array(buffer, 14, 2);
console.log(int32)