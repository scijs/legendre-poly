"use strict"

var POLYS = [ [1], [0, 1] ]

function LegendreP(n) {
  n = n|0
  if(n < POLYS.length) {
    return POLYS[n]
  }
  if(n < 0) {
    return []
  }
  var a = LegendreP(n-1)
    , b = LegendreP(n-2)
    , c = new Array(n+1)
    , i
    , s = 1.0 / n
    , ca = (2.0 * n - 1.0)
    , cb = (n - 1.0)
  c[0] = -b[0] * cb * s
  c[n-1] = a[n-2] * ca * s
  c[n] = a[n-1] * ca * s
  for(i=1; i<n-1; ++i) {
    c[i] = s * (ca * a[i-1] - cb * b[i])
  }
  POLYS.push(c)
  return c
}

module.exports = LegendreP
