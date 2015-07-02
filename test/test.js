var legendre = require("../legendre.js")

require("tape")("LegendreP", function(t) {

  function e(a, b) {
    t.equals(a.join(","), b.join(","))
  }

  e(legendre(0), [1])
  e(legendre(1), [0, 1])
  e(legendre(2), [-0.5, 0, 3.0/2.0])
  e(legendre(3), [0, -3.0/2.0, 0, 5.0/2.0])
  e(legendre(4), [3.0/8.0, 0, -30.0/8.0, 0, 35.0/8.0])
  e(legendre(5), [0, 15.0/8.0, 0, -70.0/8.0, 0, 63.0/8.0])

  t.end()
})