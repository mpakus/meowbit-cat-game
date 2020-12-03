scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tom_kom.vy == 0) {
        tom_kom.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(true, effects.starField)
})
let tom_kom: Sprite = null
scene.setBackgroundColor(9)
tom_kom = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 4 . . . 
    . . . . . . . . . . . . 4 4 4 . 
    4 . . . . . . . . . . . 4 4 5 . 
    4 4 4 4 4 4 b 4 4 b 4 4 b 4 4 4 
    . . . 4 4 b 4 4 b 4 4 b 4 4 . . 
    . . . 4 b 4 4 b 4 4 b 4 . . . . 
    . . . 4 . 4 . . . 4 . 4 . . . . 
    . . . 4 . 4 . . . 4 . 4 . . . . 
    . . . 1 . 1 . . . 1 . 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(tom_kom, 100, 0)
tiles.setTilemap(tilemap`level_0`)
tom_kom.ay = 350
scene.cameraFollowSprite(tom_kom)
