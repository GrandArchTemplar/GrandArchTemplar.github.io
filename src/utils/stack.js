function sTop([x,...xs]) {
    return x;
}

function nextSTop([x, y,...xs]) {
    return y;
}

function add(xs, x) {
    "use strict";
    return [x,...xs];
}

function remove([x,...xs]) {
    return xs;
}