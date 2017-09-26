let canvas = document.getElementById("canvas");
function init() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * 0.75;
    canvas.height = height * 0.85;
}

function run() {
    let draw = document.getElementById("draw");
    draw.onclick = function() {
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        generate(getFormValue());
        drawPolygon(getPolygon(), 5);
    };
}

init();
run();