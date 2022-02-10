//Aufgabe 09
let output = "";

let isX = true

for (let index = 1; index < 20; index++) {

    if (index % 4 == 0) {

        console.log(output);

        output = ""

        if (isX = true) {

            isX = false

        } else {

            isX = true

        }



    }

    if (isX == true) {

        output = output + "x";



    } else {

        output = output + "0";

    }

}