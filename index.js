const daysDifference = function daysDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}


const hoursDifference = function hoursDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60 * 60));
}


const minutesDifference = function minutesDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60));
}


const secondsDifference = function secondsDifference(after, before){
    if (typeof before === 'number' || typeof before === 'string')
        before = new Date(before);

    if (typeof after === 'number' || typeof after === 'string')
        after = new Date(after);
        
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000));
}


/**
 * Returns short integer-based date string
 */
const toShortDate = function (date, format = 'y/m/d'){
    if (typeof date === 'number' || typeof date === 'string')
        date = new Date(date);

    let month = (date.getMonth() + 1).toString();
    month = month.length === 2 ? month : `0${month}`;

    return format.replace('y', date.getFullYear())
        .replace('m', month)
        .replace('d', date.getDate() + 1);
}


/**
 * Returns short integer-based time string
 */
const toShortTime = function (date, format = 'h:m:s'){
    if (typeof date === 'number' || typeof date === 'string')
        date = new Date(date);

    let hours = date.getHours().toString();
    hours = hours.length === 2 ? hours : `0${hours}`;

    let minutes = date.getMinutes().toString();
    minutes = minutes.length === 2 ? minutes : `0${minutes}`;
    
    let seconds = date.getSeconds().toString();
    seconds = seconds.length === 2 ? seconds : `0${seconds}`;

    return format.replace('h', hours)
        .replace('m', minutes)
        .replace('s', seconds);
}


/**
 * Converts seconds (integer or int string) to minutes string representation (M:S). Example,
 * 120 > '2:00'
 * 121 > '2:01'
 */
const secondsToMinutesString = function (seconds) {
    if (typeof seconds === 'string')
        seconds = parseInt(seconds);
        
    var minutes = Math.floor(seconds / 60);

    if (seconds > 60 && minutes > 0)
        seconds = seconds - (minutes * 60);

    minutes = minutes.toString();
    if (minutes.length == 1)
        minutes = `0${minutes}`;
        
    seconds = seconds.toString();
    if (seconds.length == 1)
        seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
};


/**
 * Pauses current thread with setTimeout.
 * 
 * pauseFor : milliseconds to pause for.
 */
const pause = async function(pauseFor){
    return new Promise(
        function(resolve, reject){
            setTimeout(
                function(){
                    resolve();
                }, pauseFor
            );
        }
    );
}


/**
 * Returns a date and time string
 */
const toShort = function(date, format='d t', dateformat, timeformat){
    const shortDate =toShortDate(date, dateformat),
        shortTime = toShortTime(date, timeformat);
    
    return format.replace('d', shortDate)
        .replace('t', shortTime);
}


/**
 * adds minutes to a date. date can be a date object or milliseconds
 */
const addMinutes = function(datetime, minutes){
    if (typeof datetime === 'number')
        datetime = new Date(datetime);

    return new Date(datetime.getTime() + (minutes * 60000));
};


/**
 * Adds seconds to a date. date can be a date object or milliseconds
 */
const addSeconds = function(datetime, seconds){
    if (typeof datetime === 'number')
        datetime = new Date(datetime);

    return new Date(datetime.getTime() + (seconds * 10000));
};


module.exports = {
    addMinutes,
    addSeconds,
    toShort,
    pause,
    secondsToMinutesString,
    daysDifference,
    hoursDifference,
    minutesDifference,
    secondsDifference,
    toShortTime,
    toShortDate
}
