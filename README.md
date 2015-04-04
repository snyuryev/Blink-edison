# Blink-edison

Blink-edison is simple application for Intel Edison and Node.js. Download this application to your Intel Edison device and run it. And you will be able to manipulate your onboard led with requests from web. Also you could download the [second part - Blink-swift](https://github.com/snyuryev/Blink-swift/) and install application to your iPhone.

Running
---

* Prepare your Intel Edison
* Connect to Intel Edison (for example via ssh)
* Upload next files: app.js, requestHandlers.js, router.js, server.js, index.js, package.json
* Run application with command: node index.js
* Enjoy

Application structure:
---

* index.js - start point for the application
* server.js - run server
* router.js - route incomming requests
* requestHandlers.js - handle incomming resuests
* app.js - hardware manipulations via mraa library
* package.json - configuration file
* Gruntfile.js - allows you to upload your app (and all files) with one click

You can get access to your onboard led with browser. For example - checking the status. Do not forget to change the local name - mine is "salty.local". 

```swift
http://salty.local:8888/status
```

It returns JSON with next structure:

```json
{
    "status": "1"
}
```

1 - led is on
2 - led is off

Next you can change the current state of led with next request:

```swift
http://salty.local:8888/light
```

