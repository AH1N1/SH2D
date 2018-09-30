var addField = function (scene) {
    scene.newField = 'nowePole';
};


//in sceneA
this.input.keyboard.on('keydown_ESC', function () {
    console.log('key down in sceneA');
    this.scene.pause();
    this.scene.run('sceneB');
}, this);

this.input.keyboard.on('keyup_ESC', function () {
    console.log('key up in sceneA');
    this.scene.pause();
    this.scene.run('sceneA');
}, this);

//in sceneB
//handles keyup event
this.input.keyboard.on('keydown_ESC', function () {
    console.log('key down in sceneB');
}, this);

this.input.keyboard.on('keyup_ESC', function () {
    console.log('key up in sceneB');
    this.scene.pause();
    this.scene.run('sceneA');
}, this);
