const val1 = NaN
const val2 = NaN
const val3 = +0
const val4 = -0
console.log(val1 === val2)
console.log(Object.is(val1, val2))
console.log(val3 === val4)
console.log(Object.is(val3, val4))
