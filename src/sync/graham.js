let polarCompare = (a, b) => {
    let corner1 = Math.atan2(a[1], a[0]);
    let corner2 = Math.atan2(b[1], b[0]);
    return corner1 - corner2;
};


function polarSorter(points) {
    "use strict";
    points = points.sort((point1, point2) =>
        point1[1] < point2[1] ? 1 :
            (point2[1] < point1[1] ? -1 :
        (point1[0] < point2[0] ? -1 : 1)));
    let fixed = points[0];
    let deb = points.slice(1).map(point => [point[0] - fixed[0], fixed[1] - point[1]]);
    deb = deb.sort(polarCompare);
    return [[0, 0],...deb];
}