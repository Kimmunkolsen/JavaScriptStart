/**
 * Created by Christian on 18-02-2018.
 I vinterbadeklubben er det vigtigt at huske noget at slå hul på isen med, når temperaturen falder.
 Formanden vil gerne vide hvor tit temperaturen er under frysepunktet.
 Tæl hvor mange gange temperaturen i et array er under 0!
 afprøv det program med [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10]

 Hints:
 Brug et loop til at løbe igennem alle temperaturerne.
 Brug en variabel til loopet og en til at holde styr på hvor mange gang temperaturen var under nul.

 */

//TODO tilføj data!
let badeVand = [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];
let frostdage = 0;
//TODO tæl frostdage og udskriv

for (let i = 0; i <badeVand.length; i++){
    if (badeVand[i]<0){
        frostdage++
        } else {

    };
}

document.write("Der er " +frostdage +" frostdage i array");




