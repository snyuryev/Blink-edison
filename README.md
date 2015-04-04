# Blink-edison

Blink-edison is simple application for Intel Edison and Node.js. Download this application to your Intel Edison device and run it. And you will be able to manipulate your on-board led with requests from web. Also you could download the second part - Blink-swift and install application to your iPhone.

You can get access to your onboard led with browser. For example - checking the status.

```swift
let kStatusURLString : String = "http://salty.local:8888/status"
```

It returns JSON with next structure:

```json
```

```swift
let kLightURLString : String = "http://salty.local:8888/light"
```


let kStatusURLString : String = "http://salty.local:8888/status"
let kLightURLString : String = "http://salty.local:8888/light"
