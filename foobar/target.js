var pxtTargetBundle = {
  "id": "sample",
  "name": "Sample PXT",
  "title": "Sample PXT Target",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "bundleddirs": [
    "libs/core"
  ],
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": true,
    "listsBlocks": true
  },
  "simulator": {
    "autoRun": true
  },
  "appTheme": {
    "logoUrl": "/",
    "homeUrl": "/",
    "embedUrl": "https://sample.pxt.io/",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "docMenu": [
      {
        "name": "About",
        "path": "/docs/about.html"
      },
      {
        "name": "Docs",
        "path": "/docs/docs.html"
      }
    ],
    "coloredToolbox": true,
    "monacoToolbox": true,
    "invertedMenu": true,
    "blocklyOptions": {
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": true
      }
    },
    "simAnimationEnter": "rotate in",
    "simAnimationExit": "rotate out",
    "id": "sample",
    "title": "Sample PXT Target",
    "name": "Sample PXT",
    "htmlDocIncludes": {},
    "locales": {
      "pl": {
        "name": "Przykład PXT",
        "title": "Przykładowe Doświadczenie PXT",
        "docMenu": [
          {
            "name": "O nas",
            "path": "/about"
          },
          {
            "name": "Dokumentacja",
            "path": "/docs"
          }
        ]
      }
    }
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
      "main.ts": " ",
      "README.md": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.ts": " ",
      "README.md": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# basic\n\nAdd your docs here...",
      "enums.d.ts": "declare const enum Direction {\n    //% block=left\n    Left,\n    //% block=right\n    Right\n}\n",
      "ns.ts": "/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=100\nnamespace turtle {\n\n}\n\n/**\n * Control flow\n */\n//% color=#FF5722 weight=90\nnamespace control {\n\n}\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"lists\"\n    length: number;\n\n    /**\n      * Appends new elements to an array.\n      * @param items New elements of the Array.\n      */\n    //% shim=Array_::push weight=75\n    //% blockId=\"array_push\" block=\"push into %this|with last item %item\" blockNamespace=\"lists\"\n    push(item: T): void;\n\n    /**\n      * Removes the last element from an array and returns it.\n      */\n    //% shim=Array_::pop weight=74\n    //% blockId=\"array_pop\" block=\"pop last item from %this\" blockNamespace=\"lists\"\n    pop(): T;\n\n    /**\n      * Reverses the elements in an Array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %this\" blockNamespace=\"lists\"\n    reverse(): void;\n\n    /**\n      * Removes the first element from an array and returns that element. This method changes the length of the array.\n      */\n    //% helper=arrayShift weight=70\n    //% blockId=\"array_shift\" block=\"shift first item from %this\" blockNamespace=\"lists\"\n    shift(): T;\n\n    /**\n      * Adds one element to the beginning of an array and returns the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% helper=arrayUnshift weight=69\n    //% blockId=\"array_unshift\" block=\"unshift into %this|with first item %item\" blockNamespace=\"lists\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value:T): number;\n\n    /**\n      * Returns a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% helper=arraySlice weight=41\n    //% blockId=\"array_slice\" block=\"slice %this|from %start|to %end\" blockNamespace=\"lists\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Removes elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * Sorts the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Calls a defined callback function on each element of an array, and returns an array that contains the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Returns the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Removes the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element:T) : boolean;\n\n    /** Removes the object at position index. */\n    //% shim=Array_::removeAt weight=49\n    //% blockId=\"array_removeat\" block=\"remove from %this|at %index\" blockNamespace=\"lists\"\n    removeAt(index:number) : T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% shim=Array_::insertAt weight=84\n    //% blockId=\"array_insertAt\" block=\"insert in %this|at %index|with value %value\" blockNamespace=\"lists\"\n    insertAt(index:number, value: T) : void;\n\n    /**\n      * Returns the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% shim=Array_::indexOf weight=50\n    //% blockId=\"array_indexof\" block=\"index in %this|of %item\" blockNamespace=\"lists\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Gets the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% shim=Array_::getAt weight=85\n    //% blockId=\"array_get\" block=\"get from %this|at %index\" blockNamespace=\"lists\"\n    get(index: number): T;\n\n    /**\n     * Stores the value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% shim=Array_::setAt weight=84\n    //% blockId=\"array_set\" block=\"set in %this|at %index|with value %value\" blockNamespace=\"lists\"\n    set(index: number, value : T) : void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=80\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %this=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Returns the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=77\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=75\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Returns the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * Determines whether relative order of two strings (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=1000000\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start:number, length?:number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty() : boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Converts A string to an integer.\n  * @param s A string to convert into a number.\n  */\n//% shim=String_::toNumber\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\ndeclare function parseInt(text: string): number;\n\ninterface Object {}\ninterface Function {}\ninterface IArguments {}\ninterface RegExp {}\n\ntype uint8 = number;\ntype uint16 = number;\n//type uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/string-from-char-code\n    //% shim=String_::fromCharCode\n    //% advanced=true\n    //% blockNamespace=\"Math\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\ndeclare namespace Math {\n\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and `max`.\n     */\n    //% shim=Math_::random\n    function random(max: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n    \n    export function arrayReverse<T>(arr: T[]) : void {\n        let len = arr.length;\n        for (let i = 0; i < len/2; i++)\n        {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]) : T {\n        return arr.removeAt(0);\n    }\n\n/*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n    export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n        for(let i = values.length; i > 0; --i) {\n            arr.insertAt(0, values[i - 1]);\n        }\n        return arr.length;\n    } \n*/\n    export function arrayUnshift<T>(arr: T[], value: T) : number {\n        arr.insertAt(0, value);\n       return arr.length;\n    }\n\n    function swap<T>(arr: T[], i : number, j: number) : void {\n        let temp : T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn ?: (value1: T, value2: T) => number) : T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }        \n        let len = arr.length; \n        // simple selection sort.     \n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j)\n            {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative). \n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions. \n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions. \n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n}\n",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"A target sample for PXT\",\n    \"files\": [\n        \"README.md\",\n        \"pxt-core.d.ts\",\n        \"pxt-helpers.ts\",\n        \"enums.d.ts\",\n        \"sims.d.ts\",\n        \"ns.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"dependencies\": {}\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\ndeclare namespace turtle {\n    /**\n     * Moves the sprite forward\n     * @param steps number of steps to move, eg: 1\n     */\n    //% weight=90\n    //% blockId=sampleForward block=\"forward %steps\"\n    //% shim=turtle::forwardAsync promise\n    function forward(steps: number): void;\n\n    /**\n     * Moves the sprite forward\n     * @param direction the direction to turn, eg: Direction.Left\n     * @param angle degrees to turn, eg:90\n     */\n    //% weight=85\n    //% blockId=sampleTurn block=\"turn %direction|by %angle degrees\"\n    //% shim=turtle::turnAsync promise\n    function turn(direction: Direction, angle: number): void;\n\n}\ndeclare namespace control {\n    /**\n     * Repeats the code forever in the background. On each iteration, allows other code to run.\n     * @param body TODO\n     */\n    //% help=functions/forever weight=55 blockGap=8\n    //% blockId=device_forever block=\"forever\" icon=\"\\uf01e\"\n    //% shim=control::forever\n    function forever(body: () => void): void;\n\n    /**\n     * Pause for the specified time in milliseconds\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\n     */\n    //% help=functions/pause weight=54\n    //% block=\"pause (ms) %pause\" blockId=device_pause icon=\"\\uf110\"\n    //% shim=control::pauseAsync promise\n    function pause(ms: number): void;\n\n}\ndeclare namespace console {\n    /**\n     * Print out message\n     */\n    //%\n    //% shim=console::log\n    function log(msg: string): void;\n\n}\n    /**\n     * A ghost on the screen.\n     */\n    //%\n    declare class Sprite {\n        /**\n         * The X-coordiante\n         */\n        //%\n        //% shim=.x\n        public x: number;\n\n        /**\n         * The Y-coordiante\n         */\n        //%\n        //% shim=.y\n        public y: number;\n\n        /** \n         * Make new sprite\n         */\n        //%\n        //% shim=\"new Sprite\"\n        constructor();\n\n        /**\n         * Move the thing forward\n         */\n        //%\n        //% shim=.forwardAsync promise\n        public forward(steps: number): void;\n\n    }\n\n// Auto-generated. Do not edit. Really.\n",
      "test.ts": "let s = new Sprite()\ns.forward(10)\nlet y = s.x\n"
    },
    "blocksprj": {
      "README.md": " ",
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\r\n</xml>",
      "main.ts": " ",
      "pxt.json": "{\n    \"name\": \"{0}\",\n    \"dependencies\": {\n        \"core\": \"*\"\n    },\n    \"description\": \"\",\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\"\n    ]\n}"
    },
    "tsprj": {
      "README.md": " ",
      "main.ts": " ",
      "pxt.json": "{\n    \"name\": \"{0}\",\n    \"dependencies\": {\n        \"core\": \"*\"\n    },\n    \"description\": \"\",\n    \"files\": [\n        \"main.ts\",\n        \"README.md\"\n    ]\n}"
    }
  },
  "compile": {
    "isNative": false,
    "hasHex": false,
    "floatingPoint": true
  },
  "versions": {
    "target": "1.0.1",
    "pxt": "1.0.8"
  }
}