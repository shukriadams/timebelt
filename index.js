let daysDifference = function daysDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

let hoursDifference = function hoursDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60 * 60));
}

let minutesDifference = function minutesDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60));
}

let secondsDifference = function secondsDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000));
}

let toShortDate = function (date, format = 'y/m/d'){
    if (typeof date === 'number' || typeof date === 'string')
        date = new Date(date);

    format = format.replace('y', date.getFullYear());
    format = format.replace('m', date.getMonth() + 1);
    format = format.replace('d', date.getDate() + 1);

    return format;
}

/**
 * Converts seconds (integer or int string) to minutes string representation (M:S). Example,
 * 120 > '2:00'
 * 121 > '2:01'
 */
let secondsToMinutesString = function (seconds) {
    if (typeof seconds === 'string')
        seconds = parseInt(seconds);
        
    var minutes = Math.floor(seconds / 60);

    if (seconds > 60 && minutes > 0)
        seconds = seconds - (minutes * 60);

    minutes = minutes.toString();
    if (minutes.length == 1)
        minutes = "0" + minutes;
        
    seconds = seconds.toString();
    if (seconds.length == 1)
        seconds = "0" + seconds;

    return `${minutes}:${seconds}`;
};

module.exports = {
    secondsToMinutesString,
    daysDifference,
    hoursDifference,
    minutesDifference,
    secondsDifference,
    toShortDate
}