
var mraa = require('mraa');

console.log('MRAA Version: ' + mraa.getVersion());

var myOnboardLed = new mraa.Gpio(37);
myOnboardLed.dir(mraa.DIR_OUT);

var ledState = myOnboardLed.read();

console.log("Led state = " + ledState);

function turnOnOff() {

    console.log("turnOnOff");

    ledState = !ledState;

    myOnboardLed.write(ledState?1:0);
}

function getStatus () {
    console.log("getStatus");

    return ledState;
}

exports.turnOnOff = turnOnOff;
exports.getStatus = getStatus;