window.pureFor = pureFor;
function pureFor(init, predicate, change, body, args) {
    if (predicate(init)) {
        pureFor(change(init), predicate, change, body, body(args));
    } else {
        return args;
    }

}