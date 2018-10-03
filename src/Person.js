class Person extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key)
    }

    //Ustawia info o amunicji
    setAmmo(ammoType, ammoLeft) {
        this.ammo = new SomeAmmo(ammoType); // tworzy obiekt SomeAmmo ktory dla danego typu amunicji stworzy inna metode fire()
        this.ammoLeft = ammoLeft;
        console.log('ammo set: left-' + this.ammoLeft + ', type-' + this.ammoType);
    }

    //jesli ma pociski to:
    //      pobiera informacje z this.ammoType o:
    //          - ilosci kul jakie trzeba bedzie wystrzelic
    //          - sposobie wystrzelenia(pojedynczy, full, seria, na boki)
    //          - typie kuli ktorej powyzsza ilosc zostanie pobrana z grupy kul(pojedyncza, okragla jak od shotguna, shuriken)
    //      scena przechowuje grupe kul(zwykly sprite z body) z czego kazda ma dany typ. typ kuli decyduje JEDYNIE o jej wygladzie
    //      ze grupy kul po kolei beddzie brana odpowiednia ilosc, takich ktore nie maja statusu fired(albo ciala bo moze po tym beda rozpozanwane)
    //      w zaleznosci od wybranego sposobu strzelania, pobrane kule beda mialy ustawiany znacznik isFired, oraz dostana cialo, po czym dostana
    //             jakas predkosc w okreslonych kierunkach
    //      metoda fire bedzie miala jakies switcha dla kazdego sposobu wystrzelenia i tam beda obslugiwane wystrzaly
    //          -
    //          -
    //          -
    //          -
    //
    fire(scene, group, directions) {
        //tmp inside function
        let bulletsAmount = 1;
        let fireType = CONSTANTS.BULLET_SINGLE;

        if (this.ammoLeft > 0) {
            this.ammo.fire(scene, ); //bierze obiekt SomeAmmo i wywoluje jego metode fire()
            // if(fireType==CONSTANTS.BULLET_SINGLE){
            //     //single wiec pobiera tylko jedna kule
            //     // let bullet =  group.find    znajdz kule
            //     bullet.setActive();// ew setVisible
            //     //TODO: roznica miedzy active a visible (chyba chodzi o update) - active- bedie updateowana z kazda klatka, vivible- bedxzie wyswietlana
            //     bullet.fire(velocityX, velocityY, CONSTANTS.TARGET_PLAYER);
            // }

        } else {
            //dzwiek braku amunicji
        }
    }
}