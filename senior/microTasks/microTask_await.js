function microTaskTest() {
  let i = 0
  queueMicrotask(function microFunc() {
    console.log(`microFunc i :${i}`)
    i++
    if (i < 2) {
      queueMicrotask(microFunc)
    }
  })
}
async function testFunc() {
  for (let i = 0; i < 3; i++) {
    await console.log(`await i:${i}`)
    console.log(`await return i:${i}`)
  }
  console.log(`await end`)
}
/**
 * 微任务队列的执行顺序
 * await i 0
 *
 * microFunc i 0
 *
 * await return i 0
 * await i 1
 *
 * microFunc i 1
 *
 * await return i 1
 * await i 2
 *
 * await return i 2
 * await end
 *
 */

microTaskTest()
void testFunc()
