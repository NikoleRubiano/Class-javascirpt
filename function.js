/*function calculateDiscontededPrice (price, discountPercentage){
    const discount =(price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscontededPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discont Percentage: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)

*/
/*
const rocket = {
    name: 'falcon 9',
    launchMessage: function launchMessage () {
        console.log( this.name )
    }
}

rocket.launchMessage()

const Greeting = (name) => {
    return `hola, $(name)`
}
    
const newGreeting = (name) => `hola, ${name}`

const resultFun1 = Ingreting ('juan');
const resultFun2 = Ingreting ('pedro');

console.log('resultFun1=', resultFun1);
console.log('resultFun2', resultFun2);
*/

const frutas = Array('apple', 'banana', 'orange')
console.log(frutas)
console.log(frutas.length)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = (1, 2, 3, 4, 5)
console.log(number)

const oneNumber = [4, 'hola mundo']
console.log(oneNumber)

const recipeingredients = [
    'flour',
    true, 
    2,
    {
        ingredient: 'Milk', Quatity: '1 cup'
    },
    false
]
console.log(recipeingredients)



recipeingredients.push('sugar')
console.log(recipeingredients)

const newfruit = frutas.concat(['kiwi', 'mango'])
console.log(newfruit)

const isArray = Array.isArray(frutas)
console.log(Array.isArray(frutas))


const numbersArray = [1, 2, 3, 4, 5]
let suma = 0;
for (numero of numbersArray) {
    suma += numero;
}

console.log('la suma es :', suma)

const array = [8, 15, 9, 28, 3, 7];
// const mapped = array.map((x) => x * 3);

// console.log(mapped);

// const result = array.filter((number) => number > 3);
// console.log(result);

// array.pop();
// console.log(array); 

// array.sort();
// console.log(array);

// // solo para numeros
// function compareNumbers(a, b) {
//     return a - b;
// }
// array.sort(compareNumbers);
// console.log(array);


// const found = array.find((number) => number > 9);
// console.log(found);


const isLargeNumber = (number) => number > 10;
console.log(array.findIndex(isLargeNumber));

const carrito = [
    {producto: 'libro', precio: 15000},
    {producto: 'camisa', precio: 25000},
    {producto: 'guitarra', precio: 100000},
    {producto: 'disco', precio: 20000},    
]

const total = carrito.reduce((acom, item) => acom + item.precio, 0);
console.log('el total es :', total);

const words = ['hola', 'mundo', 'como', 'estas', 'hola', 'mundo'];

const wordfrecuency = words.reduce((acumulador, currentvalue) => {
    if (acumulador[currentvalue]) {
        acumulador[currentvalue]++
    } else {
        acumulador[currentvalue] = 1;
    }
    return acumulador
}, {})
console.log(wordfrecuency);


/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

/*
const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Cual es tu usuario?");
const password = prompt("Cual es tu contraseña?");

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
  }
}

signIn(username, password);  
*/



const foo = () => console.log("Firts");
const bar = () => setTimeout(() => console.log("Second"), 0);
const baz = () => console.log("Third");

foo();
bar();
baz();

const promise = new Promise((resolve,
     reject) => {
        setTimeout(() => {
            let operationSuccesful = true;
            if (operationSuccesful) {
                resolve('la opreracion fue exitosa');
            } else {
                reject('la operacion fallo');
            }
     }, 2000);
});

promise
.then((succesMesasge) => {
    console.log(succesMesasge);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});

function fetchData() {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

fetchData();