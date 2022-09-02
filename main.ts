scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function create_whole_game () {
    if (current_level == 0) {
        game.splash("starter")
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(DUCK, sprites.dungeon.stairLarge)
    } else if (current_level == 1) {
        game.splash("spiral")
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(DUCK, sprites.dungeon.stairLarge)
    } else if (current_level == 2) {
        game.splash("the bush")
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(DUCK, sprites.castle.tilePath6)
    } else if (current_level == 3) {
        game.splash("mirrored wave")
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnRandomTile(DUCK, sprites.castle.tilePath6)
    } else if (current_level == 4) {
        game.splash("multi way")
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(DUCK, sprites.castle.shrub)
    } else if (current_level == 5) {
        game.splash("hidden worlds")
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(DUCK, sprites.castle.shrub)
    } else if (current_level == 6) {
        game.splash("deep seas")
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(DUCK, sprites.builtin.oceanSand6)
    } else if (current_level == 7) {
        game.splash("the bridge")
        tiles.setCurrentTilemap(tilemap`level9`)
        tiles.placeOnRandomTile(DUCK, sprites.dungeon.stairLarge)
    } else {
        game.over(true)
    }
}
function make_enemies () {
    for (let index = 0; index < 30; index++) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 100, 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tileDarkGrass1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock2, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.builtin.brick)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    current_level += 1
    create_whole_game()
})
let projectile: Sprite = null
let current_level = 0
let DUCK: Sprite = null
game.setDialogFrame(img`
    ..bbabbaabbaabbaabbbbb..
    .bddbaddbaddbaddbabbddb.
    addddbaddbaddbaddbadddda
    addddbbaabbaabbaabbdddda
    abddb11111111111111bddba
    bbab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111babb
    abddb11111111111111bddba
    addddbbaabbaabbaabbdddda
    addddabddabddabddabdddda
    .addbbabddabddabddabdda.
    ..aaabbaabbaabbaabbaaa..
    `)
game.showLongText("hello you will be playing in ?? mazes", DialogLayout.Center)
info.setLife(3)
DUCK = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(DUCK)
scene.cameraFollowSprite(DUCK)
current_level = 0
create_whole_game()
