/*Øvelse 1 - Cirkler i løkker
Skriv en løkke der anvender din cirkel funktion til at tegne et antal cirkler som brugeren angiver.
*/

let antalCirkler = Number(prompt("Indtast antal cirkler"));

let i=0;

while (i<antalCirkler){
    let canvas = document.getElementById("mycanvas").getContext('2d');
    canvas.beginPath();
    canvas.arc(20,20,10,0,Math.PI*2);
    canvas.fillStyle = 'red';
    canvas.fill();
    i++
};

document.write("Antal cirkler tegnet: " +i);


//To do - ryk cirkler. 

