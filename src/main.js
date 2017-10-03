let canvas = document.getElementById("canvas");
let innerRadius = 5;
function init() {
    "use strict";
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * 0.75;
    canvas.height = height * 0.85;
}

function run() {
    "use strict";
    ctx.webkitImageSmoothingEnabled = true;
    let draw = document.getElementById("draw");
    draw.onclick = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.generate(window.getFormValue());
        window.drawPolygon(window.getPolygon(), innerRadius);
    };
    let mode = document.getElementById("mode");
    mode.onclick = function() {
        //window.polarSorter(window.getPolygon());
        window.getPolygon().forEach(e => drawCircle(e[0], e[1], innerRadius + 2));
    };
}

init();
run();