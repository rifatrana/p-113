function preload() {

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    Video = createCapture(VIDEO);
    Video.hide();

    tint_color = "";

}

function draw() {
    image(Video,0,0,640,480);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');

}

function filter_tint()
{
    tint_color= document.getElementById("color_name").value;
}