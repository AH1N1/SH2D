class Player extends Phaser.GameObjects.Sprite {
    constructor(config) {
        //Konstruktor , oraz przypisanie sceny i ciala
        super(config.scene.scene, config.scene.x, config.scene.y, config.scene.key);
        this.scene = config.scene.scene;
        this.scene.add.existing(this);
        this.scene.matter.add.gameObject(this);
        console.log(config);

        //Set speed
        this.speed = {
            stopSpeed: Phaser.Math.GetSpeed(config.time.stopspeed.distance, config.time.stopspeed.time),
            startSpeed: Phaser.Math.GetSpeed(config.time.startspeed.distance, config.time.startspeed.time)
        };

        //Set weapon
        this.weapon = {
            hasWeapon: config.weapon.hasweapon,
            //weapon: config.weapon.weapon // TODO: pobranie broni z configu- tymczasowo deklarowana z palca
            weapon: new Pistol({
                scene: {
                    scene: this.scene,
                    x: null,
                    y: null,
                    key: 'pistol'
                },
                weapon:{}
            })


        };

        //event test
        this.setInteractive();
        this.on('clicked', function () {
            console.log('player clicked')
        }, this);

        console.log(this.weapon.weapon);

        //toJSON test
        console.log('player to json');
        console.log(this.toJSON());
        //console.log(this.toJSON());
    };


    //Mouse events
    leftClickAction() {
        if (this.weapon.hasWeapon) {
            this.weapon.weapon.fire();
        }
        console.log('left click action');
    }

    rightClickAction() {
        console.log('right click action');
    }

    //Movement
    moveRight(delta) {
        this.setVelocityX(this.speed.startSpeed * delta);
    }

    moveLeft(delta) {
        this.setVelocityX(this.speed.startSpeed * delta * -1);
    }

    moveUp(delta) {
        this.setVelocityY(this.speed.startSpeed * delta * -1);
    }

    moveDown(delta) {
        this.setVelocityY(this.speed.startSpeed * delta);
    }

    stopY() {
        this.setVelocityY(0);
    }

    stopX() {
        this.setVelocityX(0);
    }
}