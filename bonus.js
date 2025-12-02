 var createCounter = function (init) {
  let num = init  
    return {
        increment() {
            num += 1
            return num
        } , 
        decrement (){
            num -= 1 
            return num 
        }, 
        reset (){
            num = init 
            return num 
        }
    }
 }
console.log(createCounter(3));
