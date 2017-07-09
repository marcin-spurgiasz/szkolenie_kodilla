//moduł dostarcza metody związane z systemem operacyjnym
var os = require('os'),
    timeConverter = require('./timeConverter');

function getOSinfo () {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    if (type === 'Darwin'){
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime (min): ~', timeConverter.secToMin(uptime));
    console.log('Uptime (h): ~', timeConverter.secToHours(uptime));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;