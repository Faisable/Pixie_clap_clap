def on_button_pressed_a():
    global On
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    On = True
    basic.show_leds("""
        . . . . .
                . . . . #
                . . . . .
                . . . . .
                # . # . #
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    global On
    if On == True:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    On = not (On)
    if On == False:
        strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
    basic.show_leds("""
        . . # . .
                . # # . #
                # # # # .
                . # # . #
                . . # . .
    """)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    global On
    strip.show_color(neopixel.colors(NeoPixelColors.VIOLET))
    On = True
    basic.show_leds("""
        # . # . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global On
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.show_icon(IconNames.YES)
    On = False
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

On = False
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
input.set_sound_threshold(SoundThreshold.LOUD, 1024)
strip.show_rainbow(1, 360)
basic.pause(1000)
strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
On = True
basic.show_leds("""
    . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
""")

def on_forever():
    if input.pin_is_pressed(TouchPin.P1):
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if input.pin_is_pressed(TouchPin.P2):
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
basic.forever(on_forever)
