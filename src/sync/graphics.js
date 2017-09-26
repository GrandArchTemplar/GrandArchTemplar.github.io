function drawPolygon(polygon, r) {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    polygon.forEach(e => {
        let x = e[0];
        let y = e[1];
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.fillText("x: " + (x | 0) + " y: " + (y | 0), x + 2 * r, y + r / 2);
    });
    ctx.stroke();
}