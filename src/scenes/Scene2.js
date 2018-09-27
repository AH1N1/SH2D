class Scene2 extends MasterScene{
    constructor() {
        //TODO: czy config powinien byc przekazywany z zewnatrz czy definiowany tu
        const config={};


        super('Scene2');
    }

    preload() {
        super.preload();
    }

    create() {
        //Obowiazkowe zeby dzialalo dziedziczenie
        super.create();

        console.log(this.player);


        this.star = this.matter.add.image(100, 100, 'player');
        this.star.setBody({
            type: 'circle',
            radius: 10
        });

        console.log(this.keys.KEY_A);
        //pierwsze this to scena, 2 this to cialo funkcji, 3 this przekazuje scene, tak zeby to ona a nie cialo funkcji bylo tym 2 this
        this.input.keyboard.on('keyup_J', function () {
            this.star.setVelocityX(100);
        }, this);

        this.input.keyboard.on('keyup_F', function () {
            this.player.setVelocityX(100);
        }, this);

        this.input.keyboard.on('keyup_N', function () {
            this.scene.start('Scene1');
        }, this);


        //speed tests
        this.speed1 = Phaser.Math.GetSpeed(1200, 6);
        this.speed2 = Phaser.Math.GetSpeed(600, 3);
        this.input.keyboard.on('keyup_T', function (time, delta) {
            this.player.x += this.speed1 * delta;
        }, this);
        this.input.keyboard.on('keyup_Y', function (time, delta) {
            this.player.x += this.speed2 * delta;
            console.log(this.speed2 * delta);
        }, this);
    }

    update(time, delta) {
        //Musi byc jako pierwsze bo dziedziczenie
        super.update(time,delta);

    }



}