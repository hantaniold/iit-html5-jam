(function (window) {
    function Player(imgPlayer, x, y) {
        this.initialize(imgPlayer, x, y);
    }

    Player.prototype = new BitmapAnimation();
    
    Player.prototype.BitmapAnimation_initialize = Player.prototype.initialize;
    Player.prototype.initialize = function(imgPlayer, x, y) {
        this.x = x;
        this.y = y;
   
        var localSpriteSheet = new SpriteSheet({
            images: [imgPlayer],
            frames:  {width: 60, height:200},
            animations: {
                idle: [0,3,"idle",4]
            }
        });

        this.KEY_RIGHT = false;
        this.KEY_LEFT = false;

        this.BitmapAnimation_initialize(localSpriteSheet);
        this.gotoAndPlay("idle");
        this.currentFrame = 0;
    }

    Player.prototype.tick = function () {
        if (this.KEY_RIGHT) {
            this.x += 4;
        } else if (this.KEY_LEFT) {
            this.x -= 4;
        }
        //console.log(this.x,this.y);
    }

    window.Player = Player;


} (window));
