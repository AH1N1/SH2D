


//:TODO 1-  obsluz przytrzymanie przycisku ESC- nie powinnotworzyc kolejnych eventow
class Lvl1 extends Phaser.Scene {

    constructor() {
        super({key: 'lvl1'/*, active: true*/});
    }

    init(){

    }

    preload(){
        this.load.image('play', 'resources/assets/play.png');
        this.load.image('someWeapon', 'resources/assets/bomb.png');
    }

    create() {
        //test alpha
        this.a = this.add.image(100,100,'play');// = new Phaser.GameObjects.Image(this, 0, -bounds.height / 4, 'btn');//  bounds.y + bounds.height / 8

        //Create keys
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        //Add listeners
        //Resume listener
        this.events.on('resume', function () {
            console.log(this.escKey);
            this.escKey.reset();
        },this);

        //Keyboard listeners
        this.input.keyboard.on('keydown_ESC', function (key) {
            console.log('esc down');
            this.showMainMenu();
        }, this);

        //Create weapons
        this.createWeapons();
    }

    update(time, delta) {
        //test alpha
        this.a.x+=1;
    }
    showMainMenu() {
        this.scene.run('menu', this);
    }
    //TODO: przyjmowac config z wymienionymi bronmi, oraz configiem dla kazdej z nich. config broni przekazywc do konstruktorow
    createWeapons() {
        this.weapons = this.add.group();
        this.weapons.add(new SomeWeapon(this), true);
        console.log(this.weapons);

    }
}