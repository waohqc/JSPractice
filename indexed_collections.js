// 索引集合（数组）
const emptyItems = Array(5)

console.log(emptyItems) //
emptyItems.forEach(item => console.log(item))

const undefinedEmptyItems = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
]
console.log(undefinedEmptyItems)
undefinedEmptyItems.forEach(item => console.log(item))

// 类数组对象可以用数组原型方法调用prototype.function.call
const str = "1234567890"
Array.prototype.forEach.call(str,chr=>console.log(chr)) // 1 2 3...0
// str.forEach(chr => console.log(chr))  //Type Error
