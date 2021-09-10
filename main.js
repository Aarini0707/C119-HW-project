function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bM_98D8fE/model.json',modelLoaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotresult);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("person_name").innerHTML=results[0].label;
        document.getElementById("person_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
