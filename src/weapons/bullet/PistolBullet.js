class PistolBullet extends MasterBullet {

    constructor(scene) {
        //ES6- przypisanie sceny - tworzy obiekt o nazwie 'scene' i wartosci parametru scene
         const config = {
            scene:{
                scene,
                x:50,
                y:50,
                key:'bullet'
            },
        };
        super(config);
        this.scene = config.scene.scene;
        //Ponizsze niepotrzebne -dodajemy do sceny dopiero przy momencie wystrzalu
        // this.scene.add.existing(this);
        // this.scene.matter.add.gameObject(this);

        //Dodaj kierunek w ktorym bedzie wystrzelona
        this.direction={
            x:null,
            y:null
        };

        // this.speed=


    }
    fire(config){
        //Set creation point
        this.setPosition(config.source.x, this.source.y);


        //Add to scene
        this.setActive(true);
        this.setVisible(true);

    }


    update(time, delta){
        //test poruszania :TODO : dodaj poruszanie na zasadzie predkosc w kierunku w ktorym byla mysz podczas wystrzalu
        this.y -= this.speed * delta;

    }
    // preUpdate(time, delta) {
    //     super.preUpdate(time, delta);
    //
    //     this.rotation += 0.01;
    // }
    //
    // update() {
    //     console.log("updated bullet")
    // }

}