input.onButtonPressed(Button.A, function () {
    Player.move(-1)
    if (Big_Player) {
        Big_Player.move(-1)
        Big_Player_2.move(-1)
    }
    music.playTone(156, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
    if (Big_Player) {
        Big_Player.move(1)
        Big_Player_2.move(1)
    }
    music.playTone(175, music.beat(BeatFraction.Quarter))
})
input.onGesture(Gesture.Shake, function () {
    if (game.score() > 6) {
        Player.delete()
        Big_Player = game.createSprite(3, 4)
        Big_Player_2 = game.createSprite(1, 4)
    }
})
let Big_Player_2: game.LedSprite = null
let Big_Player: game.LedSprite = null
let Player: game.LedSprite = null
basic.showIcon(IconNames.Sword)
music.playMelody("C5 A B - C5 - - - ", 120)
Player = game.createSprite(2, 4)
let Catchem_all = game.createSprite(randint(0, 4), 0)
game.setScore(1)
basic.forever(function () {
    if (Catchem_all.get(LedSpriteProperty.Y) < 4) {
        Catchem_all.change(LedSpriteProperty.Y, 1)
        music.playTone(139, music.beat(BeatFraction.Sixteenth))
        if (game.score() < 6) {
            basic.pause(600)
        } else {
            basic.pause(300)
        }
    } else {
        if (true) {
            if (Catchem_all.isTouching(Player)) {
                music.playMelody("D E G F E G B C5 ", 335)
                basic.showString(convertToText(game.score()))
                music.playTone(659, music.beat(BeatFraction.Half))
                game.addScore(1)
            } else if (Catchem_all.isTouching(Big_Player)) {
                music.playMelody("D E G F E G B C5 ", 335)
                basic.showString(convertToText(game.score()))
                music.playTone(659, music.beat(BeatFraction.Half))
                game.addScore(1)
                Big_Player.delete()
                Big_Player_2.delete()
                Player = game.createSprite(2, 4)
            } else if (Catchem_all.isTouching(Big_Player_2)) {
                music.playMelody("D E G F E G B C5 ", 335)
                basic.showString(convertToText(game.score()))
                music.playTone(659, music.beat(BeatFraction.Half))
                game.addScore(1)
                Big_Player.delete()
                Big_Player_2.delete()
                Player = game.createSprite(2, 4)
            } else {
                game.gameOver()
                basic.showString(convertToText(game.score()))
            }
            Catchem_all.set(LedSpriteProperty.X, randint(0, 4))
            Catchem_all.set(LedSpriteProperty.Y, 0)
        }
        if (game.score() == 11) {
            music.playMelody("F G B A G A C5 - ", 337)
            basic.showString("YOU WIN")
        }
    }
})
