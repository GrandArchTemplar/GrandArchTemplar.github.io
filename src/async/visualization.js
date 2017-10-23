const wait = (time, button) => {
    return smoothMode
        ? new Promise((resolve) => {
            setTimeout(() => resolve(), time)
        })
        : new Promise((resolve) => {
            button.onclick = () => resolve();
        })
};
/*const wait = (time, button) => {
    new Promise((resolve, reject) => {
        smoothMode ? resolve() : reject();
    }).then(
        (resolve) => {
        setTimeout(() => resolve(), time);
    },  (reject) => {
            button.onclick = () => reject();
        })
};*/

/*const waitButton = (button) => {
    return new Promise((resolve) => {
        button.onclick = () => resolve();
    })

};*/

async function visualize([first, second, ...points]) {
    let stack = [];
    stack = add(add(stack, first), second);
    await wait(100, next);
    drawRoundWithCircle(first, innerRadius, "blue");

    await wait(100, next);
    drawRoundWithCircle(second, innerRadius, "blue");

    for (const p of points) {
        let np = nextSTop(stack);
        let tp = sTop(stack);
        while (!isCounterClockwise(np, tp, p)) {
            await wait(100, next);
            drawRoundWithCircle(tp, innerRadius, "red");

            stack = remove(stack);
            np = nextSTop(stack);
            tp = sTop(stack);
        }

        await wait(100, next);
        drawRoundWithCircle(p, innerRadius, "blue");

        stack = add(stack, p);
    }
    stack = stack.reverse();
    for (const p of stack) {
        await wait(100, next);
        drawRoundWithCircle(p, innerRadius, "green");
    }
    let n = stack.length;
    for (let i = 0; i < n; ++i) {
        await wait(100, next);
        connectPoints(stack[i % n], stack[(i + 1) % n], innerRadius, "green");
    }
}
