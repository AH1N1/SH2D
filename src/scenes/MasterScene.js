class MasterScene extends Phaser.Scene {
    constructor(key) {
        super({key: key});


    };

    create() {
        //Create keys for movement
        this.keys = {
            KEY_W: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            KEY_S: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            KEY_A: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            KEY_D: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };

        //Disable context menu
        this.input.mouse.disableContextMenu();

        //Add mouse keys events
        this.input.on("pointerdown", function (pointer) {
            if (pointer.leftButtonDown()) {
                this.player.leftClickAction();
                //Player.prototype.leftClickAction();
            }
            if (pointer.rightButtonDown()) {
                console.log("right");
                console.log(pointer);
                this.player.rightClickAction();
            }
        }, this);

        //Create global time variables
        this.time = {
            isRunning: false,
            startspeed: 0, // TODO: defaultowo 0. ew do zmiany lub usuniecia
            stopspeed: 0
        };

        //Create player
        var playerConfig = {
            scene: {
                scene: this,
                key: 'player',
                x: 125,
                y: 100
            },
            time: {
                stopspeed: {
                    distance: 5,
                    time: 1
                },
                startspeed: {
                    distance: 50,
                    time: 1
                }
            },
            weapon: {
                hasweapon: true,
                weapon: new MasterWeapon({
                    scene: {
                        scene: this,
                        key: 'bomb',
                        x: 125,
                        y: 100
                    },
                    weapon: {
                        type: 'gun',
                        canshot: true,
                        isready:true,
                        topickup:true
                    },
                    ammo: {
                        amount: 10,
                        type: 'pistolAmmo'
                    }
                })
            }
        };
        this.player = new Player(playerConfig);
        this.player.setBody({
            type: 'circle',
            radius: 10
        });

        //Add event handler for all clicked objects
        this.input.on('gameobjectdown', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);

        //Add debug text
        dbgtext = this.add.text(50, 550);
        log = function (text) {
            dbgtext.setText("debug: " + text);
        }
    }

    update(time, delta) {
        //Musi byc jako pierwsze bo zmienia aktualny profil czasu
        this.servePlayerMovement(delta);
    }

    //Obsluga ruchu gracza- jesli jakis klawisz jest wcisniety, this.time.isRunning = true
    servePlayerMovement(delta) {
        //Set speed type
        this.time.isRunning = false;
        //Up and down
        if (this.keys.KEY_W.isDown && this.keys.KEY_S.isDown) {
            this.player.stopY();
        } else if (this.keys.KEY_W.isDown) {
            this.player.moveUp(delta);
            this.time.isRunning = true;
        }
        else if (this.keys.KEY_S.isDown) {
            this.player.moveDown(delta);
            this.time.isRunning = true;
        } else {
            this.player.stopY();
        }

        //Left and right
        if (this.keys.KEY_A.isDown && this.keys.KEY_D.isDown) {
            this.player.stopX();
        } else if (this.keys.KEY_A.isDown) {
            this.player.moveLeft(delta);
            this.time.isRunning = true;
        }
        else if (this.keys.KEY_D.isDown) {
            this.player.moveRight(delta);
            this.time.isRunning = true;
        } else {
            this.player.stopX();
        }

        //test
        if (this.time.isRunning) log("running");
        else log("not running");
    }
}