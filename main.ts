input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
    led.stopAnimation()
    led.enable(false)
})
function alarm () {
    if (input.lightLevel() < 40) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    led.enable(true)
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    alarm()
})
