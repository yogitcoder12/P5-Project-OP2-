function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill("magenta");
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill("darkblue");    
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}