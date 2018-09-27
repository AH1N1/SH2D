{
    game:{
        scenes:[{
            graphics: [textures],
            sounds: [],
            obstacles: [],
            enemies: [{
                animations:{},
                weapon
            }],
            weapons: [{
                type,
                bullets: {
                    type,
                    amount},
                isReady,
                toPickUp,
                texture
            }],
            bullets: [{
                type,
                source:{
                    x,
                    y
                },
                destination:{
                    x,
                    y
                },
                texture
            }],
            player: {
                animations:{},
                weapon,
                position
            }

        }]

    }

}