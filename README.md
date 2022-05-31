# js501

```sh 
# fetch is still considered "experimental" so use --no-warnings to suppress the experimental warning 
node --no-warnings fetch.js
```

steps:
1. simple [fetch](./fetch.js)
    - object literal
    - [classes](./game.js) (Yuck!)
2. [async functions](./async.js)
    - js is [single threaded](./blocking.js)
    - IIFE (Immediately invoked function expression)
3. [array functions](./arrayFunc.js)
4. object prototypes
    - everything is mutable
5. file i/o
    - json is easy to require
    - [exporting/importing](https://github.com/mbmcmullen27/blinky/blob/main/src/blinky.js) from a local file
6. command line arguments
7. Where does JS end and Node begin?