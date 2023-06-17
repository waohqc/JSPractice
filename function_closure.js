'use strict'
var log = console.log
function A(x) {
  function B(y) {
    return y + x
  }
  return B
}

const func_b = A(10)
const res = func_b(5)
console.log(res)
log(A(1)(2))

/**
 * 一个有趣的闭包，返回一个包含操作外部函数内部变量的方法的对象
 */

function createPet(name) {
  var sex
  return {
    name,
    setName: function () {
      name = name
    },
    setSex(sexy) {
      sex = sexy
    },
    getSex() {
      return sex
    }
  }
}

const myPet = createPet('little qian')
myPet.setSex('man')
log(myPet.getSex())


/**
 * 
 * @param {*} parameters 一个隐式参数，代表任意数量的方法参数，不需要写形参，在函数内部可以直接访问
 */
function multiParameters(parameters) {
  log(arguments.length)
  for(let i=0;i<arguments.length;i++) {
    log(arguments[i])
  }
}

multiParameters(undefined,1,2,3,4,5)