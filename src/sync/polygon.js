let polygon;

function generate(n) {
    polygon = [];
    let canvas = document.getElementById("canvas");
    let maxX = canvas.width * 0.9;
    let dX = canvas.width * 0.05;
    let dY = canvas.height * 0.05;
    let maxY = canvas.height * 0.9;
    for (let i = 0; i < n; i++) {
        let x = Math.random() * maxX + dX;
        let y = Math.random() * maxY + dY;
        polygon[i] = [x, y]
    }
}

function getPolygon() {
    return polygon;
}