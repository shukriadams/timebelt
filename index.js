let hoursDifference = function hoursDifference(before, after){
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60 * 60));
}

module.exports = {
    hoursDifference
}