1
let x = Number(123)
console.log(x + 7);

2
function sayhi (x) {
    if (!x) {
       return "invalid"
}
}
        console.log(sayhi(null));

        3
let numbers = [1, 2, 3, 4, 5 , 6,7 ,8 ,9 ,10 ]
for (i = 0 ; i < 10 ; i++ ) {
 if (i%2== 0) {
    continue ;  
 }
        console.log(i);
        
}

4
const arr = [1 , 2 , 3, 4, 5]
const x = arr.filter ((ele)=> {
    return ele % 2 == 0
}
)
        console.log(x); 
        5
let x = [ 1, 2, 3]        
let y = [4 , 5, 6]
function sum (x , y) {
        return [...x , ...y];
}
    console.log(sum(x , y));
sum(x , y)
        
    6
function day (num) {
switch (num){
    case 1: 
        return  "sunday"
        break ; 
    case 2 :
        return  "monday"
        break ;
    case 3 :
        return "tuesday"
    case 4 : 
        return "wednesday"
        break ;
    case 5 : 
        return "thursday"
        break ;
    case 6 :
        return "friday"
            break;

    case 7 :        
        return "saturday"
            break ;
    default :
        return "invalid"
            break ;
}
}
console.log( day(2));
       
7
const x = [ "a" , "ab" , "abc" ]
const y = x.map ((ele)=> {
return ele.length
}
)
console.log(y);
          
8
function sum (num) {
if (num % 5 == 0 && num % 3 ==0){
    return "divisible by both"
}else {
    return "error"
}
}
console.log(sum(30)) ;

        9
let num = 5
function sum (num1) {
    return num = num1**2 ; 
}
console.log (sum(5)) ;  

10
const person = {name : "john" , age :"25"} ;
function sum (name , age ){
    return `${name} is ${age} years old` ;
    
}
console.log(sum("john", 25));

    11
function sum (...x) {
let result = 0
for (let i = 0; i < x.length ; i++){
    result += x[i]
}
    return result ;
}
console.log(sum(1 , 2 , 3 , 4 ,5));
        
12
function x (){
    return new Promise ((resolve)=> {
            setTimeout (()=>{
                if ( 10 > 6 ){
                    resolve ("success");
                }
            },3000)
            
    })
}
x(10).then(message=>{
    console.log(message);
    
})

13
function max (arr){
   let max = arr[0] ;
    for (let i = 0 ; i < arr.length; i++) {
      if (arr[i]> max ){
        max =arr[i] ;
      }  
        
    }
    return max ;

}
 max(1 , 3 , 7, 2 , 4)
console.log( max([1 , 3 , 7, 2 , 4]));

 14
function sum (name , age){
    return ["name" , "age"]
}
console.log(sum("john" , 30));
   
        15
function sum(str){
    return str.split (" ") ; 

}
let x = "The quick brown fox" ;
console.log(sum(x));




B  1- for each 
هي طريقة خاصة بال array و بتعمل callback function 
لا يمكن استخدام break , continue 
بيعدي ع كل العناصر اللي ف array و ينفذ ال condicion
مش بيدي undifined
تنفذ في العمليات البسيطة على كل عنصر في الاراي
 await تقبل لا 


for of 
تستخدم للتكرار loop 
يمكن استخدام continue , break 
تنفذ في البحث عن عنصر معين و ايقاف التكرار عند الوصول اليه

2- Hoisting 
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
 شغال والكود


 3- == 
النوع وليس فقط  القيمة بين بتقارن

===
النوع و القيمة بين بتقارن

4- try - catch 
يحمي من توقف الكود بسبب خطا
لما انا اكتب الكود اللي ممكن يديني ايرور في try و لو حصل خطااا يروح ل catch تلقائيا و الكود هيكمل من غير توقف 
بتستخدم في ال async عشان الاخطاء اللي فيها بتظهر بعد وقت async await و الكود يكمل 
من غير try , catch الخطا يوقف كل حاجه

5- type conversion 
ده انا اللي بعمل التغيير بايدك 
Number("20")
20

type coercion 
بتتحول لوحدها بالجافا سكربت 
"5" + 3 
53 

 


