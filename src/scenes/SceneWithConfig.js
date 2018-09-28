const scene2Config = {
    scene: {
        key: 'Scene2',

    },
    playes: {},
    weapons: {},
    enemies: {},
    assets: {
        image: [{
            key: 'bomb',
            url: 'resources/assets/bomb.png'
        }, {
            key: 'player',
            url: 'resources/assets/star.png'
        },{
            key: 'bullet',
            url: 'resources/assets/bullet.png'
        }],
        animations: []
    }

};

class SceneWithConfig extends MasterScene{
    constructor(){
        super(scene2Config)
    }
}