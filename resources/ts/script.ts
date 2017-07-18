namespace soundMaker {
    var 
        $ = document,
        inptList = $.getElementsByTagName('input'),
        audioSound = $.getElementById('audioSound'),
        btnPlay = $.getElementById('play');

     const url = 'resources/data.json';

    for (var i = 0; i < inptList.length; i++) {
        inptList[i].addEventListener('keyup', function(e) {
        
            var val = this.value;
            getSoundData(val);

         })
    }


var getSoundData = function(val) {

    var xhttp = new XMLHttpRequest(),
        data,
        cls;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            data = this.responseText;
            data = JSON.parse(data);
            
            for (var j = 0; j < data.soundData.length; j++) {
               
                var a = data.soundData[j].char;
                    if (data.soundData[j].char === val) {
                    
                    var html = '<audio class="aud" id="aud' + j + '" nocontrols ><source src = "' + data.soundData[j].audio + '"type = "audio/mp3" autoplay ">';
                        audioSound.innerHTML += html;
                        cls = $.getElementsByClassName('aud')[j];
                        cls.play();



                }
            }



        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};

//play the music on click of button
    btnPlay.addEventListener('click', function(e) {
       var audio = $.getElementsByTagName('audio');
        for (var k = 0; k < audio.length; k++) {
            audio[k].play();
        }

    })
}








