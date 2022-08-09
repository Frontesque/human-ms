const types = {
    clock: require("./types/clock"),
    full: require("./types/full"),
    short: require("./types/short"),
}

module.exports = (seconds=0, type="clock") => {
    return types[type](seconds);
}