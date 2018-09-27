var addKeys = function(scene){
    scene.keys={};
    scene.keys.KEY_W = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    scene.keys.KEY_S = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    scene.keys.KEY_A= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    scene.keys.KEY_D = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
};

var addMouseListener = function(scene){
    scene.input.on("pointerdown", function (pointer) {
        if (pointer.leftButtonDown()) console.log("left");
        if (pointer.rightButtonDown()) console.log("right");
    });
};

var disableContextMenu = function(scene){
    scene.input.mouse.disableContextMenu();
};