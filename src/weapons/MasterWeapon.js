class MasterWeapon extends Phaser.GameObjects.Sprite {
    constructor(config) {
        //Konstruktor , oraz przypisanie sceny i ciala
        super(config.scene.scene, config.scene.x, config.scene.y, config.scene.key);

        this.scene = config.scene.scene;
        this.scene.add.existing(this);
        this.scene.matter.add.gameObject(this); //TODO: usun cialo - niepotrzebne
        console.log(config);
        this.setInteractive();
        this.on('clicked', this.handleClickedEvent, this);


        //Set weapon type
        //this.type = config.weapon.type; //juz chyba niepotrzebne

        //Set weapon availability
        this.canShot = config.weapon.canshot;
        this.isReady = config.weapon.isready;
        this.toPickUp = config.weapon.topickup;

        //Set weapon owner
        // this.ownedByPlayer:

        //Set ammunition
        this.ammo = {
            amount: config.ammo.amount,
            type: config.ammo.type
        };

        //test bullet
        this.pb = new PistolBullet(this.scene);

        // //Set speed
        // this.speed = {
        //     stopSpeed: Phaser.Math.GetSpeed(config.time.stopspeed.distance, config.time.stopspeed.time),
        //     startSpeed: Phaser.Math.GetSpeed(config.time.startspeed.distance, config.time.startspeed.time)
        // };
    };

    handleClickedEvent() {
        //TODO: obsluz lepiej- czy niszczyc cialo? czy moze tylko ukrywac?
        console.log('handle clicked event on weapon');
        this.scene.player.weapon.weapon = this;
        console.log(this);
        console.log(this.scene.player.weapon.weapon);
        this.setVisible(false);
        //this.body.destroy();


    }

    fire() {
        //test twoerzenia bullet
        //this.pb.

        if (this.canShot && this.isReady) {
            if (this.ammo.amount <= 0) {
                this.canShot = false;
                console.log('out of ammo');
                return;
            }
            //TODO: dodaj obsluge tworzenia pocisku, zmien this.ready na false
            this.pb.fire()
            console.log('fired');
            this.ammo.amount -= 1;
        }
    }
}