import moment from 'moment'

export const msConversion = (millis) => {
    let sec = Math.floor(millis / 1000);
    let hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    
    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);
    
    if (hrs > 0) {
        min = '' + min;
        min = ('00' + min).substring(min.length);
        return hrs + ":" + min + ":" + sec;
    }
    else {
        return min + ":" + sec;
    }
}

export const toHHMMSS = (secs) => {
    return moment.utc(secs * 1000).format('HH:mm');
}

export const datetimeToDate = (value) => {
    const date = new Date(value * 1000);
 
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
 
    return `${`0${day}`.slice(-2)}.${`0${month}`.slice(-2)}.${year}`;
}