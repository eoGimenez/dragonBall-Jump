//window .onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "black";
    let test = {
        x : 200,
        y : 200,
        width : 45,
        heigth : 45,
        velocidadY: 8,
        velocidadX: 10,
        aceleracion: -9.8,
        desplazamientoSalto: 49
    }
/*     class Objeto {
        constructor () {

        }
    } */
// saihfasdadsadasdoifhbweofbwoqef
//}
let inicio = 0;
let rebote = (() => {
    if (cont < 25 || cont >54) {
    test.y = test.y + (test.velocidadY * intervaloSalto) + ( (test.aceleracion*intervaloSalto) /2)
    ctx.fillRect(test.x, test.y, test.width, test.heigth)
} else if ( cont > 25 ) {
    console.log("sbais")
    test.y = test.y + (test.velocidadY * intervaloBajo) + ( (test.aceleracion*intervaloBajo) /2)
    ctx.fillRect(test.x, test.y, test.width, test.heigth)
}
if (cont >= 49) cont = 0;
})
let cont = 0;
let intervaloSalto = -2;
let intervaloBajo = 2;

let inter = setInterval(() => {
    cont++
    ctx.clearRect(0, 0, 600, 300);
    ctx.fillStyle = "black";
    rebote()
}, 20);



