module.exports = (seconds = 0) => {
    let levels = require("./_levels_")(seconds);
    for (let i = 1; i < levels.length; i++) {
        levels[i] = levels[i].toString().padStart(2, "0");
    }
    
    let returntext = levels.join(":");
    return returntext;
}