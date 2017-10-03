let ctx = canvas.getContext("2d");

function drawPolygon(polygon, r) {
    "use strict";
    ctx.beginPath();
    polygon.forEach(e => {
        let x = e[0];
        let y = e[1];
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.fillText("x: " + (x | 0) + " y: " + (y | 0), x + 2 * r, y + r / 2);
    });
}

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x + r + 1, y);
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}