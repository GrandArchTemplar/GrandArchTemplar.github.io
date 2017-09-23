import {generate} from "../actions/generator";
import {deepFreeze} from "../utils/freeze";

const promisedPolygon = new Promise(resolve => {
    const button = deepFreeze(document.getElementById("draw"));
    button.onclick = deepFreeze(function () {
        const p = deepFreeze(generate(radius));
        resolve(p);
    })
});

function getPolygon(buffer) {
    promisedPolygon.then(p => buffer = p);
    return buffer;
}