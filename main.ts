forever(function () {
    pins.D0.digitalWrite(false)
    pause(100)
    pins.D0.digitalWrite(true)
    pause(Math.randomRange(1200, 3600))
})
forever(function () {
    pins.D1.digitalWrite(false)
    pause(100)
    pins.D1.digitalWrite(true)
    pause(Math.randomRange(1200, 3600))
})
forever(function () {
    pins.D3.digitalWrite(false)
    pause(100)
    pins.D3.digitalWrite(true)
    pause(Math.randomRange(1200, 3600))
})
