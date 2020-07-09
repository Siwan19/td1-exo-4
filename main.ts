input.onButtonPressed(Button.A, function () {
    led.unplot(posX, 0)
    posX += 1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, 0)
    posX += 1
})
let posX = 0
posX = 0
basic.forever(function () {
    led.plot(posX, 0)
})
