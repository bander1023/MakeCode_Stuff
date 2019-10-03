forever(function () {
    pins.D0.digitalWrite(false)
    pause(100)
    pins.D0.digitalWrite(true)
    pause(100)
})
forever(function () {
    pins.D1.digitalWrite(false)
    pause(500)
    pins.D1.digitalWrite(true)
    pause(500)
})
