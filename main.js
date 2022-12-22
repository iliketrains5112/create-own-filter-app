rightEarY = 0;
rightEarX= 0;


function preload(){
shrek = loadImage('https://i.postimg.cc/kMWZPSMh/shrek.png');
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
image(video, 0, 0, 500, 500);
image(shrek, rightEarX-50, rightEarY-150, 300, 300);
}

function takeSnapshot(){
    save("shrekifiedimage.png");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
if (results.length > 0 ){
    console.log(results)
    console.log("Right Ear x pos = " + results[0].pose.rightEar.x);
    console.log("Right Ear y pos = " + results[0].pose.rightEar.y);
    rightEarX = results[0].pose.rightEar.x;
    rightEarY = results[0].pose.rightEar.y;
}
}