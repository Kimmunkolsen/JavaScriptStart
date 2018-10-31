/**
 * Created by Christian on 14-02-2018.
 */
let tal1 = Number(prompt("Indtast et tal"));
let tal2 = Number(prompt("Indtast et tal"));
let tal3 = Number(prompt("Indtast et tal"));
let Maksimum = tal1;

if(tal1>tal2>tal3){
    Maksimum = tal1;
} else if(tal2>tal1>tal3) {
     Maksimum = tal2;
} else if (tal3>tal2>tal1){
     Maksimum= tal3;
} else {
    Maksimum = "Der er noget galt med logikken"
}

console.log(tal1);
console.log(tal2);
console.log(tal3);

// TODO vis det største tal:
document.write("Det største tal er: " +Maksimum);
// NB: Bemærk at vi denne gang skriver til Hjemmesiden