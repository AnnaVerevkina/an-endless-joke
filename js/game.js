import mainScene from "./scenes/mainScene.js";


// const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
//     preload: preload,
//     create: create,
//     update: update
//   })

// let platforms
// let player  

// function preload() {
//     game.load.image('sky','content/sky.png')
//     game.load.image('ground', 'content/platform.png')
//     game.load.spritesheet('woof','content/woof.png', 32, 32)
// }

// function create() {
//     game.physics.startSystem(Phaser.Physics.ARCADE);

//     game.add.sprite(0, 0, 'sky');// добавляем слой неба

//     platforms = game.add.group();
//     platforms.enableBody = true;

//     let ground = platforms.create(0, game.world.height - 64, 'ground');
//     ground.scale.setTo(2,2);
//     ground.body.immovable = true //чтобы не падало никуда...

//     let legte = platforms.create(400, 450, 'ground');
//     legte.body.immovable = true;

//     legte = platforms.create(-75, 350, 'ground');
//     legte.body.immovable = true;

//     player = game.add.sprite(32, game.world.height - 150, 'woof')
//     game.physics.enable(player);
//     player.body.bounce.y  = 0.2;
//     player.body.gravity.y = 800;

//     player.body.collideWorldBounds = true;

//     player.animations.add('left', [0, 1], 10, true)
//     player.animations.add('right', [2, 3], 10, true)

// }

// function update() {
//     game.physics.arcade.collide(player, platforms);

//     player.body.velocity.x = 0

//     // if (cusrsor.left.isDown) {
//     //     player.body.velocity.x = -150
//     //     player.animations.play('left')
//     //   } else if (cusrsor.right.isDown) {
//     //     player.body.velocity.x = 150
//     //     player.animations.play('right')
//     //   } else {
//     //     // If no movement keys are pressed, stop the player
//     //     player.animations.stop()
//     //   }
// }



const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  physics:{
    default: 'arcade',
    arcade: {
      gravity: 300,
      debug: true, 
    }
  },
  scene: [mainScene]
}

new Phaser.Game(config);