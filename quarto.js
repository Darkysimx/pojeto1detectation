img = ""
status = "";
objects = [];
function preload(){
    img = loadImage('kurto.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    modelo = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status :Detectando objetos";
}
function draw(){
    image(img,0,0,640,420);
    if(status !=""){
for(i=0; i < objects.length; i++){
    document.getElementById("status").innerHTML = "status:objeto detectado";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + "  " +percent + "%",objects[i].x,objects[i].y);
noFill();
stroke("#FF0000");
rect(objects[i].x ,objects[i].y,objects[i].width,objects[i].height);
}

    }
}
function modelLoaded(){
    console.log("Modelo carregado");
    modelo.detect(img,gotResult);
status = "true";
}
function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects = results;
}