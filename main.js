function preload(){

}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
image(video, 0, 0, 500, 500);
}

function takeSnapshot(){
    save("filtered_image");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
if (results.length > 0 ){
    console.log(results)
    console.log("Right Ear x pos = " + results[0].pose.rightEar.x);
    console.log("Right Ear y pos = " + results[0].pose.rightEar.y);
}
}