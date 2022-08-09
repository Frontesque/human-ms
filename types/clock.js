module.exports = (seconds = 0) => {
    seconds = Math.floor(seconds); // Not doing this seems to break the calculation
    let levels = [
      Math.floor(seconds / 31536000) || null, //Years
      Math.floor((seconds % 31536000) / 86400) || null, //Days
      Math.floor(((seconds % 31536000) % 86400) / 3600) || null, //Hours
      Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), //Minutes
      Math.floor((((seconds % 31536000) % 86400) % 3600) % 60), //Seconds
    ];
    levels = levels.filter((level) => level !== null);
    for (let i = 1; i < levels.length; i++) {
      levels[i] = levels[i].toString().padStart(2, "0");
    }
    // join the array into a string with : as a separator
    let returntext = levels.join(":");
    return returntext;
}