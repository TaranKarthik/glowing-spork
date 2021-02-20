function preload(){

}

function setup(){
    ctx = createCanvas(300,300);
    ctx.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet",modelLoaded);
    
}

function modelLoaded(){
    console.log("model loaded");
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}