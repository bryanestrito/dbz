var game = new Phaser.Game(640, 480, Phaser.AUTO, null, 'game');

var sample = {
    preload: function () {
        game.load.image('background', 'assets/game/background3.jpg');
        game.load.atlasJSONHash('gokussgod', 'assets/characters/gokussgod/gokussgod.png', 'assets/characters/gokussgod/gokussgod.json');
        game.load.atlasJSONHash('vegetassgod', 'assets/characters/vegetassgod/vegetassgod.png', 'assets/characters/vegetassgod/vegetassgod.json');
    },
    create: function () {
        game.add.image(0, 0, 'background');

        x = game.world.centerX;
        y = game.world.centerY;

        gokussgod = game.add.sprite(x - 50, y, 'gokussgod');
        gokussgod.frame = 3;

        game.add.existing(gokussgod);

        // vegetassgod = game.add.sprite(x + 50, y, 'vegetassgod', 2);

        // gokussgod.animations.add('charge', [11, 12, 13]);

        // vegetassgod.animations.add('charge', [11, 12, 13]);
        // vegetassgod.animations.play('charge', 15, true);

        // gokussgod.anchor.setTo(0.5);
        // vegetassgod.anchor.setTo(0.5);
        // vegetassgod.scale.setTo(-1, 1);
    },
    update: function () {
        // if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        //     gokussgod.x -= 4;
        // } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        //     gokussgod.x += 4;
        // }

        // if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        //     gokussgod.y -= 4;
        // } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        //     gokussgod.y += 4;
        // }

        // if (game.input.keyboard.isDown(Phaser.Keyboard.U)) {
        //     gokussgod.animations.play('charge', 15, true);
        // }
    }
};

// add the game state
game.state.add('sample', sample);

//call the boot state
game.state.start('sample');
