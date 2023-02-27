let previousRoll = input.rotation(Rotation.Roll)
let previousPitch = input.rotation(Rotation.Pitch)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) != previousRoll) {
    previousRoll = input.rotation(Rotation.Roll)
    serial.writeString("Graphics Roll " + input.rotation(Rotation.Roll) + "\n")
    }
    if (input.rotation(Rotation.Pitch) != previousPitch) {
        previousPitch = input.rotation(Rotation.Pitch)
        serial.writeString("Graphics Pitch " + input.rotation(Rotation.Pitch) + "\n")
    }
    basic.pause(1)
})
