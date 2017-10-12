function visualize([first, second,...points], waiter) {
    let stack = [];
    stack = add(add(stack, first), second);
    points.forEach(p => {
        while (!isCounterClockwise(nextSTop(stack), sTop(stack), p)) {
            stack = remove(stack);
        }
        stack = add(stack, p);
    });
    stack.forEach(p => drawRoundWithCircle(p, innerRadius, "green"));
}