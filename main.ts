function Reaction_au_bruit () {
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
}
input.onSound(DetectedSound.Loud, function () {
    Reaction_au_bruit()
})
function Gestion_touche () {
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
}
input.onButtonPressed(Button.A, function () {
    Lum()
})
function Lum2 () {
    luminosité = luminosité - 8
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    On = true
    basic.showString("" + (luminosité))
    if (luminosité <= 8) {
        luminosité = 8
    }
}
function Lum () {
    luminosité = luminosité + 8
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    On = true
    basic.showString("" + (luminosité))
    if (luminosité >= 255) {
        luminosité = 247
    }
}
input.onButtonPressed(Button.B, function () {
    Lum2()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Yes)
    On = false
})
function Init () {
    pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
    pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
    strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
    luminosité = 128
    input.setSoundThreshold(SoundThreshold.Loud, 199)
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
}
let luminosité = 0
let strip: neopixel.Strip = null
let On = false
Init()
basic.forever(function () {
    strip.setBrightness(luminosité)
    Gestion_touche()
})
