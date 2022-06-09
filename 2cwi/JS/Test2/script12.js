//Aufgabe 01
let Random = Math.random() * 10
let RandomAsInteger = Math.round(Random);
console.log(RandomAsInteger);



if (RandomAsInteger > 4) {
    console.log("BIG");
} else if (RandomAsInteger <= 4 && RandomAsInteger > 0) {
    console.log("SMALL");
} else if (RandomAsInteger == 0) {
    console.log("0");
}