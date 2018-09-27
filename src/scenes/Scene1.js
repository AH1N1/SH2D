// //import * as MS from 'MasterScene';
// class Scene1 extends MasterScene {
//
//     config(){
//         console.log('scene1 config');
//     }
//     constructor() {
//         super('Scene1');
//         console.log('in s');
//         console.log(this instanceof MasterScene);
//         console.log(this instanceof Phaser.Scene);
//         //console.log(this.input);
//     }
//
//     preload() {
//         //Dziedziczenie
//         super.preload();
//
//         // this.load.image('player', 'resources/assets/star.png');
//         // this.load.image('bomb', 'resources/assets/bomb.png');
//         // this.load.image('bullet', 'resources/assets/bullet.png');
//         //this.load.sound()
//     }
//
//     create() {
//         //Obowiazkowe zeby dzialalo dziedziczenie
//         super.create();
//
//         console.log(this.player);
//
//
//         this.star = this.matter.add.image(100, 100, 'player');
//         this.star.setBody({
//             type: 'circle',
//             radius: 10
//         });
//
//         console.log(this.keys.KEY_A);
//         //pierwsze this to scena, 2 this to cialo funkcji, 3 this przekazuje scene, tak zeby to ona a nie cialo funkcji bylo tym 2 this
//         this.input.keyboard.on('keyup_J', function () {
//             this.star.setVelocityX(100);
//         }, this);
//
//         this.input.keyboard.on('keyup_F', function () {
//             this.player.setVelocityX(100);
//         }, this);
//
//         this.input.keyboard.on('keyup_N', function () {
//             this.scene.start('Scene1');
//         }, this);
//
//
//         //speed tests
//         this.speed1 = Phaser.Math.GetSpeed(1200, 6);
//         this.speed2 = Phaser.Math.GetSpeed(600, 3);
//         this.input.keyboard.on('keyup_T', function (time, delta) {
//             this.player.x += this.speed1 * delta;
//         }, this);
//         this.input.keyboard.on('keyup_Y', function (time, delta) {
//             this.player.x += this.speed2 * delta;
//             console.log(this.speed2 * delta);
//         }, this);
//     }
//
//     update(time, delta) {
//         //Musi byc jako pierwsze bo dziedziczenie
//         super.update(time,delta);
//
//     }
// }