const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
}

async function visualize ([first, second, ...points]) {
  let stack = []
  stack = add(add(stack, first), second)

  drawRoundWithCircle(first, innerRadius, 'blue')
  await wait(100)
  drawRoundWithCircle(second, innerRadius, 'blue')
  await wait(100)

  for (const p of points) {
    let np = nextSTop(stack)
    let tp = sTop(stack)
    while (!isCounterClockwise(np, tp, p)) {
      drawRoundWithCircle(tp, innerRadius, 'red')
      await wait(100)
      stack = remove(stack)
      np = nextSTop(stack)
      tp = sTop(stack)
    }
    drawRoundWithCircle(p, innerRadius, 'blue')
    await wait(100)
    stack = add(stack, p)
  }
  for (const p of stack) {
    drawRoundWithCircle(p, innerRadius, 'green')
    await wait(50)
  }
  let n = stack.length
  for (let i = 0; i < n; ++i) {
    connectPoints(stack[i % n], stack[(i + 1) % n], innerRadius, 'green')
    await wait(100)
  }
}
