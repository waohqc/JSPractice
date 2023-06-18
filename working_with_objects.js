// 对象， Object只能使用字符串作为键，而Map可以使用任意类型
const myObj = new Object()
myObj.name = "qiancheng"
myObj.height = 178
myObj.weight = undefined
// 对象，关联数组，使用['keyName']取值
console.log(`${myObj["name"]} ${myObj.name}`)

/**
 * for in 与 for of 区别
 * for in 用于遍历对象的属性与值
 * for of 用于遍历数组
 */
for (let i in myObj) {
  if (myObj.hasOwnProperty(i)) {
    console.log(`property:${i} val:${myObj[i]}`)
  }
}

/**
 * 创建对象
 * 定义构造函数，使用new直接创建
 */

function createPerson(name, height) {
  this.name = name
  this.height = height
  this.weight = 150
}

const p = new createPerson("qiancheng", 178)
console.log(typeof p)
console.log(p)
const p1 = Object.create(p)
console.log(p1)
console.log(p1.weight)
console.log(p1["weight"])

//get set
Object.defineProperty(Date.prototype, "year", {
  get: function () {
    return this.getFullYear()
  },
  set: function (year) {
    this.setFullYear(year)
  },
})

const now = new Date()
console.log(now.year)
