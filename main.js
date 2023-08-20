Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById('livecam');

Webcam.attach('#camera');

function takeimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("finalimg").innerHTML = '<img id="captured_image" src="'+data_uri+'"></img>';

    })
}

console.log('ml5 version',ml5.version);

classifier = ml5.image_Classifier("https://teachablemachine.withgoogle.com/models/4BbA5q0hr/model.json",modelLoaded);

console.log("model Loaded");
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if (error){
        clonsole.error(error);

    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("acuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}