/**
 * Created by Christian on 08-02-2018.
 Tegn en snemand med HTML5 Canvas!
 Hvis solen skinner og det er over -5 grader eller det er over 0 grader,
 skal snemanden være ked af det - ellers skal den være glad!
 */


let temperature = Number(prompt("Indtast temperaturen:"));
let sunshine = confirm("Lad solen skinne?"); //confirm returnerer true eller false;

circle(100,280,50); // Chest circle
circle(100,400,70); //Bottom circle
face(100,190,40);
hat(75,90);


function face(x,y,radius){
    circle(x,y,radius);

    //TODO: Tegn øjne
    circle(x-10,y-3,radius/5);
    circle(x+10,y-3,radius/5);
    let happy =! ((sunshine && temperature >-5) || temperature > 0 );
    //lad happy være forskellig fra sunshine og temperatur over -5 eller tempaeratur over 0 grader
    mouth(x,y-2,radius-10,happy);
  console.log('happy: '+happy);
}

function circle(x,y, radius){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    canvas.beginPath();
    canvas.arc(x,y,radius,0,Math.PI*2);
    canvas.fillStyle = 'black';
    canvas.stroke();
}

function mouth(x,y, size, happy){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    canvas.beginPath();
    if (happy) {
        canvas.arc(x,y, size,(1/4)*Math.PI,(3/4)*Math.PI)
        canvas.closePath();
    } else {
        canvas.arc(x,y+(5/3)*size,size,(-3/4)*Math.PI,(-1/4)*Math.PI)
        canvas.closePath();
    }
    canvas.stroke();

}

function hat(x,y){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    canvas.rect(x,y,50,60);
    canvas.fillStyle = 'black';
    canvas.fill();
    canvas.beginPath();
    canvas.moveTo(x-50,y+60);
    canvas.lineTo(x+100,y+60);
    canvas.lineWidth="6";
    canvas.stroke();
}

console.log("sol: "+sunshine);
console.log("temperatur: "+temperature);