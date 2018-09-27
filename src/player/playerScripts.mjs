function PlayerManeger() {
    //Returns true if player moved at any direction
    this.movePlayer = function (player, cursors) {
        let result = false;
        //Horizontal movement
        if (cursors.left.isDown && cursors.right.isDown) {
            player.setVelocityX(0);
            result = false
        }
        else if (cursors.left.isDown) {
            player.setVelocityX(-160);
            result = true;

            // player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);
            result = true;
            //player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);

            // player.anims.play('turn');
        }
        //Vertical movement
        if (cursors.up.isDown && cursors.down.isDown) {
            player.setVelocityY(0);
            result = false
        }
        else if (cursors.up.isDown) {
            player.setVelocityY(-160);
            result = true;

            // player.anims.play('left', true);
        }
        else if (cursors.down.isDown) {
            player.setVelocityY(160);
            result = true;
            //player.anims.play('right', true);
        }
        else {
            player.setVelocityY(0);

            // player.anims.play('turn');
        }

        return result;
    }
    //Returns angle in radians between the player and the mouse pointer
    this.countPlayerAndMouseAngle = function (scene, player, cursor) {
        return Phaser.Math.Angle.Between(player.x, player.y, cursor.x + scene.cameras.main.scrollX, cursor.y + scene.cameras.main.scrollY);
    };
    //Rotates player sprite until it faces the mouse pointer
    this.rotatePlayerToMouse = function (scene, player,cursor) {
        player.rotation = this.countPlayerAndMouseAngle(scene,player,cursor);
    }
}