// 带键集合 Map
let myMap = new Map()
myMap.set("name", "qiancheng")
myMap.set("height", 178)
for (let [key, val] of myMap) {
  console.log(`key:${key} val:${val} typeofVal:${typeof val}`)
}

//从Map中取值
console.log(myMap.get("height"))

// WeakMap,暂时跳过...

//set
const mySet = new Set()
mySet.add(1)
mySet.add(1)
mySet.add(2)
console.log(mySet)
mySet.delete(1)
console.log(mySet)
