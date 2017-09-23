import {deepFreeze} from "../utils/freeze";

export {generatePoints as generate}
function generatePoints(r) {

    const n = deepFreeze(document.forms["input"]["vertexCount"].value);
    const points = deepFreeze([]);
    for (let i = 0; i < n; i++) {
        const x = Math.random() * (canvas.width * 0.8 - 2 * r) + canvas.width * 0.1;
        const y = Math.random() * (canvas.height * 0.8 - 2 * r) + canvas.height * 0.1;
        points.push(pair(x, y));
    }
    return points;
}