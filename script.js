/*const numeros = [8, 3, 10, 2, 5]

let menor = numeros[0];

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("numeros generado")*/


/*let nums = []
for (let i = 1; i <= 10, i++) {
    const randomNum = 
    Math.floor(Math.random() * 100) +1; nums.push(randomNum)
}

console.log('numeros generados:', nums);

let mayor = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > mayor) {
        mayor = nums[i];
    }
}
console.log('el numero mayor es:', mayor);
alert('el numero mayor es: ' + mayor); */

/*const numInicial = prompt('Ingrese el numero inicial:');
const numEval = prompt('Ingrese el numero de elementos del array:');
let nums = [];
for(let i = 1; i <= numEval; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    nums.push(randomNum);
}
console.log("Numeros generados:", nums);

const X = 15;
let contador = 0;
for (let i = 0) */


/*const edad = prompt('ingrese la edad:');
function categoriaEdad(edad){

    if (edad > 55) return 'adulto mayor';

    if (edad > 18) return 'adulto';

    if (edad > 12) return 'joven';

    return 'niño';
}
const categoria = categoriaEdad(edad);

let subsidio = categoria === 'niño' || categoria === 'adulto mayors'*/

/*

for (variable of objeto) {
    codigo

}

kkkkkkkkkkkkk


*/
let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) {
    console.log(fruta);
}

canasta.forEach( (item, key) => { console.log('item', item, 'key=',)})