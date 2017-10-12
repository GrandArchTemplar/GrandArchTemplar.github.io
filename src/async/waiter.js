let pool = [];
function wait(action, args) {
    pool = add(pool, [action, args]);
    //action(...args);
    //setTimeout(action, 1000, ...args);
}
function finalize() {
    pool.reduce((acc, [action, args]) => {
        return setTimeout((ac, ar) => {
            acc(action, args);
            setTimeout(ac, 1000, ...ar);
        }, 1000);
    });
}