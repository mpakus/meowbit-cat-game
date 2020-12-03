def on_overlap_tile(sprite, location):
    game.over(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile3, on_overlap_tile)

def on_a_pressed():
    if tom_kom.vy == 0:
        tom_kom.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite, location):
    game.over(True, effects.star_field)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile5, on_overlap_tile2)

tom_kom: Sprite = None
scene.set_background_color(9)
tom_kom = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(tom_kom, 100, 0)
tiles.set_tilemap(tilemap("""
    level_0
"""))
tom_kom.ay = 350
scene.camera_follow_sprite(tom_kom)