(function (window) {
    function Player(imgPlayer, x, y) {
        this.initialize(imgPlayer, x, y);
    }

    Player.prototype = new BitmapAnimation();
    
    Player.prototype.BitmapAnimation_initialize = Player.prototype.initialize;
    Player.prototype.initialize = function(imgPlayer, x, y) {
        this.x = x;
        this.y = y;
   
        this.dir = -1;
        var localSpriteSheet = new SpriteSheet({
            images: [imgPlayer],
            frames:  {width: 100, height:300},
            animations: {
                idle_l: [0,0,"idle_l",10],
                idle_r: [1,1,"idle_r",10]
            }
        });

        this.KEY_RIGHT = false;
        this.KEY_LEFT = false;
    

        this.BitmapAnimation_initialize(localSpriteSheet);
        this.gotoAndPlay("idle_l");
        this.currentFrame = 0;
    }

    Player.prototype.tick = function () {
        if (this.KEY_RIGHT) {
            this.x += 8;
        } else if (this.KEY_LEFT) {
            this.x -= 8;
        }
        //console.log(this.x,this.y);
    }

    window.Player = Player;


} (window));
