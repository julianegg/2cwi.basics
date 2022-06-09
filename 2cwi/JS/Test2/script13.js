//Aufgabe02

let Random = Math.random() * 100
let RandomAsInteger = Math.round(Random);
console.log(RandomAsInteger);

for (let count = RandomAsInteger; count >= 0; count--) {
    console.log(count)
}
for (let count = 0; count <= RandomAsInteger; count++) {
    console.log(count)
}