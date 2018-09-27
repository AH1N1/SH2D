class Pistol extends MasterWeapon{


    constructor(config) {
        const ownConfig = {
            scene:{
                scene:config.scene.scene,
                x:50,
                y:50,
                key:'bullet'
            },
        };
        super(config);

    }
}