let a = [];
console.log(a);
let b = [];
let c = [];

/*let vWin=0;
 let d= [];
 let e=[];
 let f=[];
 let g=[];
 ****/

/*
//definer antal iterations i arrays skal være mindre end 7
//Hvem spiller? Loop spiller 1 har tur i lige index, spiller 2 har tur i ulige index:

//Wincondition 1: Vertical score = 4
// hvis i == i++,  er der 1 point. Hvis point = 4 er der Win Condition
// hvis der er forskel ryger score ned til 1 og starter forfra.

for(let i =0; i<5;i++) {
    if(a[i]==a[i+1]) {
        vWin++;
    }
    else {vWin=0}
    console.log("vWin= "+vWin)
}

//Wincondition 2: Horizontal score=4
// Hvis index 0-5 er ens i to adjacent arrays er der 1 point. Hvis point = 4 er der win condition
// hvis der er forskel ryger score ned til 1 og starter forfra.
// hvis der ikke er wincondition på [0], går den videre til [1]

for(let prevArray=i;i<6;i++) {
    for (let i = 0; i < 6; i++) {
        if ()
            }
}
*/

for (let tur = 0; tur < 12; tur++) {
    //Indsæt winconditions her
    //ongoing print
    document.write("a: "+a+"<br>");
    document.write("b: "+b+"<br>");
    document.write("c: "+c+"<br>"+"<br>");

    if (tur % 2 == 0) {

        //indskyd brikker:
        let valg = prompt("Spiller 1: Hvor vil du ligge din brik?");

        if (valg === "a") {
            if (a.length < 6) {
                a.push(1);
                console.log(a);
            } else {
                alert("a Rækken er fyldt, vælg en anden");
                tur--;
            }
        } else if (valg === "b") {
            if (b.length < 6) {
                b.push(1);
                console.log(b);
            } else {
                alert("b Rækken er fyldt, vælg en anden");
                tur--;
            }
        } else if (valg === "c") {
            if (c.length < 6) {
                c.push(1);
                console.log(c);
            } else {
                alert("c Rækken er fyldt, vælg en anden");
                tur--;
            }
        } else {
            alert("Spiller 1's tur er faulty");
            tur--;
        }

        console.log("Spiller 1's tur");
        console.log("tur: " + tur + " valg: " + valg);

    }

    else if (tur % 2 == 1) {

        document.write("a: "+a+"<br>");
        document.write("b: "+b+"<br>");
        document.write("c: "+c+"<br>"+"<br>");

        let valg = prompt(" Spiller 2: Hvor vil du ligge din brik?");

        if (valg === "a") {
            if (a.length < 6) {
                a.push(2);
                console.log(a);
            } else {
                alert("a Rækken er fyldt, vælg en anden");
                tur--;
            }
        } else if (valg === "b") {
            if (b.length < 6) {
                b.push(2);
                console.log(b);
            } else {
                alert("b Rækken er fyldt, vælg en anden");
                tur--;
            }
        } else if (valg === "c") {
            if (c.length < 6) {
                c.push(2);
                console.log(c);
            } else {
                alert("c Rækken er fyldt, vælg en anden");
                tur--;
            }

        } else {
            alert("Spiller 2's tur er faulty");
            tur--;
        }

        console.log("Spiller 2's tur");
        console.log("tur: " + tur + " valg: " + valg);

    }

}

//2hrs 26/10-18
//1415 - 16 27/10-18
//11.00-16 - 30/10
