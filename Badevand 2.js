/**
 * Tæl nu hvor mange gange temperaturen er steget i stedet!

 Hints:
 Sammenlign temperaturerne parvis.
 Hvor starter sammenligningen?

  */

let badeVand = [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];
let i=0;
let prevDay = i-1;
let currentDay=i;
let stigning= 0;

//TODO tæl stigninger

for (let i = 0; i <badeVand.length; i++){
    if (badeVand[prevDay] < badeVand[currentDay]){
        stigning++;
    } else {

    }
    document.write("Temperaturen er steget " + stigning + " gange");
}



