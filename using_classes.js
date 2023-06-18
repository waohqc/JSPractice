// 声明一个类
class MyClass {
  constructor() {}
  myField = "foo"
  myMethod() {
    console.log(this.myField)
    console.log(this.#myPrivateField)
  }
  static myStaticField = "bar"
  static myStaticMethod() {
    console.log(this.myStaticField)
    console.log(this.#myPrivateStaticField)
  }
  static {}
  #myPrivateField = "private foo"
  static #myPrivateStaticField = "private bar"
}

const myObj = new MyClass()
myObj.myMethod()
MyClass.myStaticMethod()

// es6以前

function MyClassBefore() {
  this.myField = "foo"
}
MyClassBefore.prototype.myMethod = function () {
  console.log(this.myField)
}
MyClassBefore.myStaticField = "bar"
MyClassBefore.myStaticMethod = function () {
  console.log(this.myStaticField)
}
console.log(`***before es6 ***`);
const myObj1 = new MyClassBefore()
myObj1.myMethod()
MyClassBefore.myStaticMethod()
