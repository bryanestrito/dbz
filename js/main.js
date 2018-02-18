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
        gokussgod.anchor.setTo(0.5, 1);
        gokussgod.frame = 1;

        gokussgod.animations.add('melee', [17, 18, 19, 20, 21, 22, 23]);
        gokussgod.animations.add('charge', [11, 12, 13]);
        gokussgod.animations.add('range', [38, 39, 40]);

        game.add.existing(gokussgod);

        // vegetassgod = game.add.sprite(x + 50, y, 'vegetassgod', 2);
        // vegetassgod.animations.add('charge', [11, 12, 13]);
        // vegetassgod.animations.play('charge', 15, true);

        // vegetassgod.anchor.setTo(0.5);
        // vegetassgod.scale.setTo(-1, 1);

        //  Register the keys.
        this.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.down = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.melee = game.input.keyboard.addKey(Phaser.Keyboard.U);
        this.range = game.input.keyboard.addKey(Phaser.Keyboard.I);
        this.charge = game.input.keyboard.addKey(Phaser.Keyboard.O);

        // game.add.tween(gokussgod).to({ y: 250 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    },
    update: function () {
        if (this.charge.isDown) {
            gokussgod.animations.play('charge', 15, true);
        } else if (this.melee.isDown) {
            gokussgod.animations.play('melee', 15, true);

            // console.log(gokussgod.frame);

            // gokussgod.frame = 16;

            // if (this.melee.downDuration(100)) {
            //     gokussgod.frame = 17;
            // } else if (this.melee.downDuration(200)) {
            //     gokussgod.frame = 18;
            // } else if (this.melee.downDuration(300)) {
            //     gokussgod.frame = 19;
            // } else if (this.melee.downDuration(400)) {
            //     gokussgod.frame = 20;
            // } else if (this.melee.downDuration(500)) {
            //     gokussgod.frame = 21;
            // } else if (this.melee.downDuration(600)) {
            //     gokussgod.frame = 22;
            // } else if (this.melee.downDuration(700)) {
            //     gokussgod.frame = 23;
            // } else {
            //     gokussgod.frame = 1;
            // }
        } else if (this.range.isDown) {
            gokussgod.animations.play('range', 15, true);
        } else {
            // reset frame
            gokussgod.frame = 1;

            if (this.up.isDown) {
                gokussgod.frame = 1;
                gokussgod.y -= 5;
            } else if (this.down.isDown) {
                gokussgod.frame = 2;
                gokussgod.y += 5;
            }

            if (this.left.isDown) {
                gokussgod.frame = 4;
                gokussgod.x -= 5;
            } else if (this.right.isDown) {
                gokussgod.frame = 3;
                gokussgod.x += 5;
            }
        }

        // if (this.melee.isDown) {
        //     meleeFrameStart = 16;
        //     meleeFrameEnd = 23;

        //     if (this.melee.downDuration(2000)) {
        //         console.log('melee');

        //         if (gokussgod.frame < meleeFrameEnd) {
        //             gokussgod.frame = gokussgod.frame++;
        //         } else {
        //             gokussgod.frame = meleeFrameStart;
        //         }
        //     } else {
        //         gokussgod.frame = meleeFrameStart;
        //     }
        // } else {
        //     gokussgod.frame = 1;
        // }


            
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
