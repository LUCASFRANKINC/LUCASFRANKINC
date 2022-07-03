'use strict';

/**
 * Convert and return a number in the specified radix
 * @param {*} num the number to be converted to a specific radix/base
 * @param {*} base_int the radix to convert to: 2-binary, 8-octal, 16-hexadecimal
 * @returns string representation of base value
 * @example
 * radixStringCreator(15, 8) => 0o17
 * @author  Codevangelist Luke - Frank Dex Devs&reg;&hearts;
 */
function radixStringCreator(num, base_int) {
    if (base_int !== 2 && base_int !== 8 && base_int !== 16) throw new Error('Value must be 2, 8 or 16!')
    let stringRep = null;
    switch (base_int) {
        case 2:
            stringRep = '0b';
            break;
        case 8:
            stringRep = '0o';
            break;
        case 16:
            stringRep = '0x';
            break;
    }
    return stringRep + (num).toString(base_int);
}


/**
 * Convert a radix value to its equivalent numeric figure
 * @param {*} str The string to be converted to a base 10 literal
 * @returns a base-10 value
 * @example
 * radixtoBase10('0b1010010') =>returns 82
 * @copyright Frank Dex Devs
 * @author  Codevangelist Luke - Frank Dex Devs&reg;&hearts;
 */
function radixtoBase10(str) {
    if (str) {
        let base = null;
        let radix = str.charAt(1);
        let strToConvert = str.slice(2);
        switch (radix) {
            case 'b':
            case 'B':
                base = 2;
                break;
            case 'o':
            case 'O':
                base = 8;
                break;
            case 'x':
            case 'X':
                base = 16;
                break;
        }
        return parseInt(strToConvert, base);
    }
}

/**
 *Similar to Object.assign with a little tweak.
 * Pass the Objects to copy as arguments to the function. It checks
 * if the target has a property contained in source. ***If present, check for value,
 * must be a truthy value, else, pass value in source. If truthy, use value***.
 * @param target Object to copy properties to
 * @param source Object(s) to copy properties from
 * @returns {*} target tweaked with copied properties
 * @author  Codevangelist Luke - Frank Dex Devs&reg;&hearts;
 */
function mergeObjects(target, ...source) {
    //source placed into an array
    for (const src of source) {
        for (const prop of Object.keys(src)) {
            if (!(prop in target) || !target[prop]) {
                target[prop] = src[prop];
            }
        }
    }
    return target;
}

/**
 * From the sort() function, but aids in
 * @description(1)*Sorting numeric elements* in order rather than the normal alphabetical sorting.
 * @example Numeric sort
 * alphaNumSort([-10, 29, 14, -40, 1000], 0) //=>[ -40, -10, 14, 29, 1000 ]
 * alphaNumSort([-10, 29, 14, -40, 1000], 1) //=>[ 1000, 29, 14, -10, -40 ]
 * @description(2)Sorting *alphabetical elements* in order using ***case-insensitive*** matching.
 * @example Alphabetic sort
 * alphaNumSort(["ant", "Bug", "cat", "Dog"], 0) //=>[ 'ant', 'Bug', 'cat', 'Dog' ]
 * alphaNumSort(["ant", "Bug", "cat", "Dog"], 1) //=>[ 'Dog', 'cat', 'Bug', 'ant' ]
 * @description(3)If elements are a ***mixture of alphabetical characters and numerics, default sort() is applied***. The sortOrder parameter is overlooked.
 * @example Default sort
 * alphaNumSort(["ant", "Bug", "cat", "Dog", 12, "Jide"]) //=>[ 12, 'Bug', 'Dog', 'Jide', 'ant', 'cat' ]
 * @description ***NB: The input array is fully flattened explicitly to make sure that all elements are reached.***
 * @example Deeply nested arrays
 * alphaNumSort([10,[12,45,[15,72,6,[-17,-8]]]], 1) //=>[ 72, 45, 15, 12, 10, 6, -8, -17 ]
 * @param array The array to sort the values.
 * @param sortOrder Values must be either 0 or 1 strictly! Default is 0. Specifies how to sort the values, either from 1-(largest to smallest) or 0-(smallest to largest).
 * @author  Codevangelist Luke - Frank Dex Devs&reg;&hearts;
 */
function alphaNumSort(array, sortOrder = 0) {
    if (sortOrder === 0 || sortOrder === 1) {
        array = array.flat(Infinity);
        return (array.every(value => !isNaN(value))) ? array.sort((a, b) => {
            switch (sortOrder) {
                case 0:
                    return a - b;
                case 1:
                    return b - a;
            }
        }) : array.every(value => isNaN(value)) ? array.sort((a, b) => {
            let [s, t] = [a.toLowerCase(), b.toLowerCase()];
            switch (sortOrder) {
                case 0:
                    if (s < t) return 1; else return 0;
                case 1:
                    if (s > t) return -1; else return 0;
            }
        }) : array.sort();
    } else throw new Error("sortOrder param strictly set to 0 or 1!");
}

/**
*The class possesses the ability to check the ***key:value*** Map() values against the
* values expected by the Map object.
* @description The keyType & valueType expect string values ***returned by the typeof operator***
* @example
* let typedMap = new TypeDefinedMap("string", "number");
* typedMap.set("PhpStorm rocks!!", 1)
 */
class TypeDefinedMap extends Map {
    #keyType;
    #valueType;
    constructor(keyType, valueType, entries) {
        if (entries) {
            for (let [k, v] of Object.entries(entries)) {
                if (typeof k !== keyType || typeof v !== valueType) throw new TypeError(`Expected {${keyType}:${valueType}}, found {${typeof k}: ${typeof v}}`)
            }
        }
        super(entries);
        this.#keyType = keyType;
        this.#valueType = valueType;
    }

    set(k, v) {
        if (!k || !v) {
            throw "Consider providing key and value pairs that are of non-empty values!"
        }
        if (typeof k !== this.#keyType || typeof v !== this.#valueType) {
            throw new TypeError(`Expected {${this.#keyType}:${this.#valueType}}, found {${typeof k}: ${typeof v}}`);
        }
        return super.set(k, v)
    }
}

