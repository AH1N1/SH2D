/**
 * ZALOZENIA
 * - bron ma jakis image
 * - kazda bron ma zdefiniowane jakimi pociskami strzela, ile ich ma, i ile zajmuje przeladowanie
 * - bron ktora lezy gdzies sie na mapie dostaje jakas pozycje x i y, oraz jest wyswietlana
 * - bron ktora jest przez kogos uzywana dostaje flage inUse
 * - tablica broni, przechowuje bronie z flaga inUse oraz te bez niej. gdy boty lub gracz podnosza bron flaga jest ustawiana, gdy upuszczaja zdejmowana, gdy bron sie zniszczy jest usuwana z gry
 * - gdy bot upusci bron, z tablicy brana jest pierwsza bron z flaga in use, przekazywana jest jej pozostala amunicja, a flaga jest zdejmowana
 * - gry ktos podnosci bron z tablicy brana jest pierwsza bron danego typu bez flagi inUse, bot/gracz pobiera z niej info o typie i ilosci amunicji, flaga inUse jest ustawiana
 * - bron mozna podniesc tylko jesli jest w X odleglosci od gracza
 * - bron jest obiektem ktory ma jakis image, zeby byl klikalny, a za zadanie ma przekazywac informacje temu kto ja podniesie o typie i ilosci amunicji
 * - w momencie podniesienia bron przestaje byc wyswietlana, a gracz dostaje do dyspozycji X amunicji danego typu, ktora bedzie sobie spawnil.
 * - po upuszczeniu przez bota pron dostaje jego pozycje i znow zaczyna byc widoczna, oraz przekazywane jest z powrotem info o ilosci amunicji
 * - po rzuceniu przez gracza bron dostaje jego pozycje, oraz jakas predkosc, oraz zaczyna byc wyswietlana + dostaje cialo, ktore bedzie kolidowac z botami oraz otoczeniem
 *
 *
 * */


class SomeWeapon extends Phaser.GameObjects.Sprite {

    constructor(scene, config) {
        super(scene, config.x, config.y, config.key);
        this.ammoType = config.ammoType;
        this.ammoLeft = config.ammoAmount;
        this.inUse= config.inUse || false;
        if(config.interactive) this.setInteractive();
    }

    preUpdate(time, delta) {
        // this.x += 3;
        // this.y += 3;
    }

    //Ustawia podnoszacemu info o amunicji- ilosc i typ- oraz zmienia status inUse oraz widocznosc na false
    pickUp(person) {
        person.setAmmo(this.ammoType, this.ammoLeft);
        this.setVisible(false);// ew setActive(false);
        this.inUse=true;
    }


    //nadaje widzocznosc/ ustawia info o pozostalej aminicji -ilosc i params to albo pojedyncze wartosci albo osoba podnoszaca/ set interactive
    //ew dodac jakas mala predkosc w randomowym kierunku
    dropWeapon(ammoLeft, x, y) {
        this.x =x;
        this.y=y;
        this.ammoLeft=ammoLeft;
        this.setVisible(true); //ew setActive()
        this.setInteractive()
        this.inUse=false;
    }

    //ustawia wartosc flagi inUse true/false
    setInUse(value) {
        this.inUse = value;
    }

    getInUse() {
        return this.inUse;
    }

    //TODO: wiecej parametrow- ustal
    //Ustawia widocznosc i dodaje cialo. Nadaje broni jakas predkosc w okreslonym kierunku(dodacv w parametrach)
    throwWeapon(x, y, velocityX, velocityY) {
    }

    //Usuwa sie z grupy / params do ustalenia
    destroyWeapon(scene, group) {
    }

}