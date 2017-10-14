"use strict";

const mainCr = Object.freeze(document.getElementById("mainContainer"));
const canvas = Object.freeze(document.getElementById("mainCanvas"));
const state = Object.freeze(new Map());
const radius = Object.freeze(5);
const ctx = Object.freeze(canvas.getContext("2d"));
const promisedPolygon = Object.freeze(new Promise(resolve => {
    const button = Object.freeze(document.getElementById("draw"));
    button.onclick = Object.freeze(function() {
        const p = generatePoints(radius);
        resolve(p);
    });
}));

function test() {
    const play = document.getElementById("start");
    play.style.width = 20;
    play.style.height = 20;

}

const pair = (...args) => Object.freeze(args.slice(0, 2));

function generatePoints(r) {

    const n = Object.freeze(document.forms["input"]["vertexCount"].value);
    const points = [];
    for (let i = 0; i < n; i++) {
        const x = Math.random() * (canvas.width * 0.8 - 2 * r) + canvas.width *
            0.1;
        const y = Math.random() * (canvas.height * 0.8 - 2 * r) +
            canvas.height * 0.1;
        points.push(pair(x, y));
    }
    return points;
}

function initDraw(r) {
    promisedPolygon.then(p => {
        ctx.beginPath();
        p.forEach(e => {
            const x = e[0];
            const y = e[1];
            ctx.moveTo(x + r, y);
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fillStyle = "grey";
            ctx.fill();
            ctx.fillText("x: " + (x | 0) + " y: " + (y | 0), x + 10, y + 5);
        });
        ctx.stroke();
    });
}

function redraw(r) {

    promisedPolygon.then(p => {
        ctx.beginPath();
        p.forEach(e => {
            const x = e[0];
            const y = e[1];
            ctx.moveTo(x + r, y);
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fillStyle = "grey";
            ctx.fill();
            ctx.fillText("x: " + (x | 0) + " y: " + (y | 0), x + 10, y + 5);
        });
        ctx.stroke();
    });
}

function styleIt() {
    mainCr.style.display = "-webkit-flex";
    for (const e of Array.prototype.slice.call(
        document.getElementsByClassName("normalBordered"))) {
        e.style.margin = "1px";
        e.style.border = "1px solid #000000";
    }
}

function globalResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * 0.75;
    canvas.height = height * 0.8;

}

function init() {
    state.set("isStarted", false);
    state.set("isSmooth", false);
    globalResize();
    styleIt();
    initDraw(radius);
    test();
}

init();