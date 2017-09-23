export function deepFreeze(obj) {
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach(function(name) {
        const prop = obj[name];
        if ('object' === typeof prop && null !== prop) {
                deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}