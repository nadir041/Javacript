// const GITHUB_API = 'https://api.github.com/users/nadir041';
// const user = fetch(GITHUB_API);
// console.log(user);
// user.then(function(data){
//     console.log(data);

// })

const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   processToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWallet();
//     });
//   });
// });



// createOrder(cart)
// .then(function (orderId) {
//   return proceesToPayment(orderId)
// })
// .then(function (paymentInfo) {
//   return showOrderSummary(paymentInfo)
// })
// .then(function () {  updateWallet();
// });


createOrder(cart)
.then(orderId => processToPayment (orderId) )
.then(paymentInfo => showOrderSummary (paymentInfo) )
.then(() => updateWallet() )
