// setTimeout(() => {
//   console.log('helloworld');
// }, 1000);

const sayHello = timeout => new Promise(resolve => setTimeout(resolve, timeout))

const task1 = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    throw new Error("sth suc error")
    return "task1 suc"
  } catch (e) {
    /**
     * 直接使用return 或 throw new Error 外层对async函数的调用
     * 外层使用Promise、try await，return的结果通过then、await返回，throw的结果通过catch捕获
     * 外层使用try void，return和throw Error都无法捕获
     */
    // return "task1 fail"
    throw new Error("sth fail error")
  }
}

const asyncEntrance = async () => {
  // try catch
  // try {
  //   void task1()
  // } catch (e) {
  //   console.log(e.message)
  // }

  Promise
  task1()
    .then(res => {
      console.log(`suc res:${JSON.stringify(res)}`)
    })
    .catch(res => {
      console.log(`fail res:${JSON.stringify(res.message)}`)
    })
}
void asyncEntrance()
