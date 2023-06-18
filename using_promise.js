// setTimeout(() => {
//   console.log('helloworld');
// }, 1000);

const sayHello = timeout => new Promise(resolve => setTimeout(resolve, timeout))
sayHello(1000).then(() => {
  console.log("helloworld")
})
