// Create a program that manages a shopping cart. The program should store item prices in an array, calculate the total price, apply a tax rate, and print the final amount.

const itemPrice = [500, 1200, 300];
console.log("Items: " + itemPrice.length);
const totalPrice = itemPrice[0] + itemPrice[1] + itemPrice[2];
console.log("Subtotal: " + totalPrice);

const taxRate = 0.1; // 10% tax
const tax = totalPrice * taxRate;
console.log("Tax: " + tax.toFixed(2));

const finalTotal =  totalPrice + tax;
console.log("Final Total: " + finalTotal.toFixed(2));