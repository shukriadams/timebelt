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
        date = new Date(date)

    let month = (date.getMonth() + 1).toString()
    month = month.length === 2 ? month : `0${month}`

    let day = (date.getDate()).toString()
    day = day.length === 2 ? day : `0${day}`

    return format.replace('y', date.getFullYear())
        .replace('m', month)
        .replace('d', day)
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
 * Adds minutes to a date. Date can be a date object, string or milliseconds. 
 */
const addMinutes = function(datetime, minutes){
    if (typeof datetime === 'number' || typeof datetime === 'string')
        datetime = new Date(datetime);

    return new Date( 
        datetime.setMinutes (datetime.getMinutes() + minutes)
    );    
};


/**
 * Adds seconds to a date. Date can be a date object, string or milliseconds. 
 */
const addSeconds = function(datetime, seconds){
    if (typeof datetime === 'number' || typeof datetime === 'string')
        datetime = new Date(datetime);

    return new Date( 
        datetime.setSeconds(datetime.getSeconds() + seconds)
    );
};


/**
 * Adds milliseconds to a date. The date can be a date object, string, or milliseconds.
 * @param {number} milliseconds
 */
const addMilliseconds = function(datetime, milliseconds){
    if (typeof datetime === 'number' || typeof datetime === 'string')
        datetime = new Date(datetime);

    return new Date( 
        datetime.setMilliseconds(datetime.getMilliseconds() + milliseconds)
    );
}


/**
 * returns a 2-digit month from date
 */
const toMonth = function(datetime){
    if (typeof datetime === 'number' || typeof datetime === 'string')
        datetime = new Date(datetime)

    return ((datetime.getMonth() + 1) < 10 ? '0' : '') + (datetime.getMonth() + 1)
}


/**
 * returns a 2-digit day from date
 */
const toDay = function(datetime){
    if (typeof datetime === 'number' || typeof datetime === 'string')
        datetime = new Date(datetime)

    return ((datetime.getDate() + 1) < 10 ? '0' : '') + (datetime.getDate() + 1)
}

const subtractHours = function(datetime, hours){
    if (typeof datetime === 'number' || typeof datetime === 'string')
        datetime = new Date(datetime)

    return new Date( 
        datetime.setHours(datetime.getHours() - hours)
    )
}

const addHours = function(datetime, hours){
    if (typeof datetime === 'number' || typeof datetime === 'string')
        datetime = new Date(datetime)

    return new Date( 
        datetime.setHours(datetime.getHours() + hours)
    )
}


/**
 * Generates a timespan between two datetimes, in simplified string form.
 * If timespan is longer than day, returns 'daycount  days'
 * else If timespan is longer than an hour, returns 'hourcount hours'
 * else If timespan is longer than an hour, returns 'hourcount hours'
 */
const timespanString = function(end, start, d='d', h='h', m='m', s='secs'){
    if (typeof start === 'number' || typeof start === 'string')
        start = new Date(start)

    if (typeof end === 'number' || typeof end === 'string')
        end = new Date(end)

    let diff = end.getTime() - start.getTime()

    let days = Math.floor(diff / (1000 * 60 * 60 * 24))
    diff -=  days * (1000 * 60 * 60 * 24)

    let hours = Math.floor(diff / (1000 * 60 * 60))
    diff -= hours * (1000 * 60 * 60)

    let mins = Math.floor(diff / (1000 * 60))

    if (days >= 1)
        return days + d

    if (hours >= 1)
        return hours + h
    
    if (mins >= 1)
        return mins + m
    
    return s
}





module.exports = {
    timespanString,
    subtractHours,
    addHours,
    addMinutes,
    addSeconds,
    addMilliseconds,
    toShort,
    pause,
    secondsToMinutesString,
    daysDifference,
    hoursDifference,
    minutesDifference,
    secondsDifference,
    toShortTime,
    toShortDate,
    toMonth,
    toDay,

    getYear(date){
        if (typeof date === 'number' || typeof date === 'string')
            date = new Date(date)

        return date.getFullYear()
    },
    
    toShortYear(date){
        if (typeof date === 'number' || typeof date === 'string')
            date = new Date(date)

        return date.getFullYear().toString().substr(-2)
    },
    
    
    /**
     * calculates week nr for a given date
     * from https://gist.github.com/IamSilviu/5899269
     */
    weekNumber(date){
        if (typeof date === 'number' || typeof date === 'string')
            date = new Date(date)
    
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1),
            pastDaysOfYear = (date - firstDayOfYear) / 86400000
    
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
    },

    /**
     * Converts .net datetime ticks to Javascript date object
     */
    ticksToDate(ticks){
        const time = ticks / 10000,
            timeDiff = Math.abs(new Date(0, 0, 1).setFullYear(1))

        return new Date(time - timeDiff)
    }
}
