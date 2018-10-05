/**
 * ZALOZENIA
 * - obiekt nie jest renderowany- sluzy jedynie do zdefiniowania ile kul jakiego typu nalezy stworzyc przy wystrzale
 * - w zaleznosci od typu amunicji tworzy inna metode fire() ktora potem bedzie wywolana przez Person
 *  - ify w konstruktorze sa wydajniejsze niz w fire(), bo konstruktor bexzie wywolany raz  a fire czesto
 * */



class SomeAmmo{
    constructor(ammoType, target){
        //testowe - 1 pocisk, pojedynczy strzal prosto
        if (ammoType===CONSTANTS.SOME_AMMO){
            this.bulletsAmount=1;
            this.fire= function (scene, fromX, fromY, toX, toY, target) {
                console.log("SOME_AMMO");
                // let bullet = scene.bullets.metoda()//TODO: napisz metode ktora zwraca kule odpowiedniego typu
                //popbierz 1 kule ktora nie jest aktywna
                //wywolaj jej metode fire z odpowiednimi parametrami parametrami

            }
        }
        //pistolert-  pocisk, pojedynczy strzal prosto
        else if(ammoType===CONSTANTS.PISTOL_AMMO){
            this.bulletsAmount=1;
            this.fire= function (param) {
                console.log('PISTOL_AMMO');
            }
        }
        //shotgun - 5 pociskow, pojedynczy strzal wystrzeliwujacy kazdy pocisk na boki
        else if(ammoType===CONSTANTS.SHOTGUN_AMMO){
            this.bulletsAmount=5;
            this.fire= function (param) {
                console.log('SHOTGUN_AMMO');
            }
        }
        //karabin strzelajacy seriami - 3 pociski, wystrzelone 1 po drugim prosto
        else if(ammoType===CONSTANTS.BURST_RIFLE_AMMO){
            this.bulletsAmount=3;
            this.fire= function (param) {
                console.log('BURST_RIFLE_AMMO');
            }
        }

    }



}