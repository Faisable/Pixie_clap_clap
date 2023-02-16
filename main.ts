input.onSound(DetectedSound.Loud, function () {
    On = !(On)
    if (On == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (On == false) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    On = true
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    On = true
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Yes)
    On = false
})
let On = false
let strip: neopixel.Strip = null
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
input.setSoundThreshold(SoundThreshold.Loud, 1024)
strip.showRainbow(1, 360)
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
On = true
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
