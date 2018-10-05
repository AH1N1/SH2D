class SomeBullet extends Phaser.GameObjects.Sprite{

    constructor(scene, config){
        super(scene, config.x,config.y,config.key);
        this.bulletType=config.bulletType;
    }

    fire(velocityX, velocityY, target){
        this.target=target;
        //TODO: set velocity
    }
}