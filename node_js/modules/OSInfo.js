//moduł dostarcza metody związane z systemem operacyjnym
var os = require('os');
var colors = require('colors');
var timeConverter = require('./timeConverter');

function getOSinfo () {
    var type = os.type(),
        release = os.release(),
        cpu = os.cpus()[0].model,
        uptime = os.uptime(),
        userInfo = os.userInfo();
    if (type === 'Darwin'){
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime (min): ~'.green, timeConverter.secToMin(uptime));
    console.log('Uptime (h): ~'.green, timeConverter.secToHours(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;