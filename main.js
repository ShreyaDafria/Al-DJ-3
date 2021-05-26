song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup()
{
   canvas = createCanvas(600,500);
   canvas.position(575,200);

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video , modelLoaded);
   poseNet.on('pose',gotPoses);
}

function modelLoaded() 
{
    console.log('PoseNet is Initialized !!');
}

function gotPoses(results) {

    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('Left Wrist (X)' + leftWristX);
        console.log('Left Wrist (Y)' + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('right Wrist (X)' + rightWristX);
        console.log('right Wrist (Y)' + rightWristY);
    }
}


function draw()
{
    image(video, 0, 0 , 600, 500);
    fill("ff0000");
    stroke("ff0000");
    circle(leftWristX,leftWristY,25);
    InNumber_leftWristY = Number(leftWristY);
    remove_decimals = floor(InNumber_leftWristY);
    volume = remove_decimal/500;
    document.getElementById("Volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}

function preload()
{
    song = loadSound("music.mp3");
}

function play()
{
    song.play();
    song.setVolume(0.3);
    song.rate(1.3);
}

function stop()
{
    song.stop();
}

function plause()
{
    song.pause();
}