// const myNums = [1,2,3];
// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc ${acc} and currVal ${currVal}`);
//     return acc+currVal
// }, 0);
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "mobile Dev course",
        price: 5999
    },
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "Data scientise",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce((acc,item)=>acc + item.price ,0);
console.log(priceToPay);