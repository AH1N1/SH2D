//:TODO 1-  obsluz przytrzymanie przycisku ESC- nie powinnotworzyc kolejnych eventow
class Lvl1 extends Phaser.Scene {

    constructor() {
        super({key: 'lvl1'/*, active: true*/});
    }

    init() {

    }

    preload() {
        this.load.image('play', 'resources/assets/play.png');
        this.load.image('someWeapon', 'resources/assets/bomb.png');
    }

    create() {
        //test alpha
        this.a = this.add.image(100, 100, 'play');// = new Phaser.GameObjects.Image(this, 0, -bounds.height / 4, 'btn');//  bounds.y + bounds.height / 8

        //Create keys
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        //Add listeners
        //Resume listener
        this.events.on('resume', function () {
            console.log(this.escKey);
            this.escKey.reset();
        }, this);

        //Keyboard listeners
        this.input.keyboard.on('keydown_ESC', function (key) {
            console.log('esc down');
            this.showMainMenu();
        }, this);


        //Mouse listeners
        //Fire event
        this.input.on('pointerdown', function (pointer) {

            let b = this.matter.add.gameObject(this.player);
            b.setFriction(0,0);
            let speed1 = Phaser.Math.GetSpeed(1000, 1);
            let speed2 = Phaser.Math.GetSpeed(5, 1);
            console.log(this.matter.world.getDelta());
            b.setVelocityX(400/this.matter.world.getDelta());
            // b.setVelocityX(Phaser.Math.GetSpeed(pointer.x-b.x, 1)*speed1);
            // b.setVelocityY(Phaser.Math.GetSpeed(pointer.y-b.y, 1)*speed1);
            // b.setVelocityX(speed1*(pointer.x-b.x)/*/Math.abs((pointer.y-b.y))*/,1);
            // b.setVelocityY(speed1*(pointer.y-b.y)/*/Math.abs((pointer.x-b.x))*/,1);
            b.done=true;

            // this.player.fire();


        },this);

        //TODO: podswietlanie dostepnych obiektow
        this.input.on('gameobjectmove', function (pointer, gameObject) {
            console.log('on object');
            gameObject.setTint(Math.random() * 16000000);

        });

        //Create player
        this.player = new Person(this, 30, 500, 'someWeapon');
        this.add.existing(this.player);
        // this.matter.add.gameObject(this.player);



        //Create weapons
        let wc = [{
            ammoType: CONSTANTS.SOME_AMMO,
            ammoAmount: 7,
            key: 'someWeapon',
            interactive: true,
            x: 50,
            y: 500
        }];
        this.createWeapons(wc);

        //Create bullets
        let bc = [{
            bulletType: CONSTANTS.BULLET_SINGLE,
            bulletsToCreate: 10,
            x: 0,
            y: 0,
            key: 'someWeapon'
        }];
        this.createBullets(bc);
    }

    update(time, delta) {
        //test alpha
        this.a.x += 1;
    }

    showMainMenu() {
        this.scene.run('menu', this);
    }

    computeDistance(person, object) {
        return Phaser.Math.Distance.Between(person.x, person.y, object.x, object.y);
    }

    createBullets(bulletsConfigs) {
        this.bullets = this.add.group(); //Dodaje grupe
        bulletsConfigs.forEach(function (bc, index) {  // tworzy kule wedlug configow
            for (let i = 0; i <= bc.bulletsToCreate; i++) {
                let bullet = new SomeBullet(this, bc);
                //ew set visible/active
                this.bullets.add(bullet); //ew (bullet, true) gdzie true dodaje tez do sceny
            }
        }, this);

    }


    /**
     * Dodaje grupę this.weapons
     * Iteruje po tablicy konfigów i dla każdego z nich tworzy obiekt SomeWeapon na podstawie configu
     * Dodaje listener do kazdego stworzonego obiektu, który w momencie naciśnięcia PPM w odleglości <=20px od gracza, wykonuje SomeWeapon.pickUp()
     * Dodaje do grupy stworzony obiekt
     * */
    createWeapons(weaponsConfigs) {
        this.weapons = this.add.group(); //Dodaje grupe
        weaponsConfigs.forEach(function (wc, index) {  // tworzy bronie wedlug configow
            let weapon = new SomeWeapon(this, wc);
            weapon.on('pointerdown', function (event) { //dodaje listener podnoszenia broni
                if (event.rightButtonDown() && this.computeDistance(this.player, weapon) <= 20) {
                    weapon.pickUp(this.player);
                }
            }, this);
            this.weapons.add(weapon, true);
        }, this);
    }
}