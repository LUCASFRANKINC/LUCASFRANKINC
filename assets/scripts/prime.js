/*
 * Copyright (c) 2022. The code contained in the file(s) is written by Lucas Francis K. and has no warranty at all. Use of the code is up to you and any breakage of your app and/or website ought to have no blame on the author. THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY OR NON-INFRINGEMENT.
 */
"use strict";

function getPrime(from, to) {
    if(Number.isNaN(from) || Number.isNaN(to)) {
    throw new TypeError("The value(s) inserted are not numeric types")
}
    from = Math.abs(from);
    to = Math.abs(to);
    if(!(from > to)){
        for(let i = from; i <= to; i++) {
            let array = Array.of();
            for(let j = 1; j < i; j++) {
                if(i % j === 0){
                    array.push(j);
                }
            }
            if(array.length === 1) {
               return i;
            }
        }
    }
}