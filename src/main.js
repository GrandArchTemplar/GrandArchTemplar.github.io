const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const innerRadius = 3;
const draw = document.getElementById("draw");
const start = document.getElementById("start");
//const mode = document.getElementById("mode");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const next = document.getElementById("next");

let backgroundColor = "white";
let wasSmoothed = false;
let isPaused = false;
let polygon = [];
let smoothMode = true;

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
    draw.onclick = () => {
        clearCTX();
        window.generate(window.getFormValue());
        window.drawPolygon(window.getPolygon(), innerRadius, "black");
    };
    start.onclick = () => {
        window
        .visualize(window.polarSorter(window.getPolygon()))
        .catch(console.error);
        //window.getPolygon().forEach(e => drawCircle(e[0], e[1], innerRadius + 2, "green"));
    };
    pause.onclick = () => {
      smoothMode = !smoothMode;
      next.click();
    };
    /*mode.onclick = () => {
            smoothMode = !smoothMode;
        if (!isPaused) {
            next.click();
        }
    };*/
    /*pause.onclick = () => {
        if (isPaused && wasSmoothed) {
            isPaused = false;
            mode.click();
        }
        else {
            isPaused = true;
            if (smoothMode) {
                wasSmoothed = true;
                mode.click();
            }
        }

    };*/
    stop.onclick = () => {
        clearCTX();
    }
}

init();
run();