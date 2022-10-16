function sum() {
    let current = 0;

    for(i = 0; i < arguments.length; i++){
        current += arguments[i];
    }
    return current;
}

module.exports = sum;