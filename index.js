// // Code your solutions in this file
// // //for ([initialization]; [condition]; [iteration]) {
// //     [loop body]
// // }
 for (let age = 30; age < 40; age++) {
     console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
 }
const gifts = ["teddy bear", "drone", "doll"];

 function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
 }

  return gifts;
 }

wrapGifts(gifts);

const gifts = (["teddy bear", "drone", "doll"],"birthday");

// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

/*for (
    [initialExpressions];
    [condition];
    [incrementExpression]
)   start at 1      stop at 10  add 1 each time
for (let i = 1; i <=10; i ++){
    console.log(i)
}
*/

 const writeCards= (["Blessings", 'Chi Ma', "Others"]);
    for (let i = 0; i < writeCards.length; i++){ // the iteration moves INSIDE the body of the loop!
       console.log(`Thank you, ${writeCards[i]} for the wonderful birthday gift!`);
       debugger;
   } // the initialization moves OUTSIDE the body of the loop! {


  return writeCards;

  /*while ([condition]){
    [loop body]
  }*/


function countDown(){
    let countdown = 0;
    while (countdown < 11) // the iteration moves INSIDE the body of the loop!
    console.log(countdown++);
    debugger
  }
