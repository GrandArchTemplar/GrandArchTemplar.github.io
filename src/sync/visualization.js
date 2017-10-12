function visualize([first, second, ...points], waiter) {
    let stack = [];
    stack = add(add(stack, first), second);
    waiter(drawRoundWithCircle, [first, innerRadius, "blue"]);
    waiter(drawRoundWithCircle, [second, innerRadius, "blue"]);
    points.forEach(p => {
        let np = nextSTop(stack);
        let tp = sTop(stack);
        while (!isCounterClockwise(np, tp, p)) {
            waiter(drawRoundWithCircle, [tp, innerRadius, "red"]);
            stack = remove(stack);
            np = nextSTop(stack);
            tp = sTop(stack);
        }
        waiter(drawRoundWithCircle, [p, innerRadius, "blue"]);
        stack = add(stack, p);
    });
    stack.forEach(p => {
        waiter(drawRoundWithCircle, [p, innerRadius, "green"]);
    });
    let n = stack.length;
    for (let i = 0; i < n; ++i) {
        waiter(connectPoints, [stack[i % n], stack[(i + 1) % n], innerRadius, "green"]);
    }
    finalize();
}
