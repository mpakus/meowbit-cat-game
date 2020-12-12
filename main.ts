namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.magicWand.play()
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tom_kom.vy == 0) {
        tom_kom.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    music.pewPew.play()
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 4 b b b 4 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b a f f f a b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(tom_kom.x + 80, tom_kom.y - 80)
    bee.follow(tom_kom)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    current_level += 1
    if (info.score() > 7) {
        info.changeLifeBy(1)
    }
    startLevel()
})
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level_0`)
    } else {
        tiles.setTilemap(tiles.createTilemap(hex`320010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000050000000000000000050000000000000000000000010100000000000101000000000001010000010100000000000004000001000000000000000101010000000004000000010000000000010100000000000000000000000000000000000000000101000000000000000100000000000001000101000000000000000000000000000000000001000000000000000000000500000000000003000100000000000000000000000000010000000400010000000000010100000001000000000000000001010100000000010100000100000000000000000000000000000100010000000000000000000000000000010000000000000000000000040000000000000100040000010000000000000006000000000000000400000000010000000000000100000000000000000101000000000000000001010000000100000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000000000001010005000000000000000000000004000000010000000100000000000000000000000000000000000000000000000000000000000101010000000000000000000101000100000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
            ..................................................
            ..................................................
            ..................................................
            .......................................2..........
            ..................22.....22.....22..22.........2..
            .....222........2.....22....................22....
            ...2......2.22.................2..................
            .2.............2.....2.....22...2........222....22
            ..2..............2.2..............2...............
            ...2....2....................2......2........22...
            .....22...2.............22........................
            ............22.................2...2..............
            ...............222.........22.2..2................
            ..................................................
            ..................................................
            ..................................................
            `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile5,myTiles.tile2,myTiles.tile4,myTiles.tile6], TileScale.Sixteen))
    }
    tiles.placeOnRandomTile(tom_kom, myTiles.tile6)
    for (let value of tiles.getTilesByType(myTiles.tile6)) {
        tiles.setTileAt(value, myTiles.transparency16)
    }
    tom_kom.ay = 340
    scene.cameraFollowSprite(tom_kom)
    for (let value2 of tiles.getTilesByType(myTiles.tile2)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . f 5 5 4 5 5 5 5 5 4 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
            . f 5 5 4 5 5 5 5 5 4 5 5 f . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . f 5 5 5 5 5 5 5 f . . . . . 
            . f 5 5 4 4 4 4 4 5 5 f . . . . 
            . f 5 4 5 5 5 5 5 4 5 f . . . . 
            . f 5 4 5 5 5 5 5 4 5 f . . . . 
            . f 5 4 5 5 5 5 5 4 5 f . . . . 
            . f 5 4 5 5 5 5 5 4 5 f . . . . 
            . f 5 4 5 5 5 5 5 4 5 f . . . . 
            . f 5 5 4 4 4 4 4 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . f 5 5 4 4 4 5 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 5 4 4 4 5 5 f . . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . f 5 5 4 5 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 5 4 5 5 f . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 4 5 f . . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . f 5 5 4 5 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 4 5 4 5 f . . . . . . 
            . . . f 5 5 4 5 5 f . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . f 5 5 4 4 4 5 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 4 5 5 5 4 5 f . . . . . 
            . . f 5 5 4 4 4 5 5 f . . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.setTileAt(value2, myTiles.transparency16)
        tiles.placeOnTile(coin, value2)
        tiles.setTileAt(value2, myTiles.transparency16)
    }
    for (let value3 of tiles.getTilesByType(myTiles.tile4)) {
        bee = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 3 9 . . . . . . . 
            . . . . . . 3 9 3 . . . . . . . 
            . . . . . . 4 2 4 . . . . . . . 
            . . . 7 . . 2 4 2 . . 7 . . . . 
            . . . 7 7 . . c . . 7 7 . . . . 
            . . . 8 7 7 . c . 7 7 8 . . . . 
            . . . . 8 7 7 7 7 7 8 . . . . . 
            . . . . . 8 7 7 8 . . . . . . . 
            `, SpriteKind.Flower)
        tiles.placeOnTile(bee, value3)
        tiles.setTileAt(value3, myTiles.transparency16)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (tom_kom.y < otherSprite.y) {
        info.changeScoreBy(4)
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
let coin: Sprite = null
let bee: Sprite = null
let tom_kom: Sprite = null
let current_level = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999911111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999991111111111199911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999911111111111199111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999119999199999999999999999999999999999911111111111191111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999111911119999999999999999999999999999111111111111111111119999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999
    9999911111111111999999999999999999999999999111111111111111111119999999999999999999999999999111111999991119999999999999999999999111119999999911999999999999999999
    9999911111111111991199999999999999999999999111111111111111111119999111999999999999999999999111111199911111999999999999999999999111111199911111119999999999999999
    9999111111111111111199999999999999999999999111111111111111111111991111199999999999999999999111111199111111999999999999999999991111111111111111119999999999999999
    9999111111111111111119999999999999999999999111111111111111111111911111199999999999999999999111111111111111191111199999999999991111111111111111119991199999999999
    9999111111111111111111111999999999999999999111111111111111111111111111199999999999999999991111111111111111191111119999999999991111111111111111119111119999999999
    9991111111111111111111111999999999999999999111111111111111111111111111999999999999999999991111111111111111111111111999999999991111111111111111111111111999999999
    9991111111111111111111111999999999999999999111111111111111111111111111999999999999999999991111111111111111111111111199999999991111111111111111111111111199999999
    9991111111111111111111111111999999999999999111111111111111111111111111999999999999999999991111111111111111111111111199999999991111111111111111111111111199999999
    9991111111111111111111111111119999999999999911111111111111111111111111999999999999999999991111111111111111111111111199999999991111111111111111111111111119999999
    9991111111111111111111111111119999999999999911111111111111111111111111999999999999999999911111111111111111111111111199999999991111111111111111111111111119999999
    9991111111111111111111111111119999999999999991111111111111111111111111999999999999999999911111111111111111111111111199999999999111111111111111111111111119999999
    9991111111111111111111111111119999999999999991111111111111111111111111999999999999999999911111111111111111111111111199999999999111111111111111111111111119999999
    9991111111111111111111111111199999999999999991111111111111111111111111999999999999999911111111111111111111111111111199999999991111111111111111111111111111999999
    9991111111111111111111111111199999999999999991111111111111111111111111999999999999999999111111111111111111111111111199999999999999911111111111111111111111999999
    9999111199999911111111111111199999999999999991111111111111111111111111999999999999999999999999999999999999911999999999999999999999999999111111111111111111999999
    9999911199999999999999999911199999999999999999199999999111111111111119999999999999999999999999999999999999999999999999999999999999999999999999911111999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991119999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999
    9999999999999999999999999999999999999999999999999999999999999996999999999999999999999999999999999999999999999999999999999999999999999999999116119999999999999999
    9999999999999999999999999999999999999999999999999999999999999911999999999999999999999999999999999999999999999999999999999999999999999999999111169999999999999999
    9999999999999999999999999999999999999999999999999999999999999916999999999999999999999999999999999999999999999999999999999999999999999999991116966999999999999999
    9999999999999999999999999999999999999999999999999999999999999116999999999999999999999999999999999999999999999999999999999999999999999999911166666669999999999999
    9999999999999999999999999999999999999999999999999999999999999161699999999999999999999999999999999999999999999999999999999999999999999999111666967666999999999999
    9999999999999999999999999999999999999999999999999999999999999161199999999999999999999999999999999999999999999999999999999999999999999999611666669766699999999999
    9999999999999999999999999999999999999999999999999999999999991166199999999999999999999999999999999999999999999999999999999999999999999996166666696977966999999999
    9999999999999999999999999999999999999999999999999999999999991666199999999999999999999999999999999999999999991199999999999999999999999917666666699699779669999999
    9999999999999999999999999999999999999999999999999999999999911666199999999999999999999999999999999999999999911169999999999999999999999976666666699969967766699999
    9999999999999999999999999999999999999999999999999999999999916666119999999999999999999999999999999999999999916616999999999999999999999766666666699996996677766999
    9999999999999999999999999999999999999999999999999999999999916666619999999999999999999999999999999999999999166911999999999999999999999766666666669999669966977699
    9999999999999999999999999999999999999999999999999999999999916666611999999999999999999999999999999999999991666991199999999999999999997666666666666999996999699669
    9999999999999999999999999999999999999999999999999999999999916666661699999999999999999999999999999999999661666699119999999999999999976666666666669669999669966966
    9999999999999999999999996199999999999999999999999999999999616666661199999999999999999999999999999999999961669669919999999999999999976666666666669996699996999699
    9999999999999999999999991199999999999999999999999999999999116666669169999999999999999999999999999999999916669969996999999999999999766666666666669999969999699966
    9999999999999999999999911199999999999999999999999999999999166666669966999999999999999999999999999999999116669996999699999999999999766666666666666999996699969996
    9999999999999999999999911119999999999999999999999999999996666666666996699999999999999999999999999999999166666999699666999999999999766666666666666699999969969999
    9999999999999999999999911619999999999999999999999999999996666666666999669999999999999999999999999999996666669699969969699999999996766666666666666969999996696999
    9999999999999999999999966669999999999999999999999999999966666666666999666999999999999999999999999999966666666966996996969999999997666666666666666666999999966699
    9999999999999999999999966666999999999999999999999999999666666666666699966699999999999999999999999999966666669669699699696999999976666666666666666696699999999666
    9999999999999999999999666666699999999999999999999999999666666666666699996699999999999999999999999999666666666996966969969669999776666666666666666669669999999966
    9999999999999999999999666666669999999999999999999999996666666666666669996969999999999999999999999999666666666969669666996696999766666666666666666666966999999999
    9999999999999999999996666666666999999999999999999999996666666666666669999669999999999999999999999996666666666969996696699969666666666666666666666666699669999999
    9999999999999999999996666666667699999999999999999999966666666666666666999666999999999999999999999996666666666996999966666996996666666666666666666666669966699999
    9999999999999999999966666666666776999999999999997799666666666666666666699966679999999999999999999966666666666999699999966666666666666666666666666666666666666666
    9999999999999999999666666666666667769999999977777777776666666666666666666999676999999999999999999966666666666699969999996669966666666666666666666666666666669999
    9999999999999999996666666666666666677666667799999966666666666666666666666669997779669977777799999966666666666699996999999996666666666666666666666666666669969999
    9999999999999999777666666666666666666777776666666666666666666666666666666666666967777766999777999966666666666669999669999996666666666666666666666666666666996999
    9999999999999997666666666666666666666666666666666666666666666666666666666666666666666669666669766666667777777777999996996666666666666666666666666666666666999699
    9999999999999777666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777766666666666666666666666666666666666666666666
    9999999999977966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666776666666666666666666666666666666666666666666
    9999999999796666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9999999997666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9999966677666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    9777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
current_level = 0
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
controller.moveSprite(tom_kom, 89, 0)
info.setLife(3)
startLevel()
game.onUpdate(function () {
    tom_kom.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
        `)
    if (tom_kom.vy < 0) {
        tom_kom.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 4 . . . 
            . . . . . . . . . . . . 4 4 4 . 
            . . . . . . . . . . . . . 4 5 4 
            . . . . . . . . . . . . 4 4 4 4 
            . . . . . . . . 4 4 4 4 4 b 4 . 
            . 4 . . . . 4 4 4 b 4 4 b . . . 
            . 4 4 4 4 4 4 b b 4 4 b 4 . . . 
            . . . . 4 4 b 4 4 4 4 4 4 . . . 
            . . . . 4 b 4 4 . 4 . 4 . . . . 
            . . . 4 4 . 4 4 . 1 . 1 . . . . 
            . . . 4 . . 4 . . . . . . . . . 
            . . . 1 . . 1 . . . . . . . . . 
            `)
    } else if (tom_kom.vy > 0) {
        tom_kom.setImage(img`
            . . . . . . . . . . . . . . . . 
            . 4 . . . . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            . . 4 4 . . . . . . . . . . . . 
            . . . 4 4 . . . . . . . . . . . 
            . . . . 4 4 4 . . . . . . . . . 
            . . . . 4 4 b 4 . . . . . . . . 
            . . . . 4 b 4 b 4 . . . . . . . 
            . . . 4 4 . b 4 b 4 b . . 4 . . 
            . . . 4 . . 4 . 4 b 4 b . 4 4 . 
            . . . 1 . . 1 . b 4 b 4 b 4 5 4 
            . . . . . . . . . b 4 b 4 4 4 4 
            . . . . . . . . . 4 b 4 4 . . . 
            . . . . . . . . . 4 . 4 . . . . 
            . . . . . . . . . 1 . 4 . . . . 
            . . . . . . . . . . . 4 1 . . . 
            `)
    } else if (tom_kom.x % 2 == 0) {
        tom_kom.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
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
            . . . 4 4 . . . . . 4 4 . . . . 
            . . . 4 4 . . . . . 4 4 . . . . 
            . . . 1 1 . . . . . 1 1 . . . . 
            `)
    } else {
    	
    }
    if (tom_kom.vx < 0) {
        tom_kom.image.flipX()
    }
})
