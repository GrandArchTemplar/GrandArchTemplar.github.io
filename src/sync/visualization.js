function visualize([first, second, ...points], waiter) {
    let stack = [];
    stack = add(add(stack, first), second);
    drawRoundWithCircle(first, innerRadius, "blue");
    waiter();
    drawRoundWithCircle(second, innerRadius, "blue");
    waiter();
    points.forEach(p => {
        let np = nextSTop(stack);
        let tp = sTop(stack);
        while (!isCounterClockwise(np, tp, p)) {
            drawRoundWithCircle(tp, innerRadius, "red");
            waiter();
            stack = remove(stack);
            np = nextSTop(stack);
            tp = sTop(stack);
        }
        drawRoundWithCircle(p, innerRadius, "blue");
        waiter();
        stack = add(stack, p);
    });
    stack.forEach(p => {
        drawRoundWithCircle(p, innerRadius, "green");
        waiter();
    });
    let n = stack.length;
    for (let i = 0; i < n; ++i) {
        connectPoints(stack[i % n], stack[(i + 1) % n], innerRadius, "green");
        waiter();
    }
}
