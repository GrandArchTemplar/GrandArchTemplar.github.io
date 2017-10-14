let smoothMode = true;
const wait = (parameter) => {
    if (smoothMode) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), parameter)
        });
    } else {
        return new Promise((resolve) => {
            parameter.onclick = () => resolve();
        })
    }
};

/*const waitButton = (button) => {
    return new Promise((resolve) => {
        button.onclick = () => resolve();
    })

};*/

async function visualize([first, second, ...points]) {
    let stack = [];
    stack = add(add(stack, first), second);

    drawRoundWithCircle(first, innerRadius, "blue");
    await wait(1);
    drawRoundWithCircle(second, innerRadius, "blue");
    await wait(1);

    for (const p of points) {
        let np = nextSTop(stack);
        let tp = sTop(stack);
        while (!isCounterClockwise(np, tp, p)) {
            drawRoundWithCircle(tp, innerRadius, "red");
            await wait(1);
            stack = remove(stack);
            np = nextSTop(stack);
            tp = sTop(stack);
        }
        drawRoundWithCircle(p, innerRadius, "blue");
        await wait(1);
        stack = add(stack, p);
    }
    stack = stack.reverse();
    for (const p of stack) {
        drawRoundWithCircle(p, innerRadius, "green");
        await wait(1);
    }
    let n = stack.length;
    for (let i = 0; i < n; ++i) {
        connectPoints(stack[i % n], stack[(i + 1) % n], innerRadius, "green");
        await wait(1);
    }
}
