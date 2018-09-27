class Bullet extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('player');
        this.setPosition(x, y);

    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        this.rotation += 0.01;
    }

    update(){
        console.log("updated bullet")
    }

}





// var Bullet = function (game, key) {
//
//     Phaser.GameObjects.Sprite.call(this, game, 0, 0, key);
//
//     this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
//
//     this.anchor.set(0.5);
//
//     this.checkWorldBounds = true;
//     this.outOfBoundsKill = true;
//     this.exists = false;
//
//     this.tracking = false;
//     this.scaleSpeed = 0;
//
// };
//
// Bullet.prototype = Object.create(Phaser.GameObjects.Sprite.prototype);
// Bullet.prototype.constructor = Bullet;
//
// Bullet.prototype.fire = function (x, y, angle, speed, gx, gy) {
//
//     gx = gx || 0;
//     gy = gy || 0;
//
//     this.reset(x, y);
//     this.scale.set(1);
//
//     this.game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);
//
//     this.angle = angle;
//
//     this.body.gravity.set(gx, gy);
//
// };
//
// Bullet.prototype.update = function () {
//
//     if (this.tracking)
//     {
//         this.rotation = Math.atan2(this.body.velocity.y, this.body.velocity.x);
//     }
//
//     if (this.scaleSpeed > 0)
//     {
//         this.scale.x += this.scaleSpeed;
//         this.scale.y += this.scaleSpeed;
//     }
//
// };