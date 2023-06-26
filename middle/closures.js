const makeCounter = function () {
  var privateCount = 0
  function changeCount(val) {
    privateCount += val
  }
  return {
    increment: function () {
      changeCount(1)
    },
    decrement: function () {
      changeCount(-1)
    },
    realVal: function () {
      return privateCount
    },
  }
}

const counter1 = makeCounter()
const counter2 = makeCounter()
counter1.increment()
counter2.decrement()
console.log(counter1.realVal())
console.log(counter2.realVal())
