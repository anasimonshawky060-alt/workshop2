//  var createCounter = function (init) {
//   let num = init  
//     return {
//         increment() {
//             num += 1
//             return num
//         } , 
//         decrement (){
//             num -= 1 
//             return num 
//         }, 
//         reset (){
//             num = init 
//             return num 
//         }
//     }
//  }
// console.log(createCounter(3));


//////////////////////////////////////////////////////////////////////

var findKthPositive = function (arr , k) {
   for (let i = 0 ; i < arr.length ; i++){
    const missing = arr[i]-(i+ 1);
    if (missing >= k ){ 
        return k + i ;
    }
   }
   return k + arr.length;

};
   console.log(findKthPositive("1 "));














