let hoursDifference = function hoursDifference(before, after){
    let diff = after.getTime() - before.getTime();
    return Math.floor(diff / (1000 * 60 * 60));
}

let toShortDate = function (date, format = 'y/m/d'){
    if (typeof date === 'number' || typeof date === 'string')
        date = new Date(date);

    format = format.replace('y', date.getFullYear());
    format = format.replace('m', date.getMonth() + 1);
    format = format.replace('d', date.getDate() + 1);

    return format;
}

module.exports = {
    hoursDifference,
    toShortDate
}