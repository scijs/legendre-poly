legendre-poly
=============
Returns the coefficients of the nth [Legendre polynomial](http://en.wikipedia.org/wiki/Legendre_polynomials).

Example
=======

```javascript
var legendre_p = require("legendre-poly")

console.log(legendre_p(0))    //Prints [1]

console.log(legendre_p(1))    //Prints [0, 1]

console.log(legendre_p(2))    //Prints [-0.5, 0, 1.5]
```

Install
=======

    npm install legendre-poly
    

## `require("legendre-poly")(n)`
Returns the coefficients of the nth Legendre polynomial in ascending degree.

Credits
=======
(c) 2013 Mikola Lysenko. MIT License