let output = 0
for (let count = 10; count > 0; count--) {

    let Random = Math.random() * 100;
    let RandomAsInteger = Math.round(Random);

    console.log(RandomAsInteger)
    output = (output + RandomAsInteger)
}
console.log("Die Summe der 10 Zufallszahlen ist " + output);