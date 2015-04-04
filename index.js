var server = require("./server.js");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/light"] = requestHandlers.light;
handle["/status"] = requestHandlers.status;

server.start(router.route, handle);