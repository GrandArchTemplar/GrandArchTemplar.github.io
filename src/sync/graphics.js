let ctx = canvas.getContext("2d");

function drawPolygon(polygon, r, color) {
    "use strict";
    polygon.forEach(([x, y]) => {
        drawRoundWithCircle([x, y], r, color);
        ctx.fillText("x: " + (x | 0) + " y: " + (y | 0), x + 2 * r, y + r / 2);
    });
}

function drawCircle(p, r, color) {
    "use strict";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(...p, r + 3, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawRound(p, r, color) {
    "use strict";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(...p, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}
function drawRoundWithCircle(p, r, color) {
    "use strict";
    drawRound(p, r, color);
    drawCircle(p, r, color);
}
function connectPoints([x1, y1], [x2, y2], r, color) {
    let angle = Math.atan2(y2 - y1, x2 - x1);
    drawRoundWithCircle([x1, y1], r, color);
    drawRoundWithCircle([x2, y2], r, color);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(...[x1, y1], r + 3, angle, 2 * Math.PI + angle);
    ctx.arc(...[x2, y2], r + 3, Math.PI + angle, 3 * Math.PI + angle);
    ctx.stroke();
}


function disconnectPoints(p1, p2, r, firstColor, secondColor) {
    "use strict";
    for (let i = 0; i < 10; ++i) {
        connectPoints(p1, p2, r, backgroundColor);
    }
    drawRoundWithCircle(p1, r, firstColor);
    drawRoundWithCircle(p2, r, secondColor);
}