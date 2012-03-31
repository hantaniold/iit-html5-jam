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
                idle_f: [5],
                fire_m: { frames: [0,1,0,1], next: "idle", frequency: 7 },
                water_m: { frames: [0,2,0,2], next: "idle", frequency: 7 },
                food_m: { frames: [0,3,0,3], next: "idle", frequency: 7 },
                wow_m: { frames: [0,4,0,4], next: "idle", frequency: 7 },
                fire_f: { frames: [5,6,5,6], next: "idle_f", frequency: 7 },
                water_f: { frames: [5,7,5,7], next: "idle_f", frequency: 7 },
                food_f: { frames: [5,8,5,8], next: "idle_f", frequency: 7 },
                wow_f: { frames: [5,9,5,9], next: "idle_f", frequency: 7 },
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
