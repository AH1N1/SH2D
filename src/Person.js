class Person extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key)
    }

    //Ustawia info o amunicji
    setAmmo(ammoType, ammoLeft){
        this.ammoType=ammoType;
        this.ammoLeft=ammoLeft;
        console.log('ammo set: left-'+ this.ammoLeft + ', type-'+ this.ammoType);
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
    fire(group, directions){
        if(this.ammoLeft>0){

        }else{
        //dzwiek braku amunicji

        }



    }

}