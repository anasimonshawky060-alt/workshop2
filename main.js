/*   1 
let x ="123"
x = Number(x)+ 7
console.log(x);       
            OR 
console.log(Number("123")+7);
*/

/* 2
 function sayhi (x) {
    if (!x) {
     return "Invalid"
     }
  }
 console.log(sayhi(0));*/

/*       3
 let numbers = [1 , 2 , 3 , 4 , 5, 6 ,7 ,8 ,9 ,10]
  for (let i= 0 ; i < numbers.length ;  i+=2)
console.log(numbers[i]);*/
/*
  let a = [1 , 2 , 3]
  let b = [4 , 5 , 6]
function sayhi (a , b) {
   return[...a, ...b]
}
console.log(sayhi(a , b));

sayhi(a, b) */


/*    6
function day (num){
  switch (num) {
   case 1:
      return "sunday"
      break;
   case 2 :
      return"monday"
      break;
   case 3 :
      return"tuesday"
      break;
   case 4 :
      return "wednesday"
      break ;
   case 5 :
      return "thursday"
      break ;
   case 6 :
      return"friday"
      break; 
   case 7 :
      return"saturday"
      break;


   default :
      return"Invalid"
      break; 
  }
 }
 console.log(day(2)); */
 
 /*
 function square (num) {
   (num)=num*num
console.log(num);

 }
 square(5) */


 /*     11
 function calc (...numbers) {
   let result = 0
for (let i =0 ; i < numbers.length ; i++) {
   result += numbers[i]
}
      return result ;
}
   console.log(calc(1 , 2 , 3 , 4 , 5));
calc(1 , 2 , 3 , 4 , 5) */

 /*     13
 function max (...arr) {
   let max =arr[0]
for (let i = 0; i < arr.length; i++) {
   if(arr[i]>max) { 
   max = arr[i];
}
}
 return max 
}
 console.log(max(1 , 3 , 7 , 2 , 4));
 max(1 , 3 , 7, 2 , 4)*/

/*function sum (name , age) {
 let
  name = "john"
 age = 30
   return ( "name" , "age" )

}
console.log(sum("john", 30));

sum('name" , "age" )*/

/*B 2- Hoisting 
 let قبل log المتغير تعريف ترفع 
 يشتغل الكود ما قبل يعني
  
 TDZ
 متنفذش تعريفه لان للاستخدام جاهز مش لسا لكن let في موجود المتغير
  
 examples =
console.log(a);
var a = 10
  error هيطلع
  TDZ في لسا لكن  بس بالاسم موجود a لان


  let x = 2     
console.log(x);
 خلصت TDS و الاستخدام قبل التعريف هنا
 شغال والكود*/

 3- == 
       النوع وليس فقط  القيمة بين بتقارن

       ===
      النوع و القيمة بين بتقارن