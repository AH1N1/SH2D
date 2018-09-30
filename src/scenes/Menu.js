/**
 * ZALOZENIA:
 * -ma przykrywac inne sceny
 * -ma zbierac caly input (domyslnie tak sie dzieje)
 * -ma przyciski umozliwiajace:
 *  rozpoczecie lub wznowienie gry
 *  wybor poziomu
 * -musi wiedziec czy trwa juz jakas gra
 * -na podstawie tego czy gra trwa czy nie decyduje ktory przycisk (play/continue) wyswietlic
 * -musi informowac scene pod soba zeby wznowila dzialanie w momenie wyjscia
 * -przyjmuje input na przyciskach
 * -reaguje na esc - ma event listener, kazda scena slucha esc i emituje event pokazujacy ta scene
 * -po uslyszeniu eventu, pauzuje scene ktora wywolala event, a siebie sama przesuwa na wierzch (ew aktywuje sama siebie, lub scena ktora emituje musi ja aktywowac)
 * -po ponownym nacisnieciu esc lub continue przerzuca siebie na spod, (ew deaktywuje) a scene z gra aktywuje
 * -wyszarza ponizsza scene
 */
class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'menu', active: false});
        this.prevScene = null;
    }

    preload() {
        //wczytaj assety do przyciskow
        this.load.image('play', 'resources/assets/play.png');
        this.load.image('resume', 'resources/assets/star.png');
        this.load.image('levels', 'resources/assets/bomb.png');
        this.load.image('btn', 'resources/assets/btn.png');
    }

    init(scene) {
        console.log('menu init');
        this.prevScene = scene;
        console.log(this.prevScene);
        console.log(this.scene.isSleeping('lvl1'));
        console.log(this.scene.isVisible('lvl1'));
        console.log(this.scene.isActive('lvl1'));
    }

    create() {
        console.log('menu create');
        console.log(this.prevScene);
        console.log(this.scene.isSleeping('lvl1'));
        console.log(this.scene.isVisible('lvl1'));
        console.log(this.scene.isActive('lvl1'));
        //------dodaj przyciski
        // //Set scale value that all object will be scaled by
        // let scale= 1;

        //Set background
        let camera = this.cameras.main;
        let ctrX = camera.width / 2;
        let ctrY = camera.height / 2;

        let bgHeight = camera.height - 100;
        let bgWidth = bgHeight / 2;

        this.container = this.add.container(ctrX, ctrY);
        this.bg = this.add.rectangle(0, 0, bgWidth, bgHeight, 0xffa366);
        this.container.add(this.bg);
        let bounds = this.container.getBounds();
        this.bg.setActive(); //tmp

        //Create buttons :TODO ustal rozmieszczenie y
        let scale = 0.5;

        //Play / Continue
        this.play = new Phaser.GameObjects.Image(this, 0, -bounds.height / 4, 'btn');//  bounds.y + bounds.height / 8
        this.play.setScale(scale);
        this.play.setInteractive();
        this.container.add(this.play);

        console.log(this.container.getBounds());

        //Set level
        this.levels = new Phaser.GameObjects.Image(this, 0, -bounds.height / 8, 'btn'); //bounds.y + (bounds.height / 8) * 3
        this.levels.setScale(scale);
        this.levels.setInteractive();
        this.container.add(this.levels);

        //Set options
        this.options = new Phaser.GameObjects.Image(this, 0, (bounds.height / 8), 'btn');
        this.options.setScale(scale);
        this.options.setInteractive();
        this.container.add(this.options);

        //Set options
        this.exit = new Phaser.GameObjects.Image(this, 0, (bounds.height / 4), 'btn');
        this.exit.setScale(scale);
        this.exit.setInteractive();
        this.container.add(this.exit);

        //console.log(this.children);

        //Add listeners

        this.input.keyboard.on('keyup_ESC', function (key) {
            console.log('esc up in menu');
            console.log(key);
            // this.showMainMenu();
        }, this);

        this.input.keyboard.on('keydown_ESC', function (key) {
            console.log('esc down in menu');
            this.resumeScene();
        }, this);

        //Add buttons listeners
        //Play listener
        this.play.on('pointerdown', function () { //(pointer, x, y, gameObject)
            if (this.prevScene != null) {
                console.log('resume');
                this.resumeScene();
            } else {
                console.log('play new game');
                this.scene.run('lvl1');
                // console.log('play clicked');
                // this.scene.transition({
                //     target: 'lvl1',
                //     moveBelow: true,
                //     duration: 70
                // });
            }
        }, this);

        //Levels listener
        this.levels.on('pointerdown', function (pointer, x, y, gameObject) {
            console.log('levels');
        }, this);

        //Options listener
        this.options.on('pointerdown', function (pointer, x, y, gameObject) {
            console.log('options');

        }, this);

        //Exit listener
        this.exit.on('pointerdown', function (pointer, x, y, gameObject) {
            console.log('exit');

        }, this);
        // this.input.on('gameobjectdown',function (pointer, gameObject){
        //     console.log(pointer);
        //     // console.log(x);
        //     // console.log(y);
        //     console.log(gameObject);
        //
        //
        //     if(gameObject===this.resume){console.log('resume')}
        //     else{console.log('other')}
        // },this);


        //nie this a ta kltora wywolywala event
        // this.cameras.main.setAlpha(0.5);


        // let play = this.add.image(x, y,'play');
        // this.play.setAlpha(3);
        // this.play.setScale(0.25);
        //dodaj clickhandlery
        //dodaj
        // this.resume.setActive(true);
        // this.play.setActive(true);
        this.container.setScale(0);
        this.tweens.add({
            targets: this.container,
            scaleX: 1,
            scaleY: 1,
            duration: 70
        });
    }

    update(time, delta) {
        // console.log(this.gameIsRunning);
        // if (this.gameIsRunning) {
        //     this.resume.setVisible(true);
        //     this.play.setVisible(false);
        // }else{
        //     // console.log("in else");
        //     //this.
        //     this.resume.setVisible(false);
        //     this.play.setVisible(true);
        //    // this.play.refresh();
        // }

    }

    resumeScene() {
        //this.resumePrevScene(null,null, this);

        // this.scene.stop();
        // console.log(this);
        // console.log('menu paused');
        // this.scene.resume(this.prevScene);
        // console.log('menu runs lvl1');// this.input.emit('keyup_ESC',this.prevScene);

        this.tweens.add({
            targets: this.container,
            scaleX: 0,
            scaleY: 0,
            duration: 70,
            onComplete: this.resumePrevScene,
            onCompleteParams: [ this ]
        });
    }

    resumePrevScene(tween, target, thisScene) {
        thisScene.scene.pause();
        console.log(thisScene);
        console.log('menu paused');
        thisScene.scene.run(thisScene.prevScene);
        //thisScene.scene.setActive(true,)=true;
        console.log('menu runs lvl1');
        console.log(thisScene.scene.isSleeping('lvl1'));
        console.log(thisScene.scene.isVisible('lvl1'));
        console.log(thisScene.scene.isActive('lvl1'));
    }
}