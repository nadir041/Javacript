// reduce()


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumilator, currentValue){
//     console.log(`accumilator: ${accumilator} and current Value: ${currentValue}`);
    
//     return accumilator + currentValue;
// }, 0)




const myTotal = myNums.reduce((accumilator, currentValue) => accumilator + currentValue, 0)

// console.log(myTotal);


const myShoppingCart = [
    {itemName: "JAVA Course",
        price: 200,
    },
    {itemName: "Python Course",
        price: 1100,
    },
    {itemName: "Web Dev Course",
        price: 1200,
    },
    {itemName: "Data Science Course",
        price: 2000,
    },
]

const total = myShoppingCart.reduce( (acc, item)=> acc + item.price,0 )
console.log(total)