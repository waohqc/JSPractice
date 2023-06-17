/**
 * == 操作数相等
 * != 操作数不等
 * === 操作数相等 且 类型相等
 * ！== 操作数不等 或类型不等
 */
console.log(3 == "3")
console.log(3 != "3")
console.log(3 === "3")
console.log(3 !== "3")

/**
 * expr1 && expr2   // expr1 == false ? return expr1 : return expr2
 * expr1 || expr2   // expr1 == true ? return expr1 : return expr2
 * !expr    // expr == false ? return true : return false
 * falsy 假值 -> 能被转换成false的值
 * 0 false undefined null NaN ""
 */
if (0 || false || undefined || null || NaN || "") {
  console.log("true  res")
} else {
  console.log("false res")
}

// 一元运算符 delete 删除对象的属性或者数组元素
const myObj = {
  name: "waohqc",
  height: 178,
}
const vals = [1, 2, 3, 4]
console.log(myObj, vals)
delete myObj.height
delete vals[1]
console.log(myObj, vals)

console.log('******delete variable constant******');
var x = 0
let res = delete x
console.log(res);
y = 0
console.log(delete y)
let z
console.log(delete z)
const w = 0
console.log(delete w)

console.log('******instance of ******');
const dt = new Date()
console.log(`dt:${dt} instance of Date:${dt instanceof Date}`);
console.log(dt.getTime());