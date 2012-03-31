(function (window) {
    function Kid(imgKid, x, y, type) {
        this.initialize(imgKid, x, y, type);
    }
    Kid.prototype = new BitmapAnimation();
    Kid.prototype.BitmapAnimation_initialize = Kid.prototype.initialize;
    Kid.prototype.initialize = function (imgKid, x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        var ss = new SpriteSheet({
            images : [imgKid],
            frames: {width: 100, height: 250},
            animations: {
                idle: [0],
                idle_f: [4]
            }
        });

        this.BitmapAnimation_initialize(ss);
        if (this.type == "boy")  {
            this.gotoAndPlay("idle");
        } else {
            this.gotoAndPlay("idle_f");
        }
        this.currentFrame = 0;

    }

    Kid.prototype.tick = function () {

    }

    window.Kid = Kid;
}   (window));
