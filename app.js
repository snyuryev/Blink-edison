
var mraa = require('mraa');
var ledState = false;
var myOnboardLed = new mraa.Gpio(mraa.INTEL_EDISON_GP40);
myOnboardLed.dir(mraa.DIR_OUT);

// turn off at launch
myOnboardLed.write(ledState?1:0);

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