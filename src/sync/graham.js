//const polarCompare = (;

function polarSorter(points) {
    "use strict";
    let [[px, py], ...deb] = points.sort(([x1, y1], [x2, y2]) =>
        y1 < y2 ? 1 : (y2 < y1 ? -1 : x1 - x2));
    return [
        [0, 0],
        ...deb.map(([x, y]) => [x - px, py - y]).sort([ax, ay], [bx, by]) => Math.atan2(ay, ax) - Math.atan2(by, bx))].map(
        ([x, y]) => [x + px, py - y]);
}

function isCounterClockwise([ax, ay], [bx, by], [cx, cy]) {
    let [ux, uy] = [bx - ax, by - ay];
    let [vx, vy] = [cx - bx, cy - by];
    return ux * vy - uy * vx < 0;
}

