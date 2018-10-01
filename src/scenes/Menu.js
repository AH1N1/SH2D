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

//:TODO 1-  obsluz przytrzymanie przycisku ESC- nie powinnotworzyc kolejnych eventow
class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'menu'/*, active: false*/});
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
        if (Object.keys(scene).length) {
            this.scene.pause(scene);
            scene.cameras.main.setAlpha(0.5);
            this.prevScene = scene;
        } else {
            this.prevScene = null;
        }
        this.scene.bringToTop();
    }

    create() {
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
        //this.bg.setActive(); //tmp

        //Create buttons :TODO ustal rozmieszczenie y
        let scale = 0.5;

        //Play / Continue
        this.play = new Phaser.GameObjects.Image(this, 0, -bounds.height / 4, 'btn');//  bounds.y + bounds.height / 8
        this.play.setScale(scale);
        this.play.setInteractive();
        this.container.add(this.play);
        let text;
        if(this.prevScene==null){text='PLAY'} else {text='CONTINUE'}
        let startText = new Phaser.GameObjects.Text(this, -this.play.getBounds().width/2, -bounds.height / 4, text, { fontSize: '32px', fill: '#000' });
        this.container.add(startText);

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

        //Add listeners

        //Keyboard listeners
        this.input.keyboard.on('keydown_ESC', function () {
            if (this.prevScene != null) {
                this.resumeScene();
            }
        }, this);

        //Buttons listeners
        //Play listener
        this.play.on('pointerdown', function () { //(pointer, x, y, gameObject)
            if (this.prevScene != null) {
                this.resumeScene();
            } else {
                this.startScene('lvl1');
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

        //Menu opening animation
        this.container.setScale(0);
        this.tweens.add({
            targets: this.container,
            scaleX: 1,
            scaleY: 1,
            duration: 70
        });
    }

    update(time, delta) {

    }

    resumeScene() {
        this.tweens.add({
            targets: this.container,
            scaleX: 0,
            scaleY: 0,
            duration: 70,
            onComplete: function(tween, target, thisScene) {
                thisScene.prevScene.cameras.main.setAlpha(1);
                thisScene.scene.resume(thisScene.prevScene);
                thisScene.scene.stop();
            },
            onCompleteParams: [this]
        });
    }

    startScene(scene){
        this.scene.start(scene);
    }

}