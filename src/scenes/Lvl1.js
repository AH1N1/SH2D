class Lvl1 extends Phaser.Scene {

    constructor() {
        super({key: 'lvl1', active: true});
        console.log('lvl1 constructed');
    }

    init(){
        console.log('lvl1 init');
    }

    create() {
        console.log('lvl1 created');

        //Create keys
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        console.log(this.escKey);

        //On resume listener test
        this.events.on('resume', function () {
            console.log('lvl1 resumed');
            console.log(this.escKey);
            this.escKey.reset();
        },this);

        this.events.on('start', function () {
            console.log('lvl1 started');
            this.escKey.reset();
        },this);

        //Add listeners
        this.input.keyboard.on('keydown_ESC', function (key) {
            console.log('esc down');
            // this.input.emit('keyup_ESC', this);
            this.showMainMenu();
        }, this);

        this.input.keyboard.on('keyup_ESC', function (event) {
            console.log('lvl1 esc up');
            // this.showMainMenu();
        }, this);
    }

    update(time, delta) {
        //Escape key event to call menu
        //this.handleEsc();
        console.log(this.escKey.isDown);


    }
    showMainMenu() {
        console.log('show menu');
        this.scene.run('menu', this);
        this.scene.pause(); // ew przenies pauzowanie do menu

    }
}