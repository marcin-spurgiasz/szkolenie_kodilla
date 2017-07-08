function secToMin (seconds) {
    if (typeof seconds === 'number') {
        var min, sec;
        min = (seconds / 60).toFixed(0);
        sec = (seconds % 60).toFixed(2); 
        return min + ' min. ' + sec + ' sek.'
    } else {
        return 'Invalid argument'
    }
}

function secToHours (seconds) {
    if (typeof seconds === 'number') {
        var hours, min, sec;
        hours = (seconds / 3600).toFixed(0);
        min = Math.floor((seconds % 3600)/60);
        sec = (seconds % 60).toFixed(2); 
        return hours + ' godz. ' + min + ' min. ' + sec + ' sek.'
    } else {
        return 'Invalid argument'
    }
} 

module.exports = {
    secToMin: secToMin,
    secToHours: secToHours
}