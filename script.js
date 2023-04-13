var container = document.querySelector('#container');
var panorama = new
PANOLENS.ImagePanorama('https://github.com/RizkyFitriani1312/posttest5_122_Rizky-Fitriani_VAR/blob/main/images/52137224162_4dd22c4028_o.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);

var container = document.querySelector('#container');
var panorama = new
PANOLENS.ImagePanorama('https://github.com/RizkyFitriani1312/posttest5_122_Rizky-Fitriani_VAR/blob/main/images/52137224162_4dd22c4028_o.jpg');
var panorama2 = new
PANOLENS.ImagePanorama('https://github.com/RizkyFitriani1312/posttest5_122_Rizky-Fitriani_VAR/blob/main/images/52745902170_bdc09cbf4d_o.jpg');
var panorama3 = new
PANOLENS.ImagePanorama('https://github.com/RizkyFitriani1312/posttest5_122_Rizky-Fitriani_VAR/blob/main/images/52765374228_da8b34cfaf_o.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2, panorama3);

var textureLoader = new THREE.TextureLoader();
var customInfospot = textureLoader.load("images/night.png", function () {
    var infospot = new PANOLENS.Infospot(500, "images/night.png");
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function () {
        onButtonClick(panorama2);
    });
    panorama.add(infospot);
    });

var customInfospot = textureLoader.load("images/sakura.png", function () {
    var infospot = new PANOLENS.Infospot2(500, "images/sakura.png");
    infospot2.position.set(0, -2000, -5000);
    infospot2.addEventListener('click', function () {
        onButtonClick(panorama3);
    });
    panorama.add(infospot2);
    });

var bar = document.querySelector( '#bar' );

function onProgressUpdate ( event ) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100){
        bar.classList.add( 'hide' );
        setTimeout(function(){
            bar.style.width = 0;
        }, 1000);
    }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}

panorama.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);
