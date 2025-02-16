var music = new Audio('./audio/Export7.wav');
music.loop = true;

function toggleMusic(){
    //alert("Music toggled");

    if(music.paused){
        music.play();
        document.getElementById("musicButtonImg").src = "./images/pause.png";
        //alert("Music paused");
    }else{
        music.pause();
        document.getElementById("musicButtonImg").src = "./images/play.png";
        //alert("Music played");
    }
}

function setPage(location){
    try{
        let doc = window.parent.document;
        doc.getElementById("frame").src = location;
        doc.getElementById("frame").height = location.height;
    }catch(e){
    }
}

function setVolume(volume){
    music.volume = volume / 100;
}
