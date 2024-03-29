module.exports = {

    /**
     * Generates a timespan between two datetimes, in simplified string form.
     * If timespan is longer than day, returns 'daycount  days'
     * else If timespan is longer than an hour, returns 'hourcount hours'
     * else If timespan is longer than an hour, returns 'hourcount hours'
     */
    timespanString(end, start, d='d', h='h', m='m', s='s'){
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
    },


    /**
     * Generates a timespan from two dates, then returns a suitable string description of the time difference, with
     * proper plural. Egs
     * 3 seconds
     * 1 minute
     * 4 days
     */
    timespanStringPlural(end, start){
        if (typeof start === 'number' || typeof start === 'string')
            start = new Date(start)
    
        if (typeof end === 'number' || typeof end === 'string')
            end = new Date(end)
    
        let diff = end.getTime() - start.getTime()
    
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        diff -=  days * (1000 * 60 * 60 * 24)
    
        const hours = Math.floor(diff / (1000 * 60 * 60))
        diff -= hours * (1000 * 60 * 60)
    
        const mins = Math.floor(diff / (1000 * 60))
        diff -= mins * (1000 * 60)
        
        const secs = Math.floor(diff / 1000)
        
        if (days >= 1)
            return this.dayCount(days)
    
        if (hours >= 1)
            return this.hoursCount(hours)
        
        if (mins >= 1)
            return this.minutesCount(mins)
        
        return this.secondsCount(secs)
    },

    yearCount(years){
        return `${years} year${years === 1 ? '' : 's'}`
    },

    dayCount(days){
        return `${days} day${days === 1 ? '' : 's'}` 
    },

    hoursCount(hours){
        return `${hours} hour${hours === 1 ? '' : 's'}` 
    },

    minutesCount(minutes){
        return `${minutes} minute${minutes === 1 ? '' : 's'}` 
    },

    secondsCount(seconds){
        return `${seconds} second${seconds === 1 ? '' : 's'}` 
    },

    /**
     * Converts minutes amount to suitable number + description, egs
     * "2 minutes"
     * "1 hours"
     * "18 days"
     * "300 years"
    */
    minutesToPeriodString(totalMinutes){
        if (totalMinutes > 525600)
            return this.yearCount(Math.floor(totalMinutes / 525600)) 

        if (totalMinutes > 1440)
            return this.dayCount(Math.floor(totalMinutes / 1440))

        if (totalMinutes > 60)
            return this.hoursCount(Math.floor(totalMinutes / 60))

        return this.minutesCount(Math.floor(totalMinutes))
    },

    subtractHours(datetime, hours){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)
    
        return new Date( 
            datetime.setHours(datetime.getHours() - hours)
        )
    },


    addDays(datetime, days){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)
    
        return new Date( 
            datetime.setDate(datetime.getDate() + days)
        )
    },


    toMonthName(date, months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)

        return months[date.getMonth()]
    },


    addHours(datetime, hours){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)
    
        return new Date( 
            datetime.setHours(datetime.getHours() + hours)
        )
    },


    /**
     * Adds minutes to a date. Date can be a date object, string or milliseconds. 
     */
    addMinutes(datetime, minutes){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)

        return new Date( 
            datetime.setMinutes (datetime.getMinutes() + minutes)
        )
    },


    /**
     * Adds seconds to a date. Date can be a date object, string or milliseconds. 
     */
    addSeconds(datetime, seconds){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)

        return new Date( 
            datetime.setSeconds(datetime.getSeconds() + seconds)
        )
    },


    /**
     * Adds milliseconds to a date. The date can be a date object, string, or milliseconds.
     * @param {number} milliseconds
     */
    addMilliseconds(datetime, milliseconds){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)

        return new Date( 
            datetime.setMilliseconds(datetime.getMilliseconds() + milliseconds)
        )
    },


    /**
     * Returns a date and time string
     */
    toShort(date, format='d t', dateformat, timeformat){
        const shortDate = this.toShortDate(date, dateformat),
            shortTime = this.toShortTime(date, timeformat)
        
        return format.replace('d', shortDate)
            .replace('t', shortTime)
    },


    /**
     * Pauses current thread with setTimeout.
     * 
     * pauseFor : milliseconds to pause for.
     */
    async pause (pauseFor){
        return new Promise((resolve, reject)=>{
                setTimeout(
                    ()=>{
                        resolve()
                    }, pauseFor
                )
            }
        )
    },


    /**
     * Converts seconds (integer or int string) to minutes string representation (M:S). Example,
     * 120 > '2:00'
     * 121 > '2:01'
     */
    secondsToMinutesString(seconds) {
        if (typeof seconds === 'string')
            seconds = parseInt(seconds)
            
        var minutes = Math.floor(seconds / 60)

        if (seconds > 60 && minutes > 0)
            seconds = seconds - (minutes * 60)

        minutes = minutes.toString()
        if (minutes.length == 1)
            minutes = `0${minutes}`
            
        seconds = seconds.toString()
        if (seconds.length == 1)
            seconds = `0${seconds}`

        return `${minutes}:${seconds}`
    },


    daysDifference(after, before){
        if (typeof before === 'number' || typeof before === 'string')
            before = new Date(before)
    
        if (typeof after === 'number' || typeof after === 'string')
            after = new Date(after)
            
        let diff = after.getTime() - before.getTime()
        return Math.floor(diff / (1000 * 60 * 60 * 24))
    },


    hoursDifference (after, before){
        if (typeof before === 'number' || typeof before === 'string')
            before = new Date(before)
    
        if (typeof after === 'number' || typeof after === 'string')
            after = new Date(after)
            
        let diff = after.getTime() - before.getTime()
        return Math.floor(diff / (1000 * 60 * 60))
    },


    minutesDifference (after, before){
        if (typeof before === 'number' || typeof before === 'string')
            before = new Date(before)
    
        if (typeof after === 'number' || typeof after === 'string')
            after = new Date(after)
            
        let diff = after.getTime() - before.getTime()
        return Math.floor(diff / (1000 * 60))
    },


    secondsDifference (after, before){
        if (typeof before === 'number' || typeof before === 'string')
            before = new Date(before)
    
        if (typeof after === 'number' || typeof after === 'string')
            after = new Date(after)
            
        let diff = after.getTime() - before.getTime()
        return Math.floor(diff / (1000))
    },


    /**
     * Returns short integer-based time string
     */
    toShortTime (date, format = 'h:m:s'){
        if (typeof date === 'number' || typeof date === 'string')
            date = new Date(date)

        let hours = date.getHours().toString()
        hours = hours.length === 2 ? hours : `0${hours}`

        let minutes = date.getMinutes().toString()
        minutes = minutes.length === 2 ? minutes : `0${minutes}`
        
        let seconds = date.getSeconds().toString()
        seconds = seconds.length === 2 ? seconds : `0${seconds}`

        return format.replace('h', hours)
            .replace('m', minutes)
            .replace('s', seconds)
    },


    /**
     * Returns short integer-based date string
     */
    toShortDate(date, format = 'y/m/d'){
        if (typeof date === 'number' || typeof date === 'string')
            date = new Date(date)

        let month = (date.getMonth() + 1).toString()
        month = month.length === 2 ? month : `0${month}`

        let day = (date.getDate()).toString()
        day = day.length === 2 ? day : `0${day}`

        return format.replace('y', date.getFullYear())
            .replace('m', month)
            .replace('d', day)
    },


    /**
     * returns a 2-digit month from date
     */
    toMonth(datetime){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)

        return ((datetime.getMonth() + 1) < 10 ? '0' : '') + (datetime.getMonth() + 1)
    },


    /**
     * returns a 2-digit day from date
     */
    toDay(datetime){
        if (typeof datetime === 'number' || typeof datetime === 'string')
            datetime = new Date(datetime)

        return ((datetime.getDate() + 1) < 10 ? '0' : '') + (datetime.getDate() + 1)
    },


    getYear(date){
        if (typeof date === 'number' || typeof date === 'string')
            date = new Date(date)

        return date.getFullYear()
    },
    

    toShortYear(date){
        if (typeof date === 'number' || typeof date === 'string')
            date = new Date(date)

        return date
            .getFullYear()
            .toString()
            .substr(-2)
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
