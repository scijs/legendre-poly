legendre-poly
=============
Returns the coefficients of the nth [Legendre polynomial](http://en.wikipedia.org/wiki/Legendre_polynomials).

[![build status](https://secure.travis-ci.org/scijs/legendre-poly.png)](http://travis-ci.org/scijs/legendre-poly)

# Example

```javascript
var legendre_p = require("legendre-poly")

console.log(legendre_p(0))
console.log(legendre_p(1))
console.log(legendre_p(2))
```
### Output
```
[1]
[0, 1]
[-0.5, 0, 1.5]
```

# Install
Install using [npm](https://www.npmjs.com/):

    npm install legendre-poly

# API
#### `require("legendre-poly")(n)`
Returns the coefficients of the nth Legendre polynomial in ascending degree.

# License
(c) 2013 Mikola Lysenko. MIT License
