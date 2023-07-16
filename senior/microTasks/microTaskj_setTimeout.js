const timestamp = Date.now()
setTimeout(() => {
  console.log(`duration:${Date.now() - timestamp}`)
  keep = true
  while (keep) {
    if (Date.now() - timestamp > 12000) {
      keep = false
    }
  }
}, 1000)
setTimeout(() => {
  console.log(`duration2:${Date.now() - timestamp}`)
}, 1000)

let keep = true
while (keep) {
  if (Date.now() - timestamp > 4000) {
    keep = false
  }
}

queueMicrotask(function microFunc() {
  keep = true
  while (keep) {
    if (Date.now() - timestamp > 8000) {
      keep = false
    }
  }
})