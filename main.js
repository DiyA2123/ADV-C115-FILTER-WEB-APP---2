function preload(){

}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size("400,400");
video.hide()

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}

function draw(){
image(video, 0, 0, 400, 400);
}

function take_snapshot(){
    save("download.png");
}

function modelLoaded(){
    console.log("Model has been intialized");
}

function gotPoses(results){
if (results.length>0){
    console.log("mustachex"+results[0].pose.nose.x);
    console.log("mustachey"+results[0].pose.nose.y)
    
}
}