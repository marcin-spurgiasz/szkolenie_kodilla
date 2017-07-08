function secToMin (seconds) {
    if (typeof seconds === 'number') {
        return (seconds / 60).toFixed(0) + ' min. ' + (seconds % 60).toFixed(2) + ' sek.'
    } else {
        return 'Invalid argument'
    }
}

function secToHours (seconds) {
    if (typeof seconds === 'number') {
        return (seconds / 3600).toFixed(0) + ' godz. ' + Math.floor((seconds % 3600)/60) 
        + ' min. ' + (seconds % 60).toFixed(2) + ' sek.'
    } else {
        return 'Invalid argument'
    }
} 

module.exports = {
    secToMin: secToMin,
    secToHours: secToHours
}