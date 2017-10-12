function visualize([polar,first,...points], waiter) {
    return points.reduce(([sp,fp,...other],
                   cp,
                   index,
                   array) => {
        waiter();
        if (isCounterClockwise(sp, fp, cp)) {
            connectPoints(sp, cp, innerRadius, "green");
            return [cp, sp, fp,...other]
        } else {
            connectPoints(sp, cp, innerRadius, "red");
            disconnectPoints(sp, cp, innerRadius, "green", "red");
            return [sp, fp,...other]
        }
    }, [first, polar]);
}