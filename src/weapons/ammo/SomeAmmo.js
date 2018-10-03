/**
 * ZALOZENIA
 * -
 *
 * */



class SomeAmmo{
    constructop(ammoType){
        this.bulletsAmount=ammoType.bulletsAmount;
        this.fireMode= CONSTANTS.FIRE_MODE_SINGLE;

        if (ammoType==CONSTANTS.SOME_AMMO){
            this.bulletsAmount=1;
            this.fireMode= CONSTANTS.FIRE_MODE_SINGLE;
            this.fire= function (param) {
                console.log('SOME_AMMO');
            }

        }
        else if(ammoType==CONSTANTS.PISTOL_AMMO){

            this.bulletsAmount=1;
            this.fireMode= CONSTANTS.FIRE_MODE_SINGLE;
            this.fire= function (param) {
                console.log('SOME_AMMO');
            }
        }

    }

}