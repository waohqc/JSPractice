const o = {
  a: 1,
  b: 2,
}

console.log(o)
console.log(Object.getPrototypeOf(o))
Object.getPrototypeOf(o).c = 10
console.log(Object.getPrototypeOf(o))

const o1 = {
  __proto__: o,
}

console.log(o1.c)
console.log(o1)
console.log(Object.getPrototypeOf(o1))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(o1)))

/**
 * 原型的使用
 */
const objs = [
  {
    val: 1,
    getValue: function () {
      return this.val
    },
  },
  {
    val: 2,
    getValue: function () {
      return this.val
    },
  },
  {
    val: 3,
    getValue: function () {
      return this.val
    },
  },
]
for (const obj of objs) {
  console.log(`obj.getValue:${obj.getValue()}`)
}

/**
 * 所有对象继承该原型
 */
const obj1 = {
  getValue: function () {
    return this.val
  },
}
const obj1s = [
  {
    val: 1,
    __proto__: obj1,
  },
  {
    val: 2,
    __proto__: obj1,
  },
  {
    val: 3,
    __proto__: obj1,
  },
]
for (const obj of obj1s) {
  console.log(`obj1.getValue:${obj.getValue()}`)
}

/**
 * 直接创建一个对象，该对象原型拥有该方法
 */

function ObjCon(val) {
  this.val = val
}
ObjCon.prototype.getValue = function () {
  return this.val
}

const obj2s = [new ObjCon(1), new ObjCon(2), new ObjCon(3), new ObjCon(4)]

for (const obj of obj2s) {
  console.log(`obj2.getValue:${obj.getValue()}`)
}

/**
 * ObjCon.prototype与Object.getPrototypeOf获取的prototype是不一样的
 * 前者是构造实例使用，后者是函数自有的prototype
 */
console.log(Object.getPrototypeOf(ObjCon))
console.log(Function.prototype)
console.log(ObjCon.prototype)

const tesobj = {
  a: 1,
  b: 2,
}

const testobj1 = {
  a: 1,
  b: 2,
  __proto__: {
    c: 3,
  },
}
console.log(Object.getPrototypeOf(tesobj))
console.log(Object.prototype)
console.log(Object.getPrototypeOf(testobj1))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(testobj1)))
