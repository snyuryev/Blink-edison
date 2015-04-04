var app = require("./app.js");
var url = require("url");

function start(response) {
    console.log("Request handler 'start' was called.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Blink");
    response.end();
}

function status(response) {
    console.log("Request handler 'status' was called.");

    var status = app.getStatus();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write("{\"status\":\""  + status + "\"}");
    response.end();
}

function light(response) {
    console.log("Request handler 'light' was called.");

    app.turnOnOff();

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Light");
    response.end();
}

exports.start = start;
exports.light = light;
exports.status = status;
