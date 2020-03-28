## Repro steps

1. Clone this repository
1. `npm install`
1. `node compile`
1. `npm install globalize@1.5.0`
1. `node run`

## Error generated

```
                return partsJoin( numberToPartsFormatter( value ));
                                  ^

TypeError: numberToPartsFormatter is not a function
    at Object.numberFormatter (...\test-globalize-1.5.0\node_modules\globalize\dist\globalize-runtime\number.js:579:21)
    at ...\test-globalize-1.5.0\node_modules\globalize\dist\globalize-runtime\date.js:697:38
    at String.replace (<anonymous>)
    at dateFormat (...\test-globalize-1.5.0\node_modules\globalize\dist\globalize-runtime\date.js:388:21)
    at dateToPartsFormatter (...\test-globalize-1.5.0\node_modules\globalize\dist\globalize-runtime\date.js:1575:10)
    at dateFormatter (...\test-globalize-1.5.0\node_modules\globalize\dist\globalize-runtime\date.js:715:21)
    at Object.<anonymous> (...\test-globalize-1.5.0\index2.js:3:67)
    at Module._compile (internal/modules/cjs/loader.js:734:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:745:10)
    at Module.load (internal/modules/cjs/loader.js:626:32)
```
