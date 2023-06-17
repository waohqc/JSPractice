"use strict"
// var let const作用域
{
  let count = 1
  var count1 = 2

  const count2 = 3
  // count4 = 4
}
console.log(count1)

/**
 * undefined 在数值环境中会变成NaN not a number
 * null 在数值环境中会被当成0来计算
 */
let a = undefined
let b = null
console.log(`a + 1 ${a + 1}`)
console.log(`b + 1 ${b + 1}`)

/**
 * 变量提升，var可以在变量声明之前引用该变量，但值是undefined，看起来就像是变量的声明被提到了作用域的最前面
 * let 与 const也会被变量提升，但是会发生引用错误
 */

console.log(promot_x)
// console.log(promot_y); ReferenceError
{
  console.log(promot_x)
  var promot_x = 20
  let promot_y = 30
}
console.log(promot_x)

console.log(`********对象字面量********`)

var obj = {
  1: "first prop",
  2: "second prop",
  "!": "! prop",
}
console.log(obj["1"])
console.log(obj["!"])

console.log(`*******转义与换行********`)
/**
 * 字符串多行书写需要在行尾加上\，这样\与换行符都不会出现在字符串中
 */
var poem =
  "Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo."
console.log(poem)

/**
 * 使用模板字面量就不需要\了
 */
var poem1 = `qwertyuiop
asdfghjkl
zxcvbnm`

console.log(poem1)
