var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'matter',
        matter: {
            gravity:{ x:0, y:0 },
            debug: true
        }
    },
    scene: [Scene2],
    disableContextMenu:true,
    backgroundColor:'#516b46',
    title:'SH2D'

};