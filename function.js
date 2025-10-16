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