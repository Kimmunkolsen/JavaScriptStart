/**
 * Created by Christian on 06-02-2018.
 */
//TODO tegn en pyramide med loops lineNo stedet for nedenstående


let j= prompt("Indtast antal linjer for din pyramide");
let bogstaver = "o";
let prikker = j;

//ændre antal af punktummer før og efter bogstav til j-i
for(let i = 0 ; i < j ; i++) {
    for (let l=0; l<j; l++) {
        document.write(" . ");
    }
    document.write(bogstaver);
    for (let c=0; c<j; c++) {
        document.write(" . ");
    }
    bogstaver = bogstaver+"oo";
    document.write("<br>");
    prikker--;
}

/*
Linje 0: j-i prikker, A+lineNo*AA , j-i prikker, Break. //j=5-1 = 4 prikker, A
linje 1: j-i prikker, A+lineNo*AA, j-i prikker, BREAK. //j=5-2 = 3 prikker, A+1*AA.
    linje 2: j-i prikker, A+lineNo*AA, j-i prikker, Break // j= 2 prikker, A+2*AA.

*/

//Tegnet lineNo konsollen
console.log("...A...");
console.log("..AAA..");
console.log(".AAAAA.");
console.log("AAAAAAA");

//Brug substring.

//Tegnet lineNo HTML dokumentet
document.getElementById("pyramide").innerHTML += "...A..." + "<BR>";
document.getElementById("pyramide").innerHTML += "..AAA.." + "<BR>";
document.getElementById("pyramide").innerHTML += ".AAAAA." + "<BR>";
document.getElementById("pyramide").innerHTML += "AAAAAAA" + "<BR>";

/*
Hints:
    Hvis i er linjenummeret og j er det totale antal linjer -
Hvor mange prikker skal der så være i linje 0 ?
    Hvad med linje 1 ?- Hvad med linje i ?
    Hvor mange A'er er der i linje nummer 0 ? linje 1 ? linje i ?
Der er brug for flere loops - nogle inden i hinanden.
    Der er brug for et loop for hver linje og flere loops inden i, der tager sig af antallet af prikker og A'er.
ager sig af antallet af prikker og A'er
*/