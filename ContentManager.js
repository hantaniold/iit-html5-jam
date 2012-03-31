// Initializes our images and whatnot

function ContentManager() {

    var ondownloadcompleted;
    var NR_TO_DL = 2;
    this.SetDownloadCompleted = function (callbackMethod) {
        ondownloadcompleted = callbackMethod;
    }

    this.img_bg = new Image();
    this.img_player = new Image();

    var NR_LOADED = 0;
    
    this.StartDownload = function() {
        SetDownloadParameters(this.img_bg,"res/bg.png",handleImageLoad,handleImageError);
        SetDownloadParameters(this.img_player,"res/player.png",handleImageLoad,handleImageError);
    }


    function SetDownloadParameters(imgElement, url, loadedHandler, errorHandler) {
        imgElement.src = url;
        imgElement.onload = loadedHandler;
        imgElement.onerror = errorHandler;
    }

    function handleImageLoad(e) {
        NR_LOADED++;
        if (NR_LOADED == NR_TO_DL) {
            NR_LOADED = 0;
            ondownloadcompleted();
        }
    }

    function handleImageError(e) {
        console.log("ERROR LOADING IMAGE :" + e.target.src);
    }
}