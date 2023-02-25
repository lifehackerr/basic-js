//  var myNmae = "Omkesh"
// //  console.log(myNmae)
//  var myAge = false - true
// //  console.log(typeof(myNmae))
// //  console.log(typeof(myAge))
//  var isTrue = true
// //  console.log(typeof(isTrue))

// var myPhn = 9876543210;

// console.log(isNaN(myPhn));
// console.log(isNaN(myNmae));
// if(isNaN(myNmae)){
//     console.log("Please enter a valid no.")
// // }
// // console.log(1000**10)
// var num1 = 5;
// var num2 = "5";
// console.log(num1 == num2);
// console.log(num1 === num2)

// function sum(a,b){
//     return a+b;
// }
// var funExp = sum()
// var funExp1 = sum(2,3)
// console.log(funExp);
// console.log(funExp1);

// var anonFuncExp = function(a,b){
//     return a+b;
// }
// console.log(anonFuncExp(1,2));
// var mName = "om";
// console.log(mName)
// mName = "Var"
// console.log(mName);

// const mName = "om";
// console.log(mName)
// mName = "Var"
// console.log(mName);


// function MyName(){
//     var firstName = "om";
//     console.log(firstName)
//     if(true){
//         var lastName = "Var";
//         console.log("innner " + firstName);
//         console.log("inner "+ lastName);
//     }
//     console.log("outer " + lastName)
// }
// MyName();


// function MyName(){
//     let firstName = "om";
//     console.log(firstName)
//     if(true){
//         let lastName = "Var";
//         console.log("innner " + firstName);
//         console.log("inner "+ lastName);
//     }
//     console.log("outer " + lastName)
// }
// MyName();
// function MyName(){
//     const firstName = "om";
//     console.log(firstName)
//     if(true){
//         const lastName = "Var";
//         console.log("innner " + firstName);
//         console.log("inner "+ lastName);
//     }
//     console.log("outer " + lastName)
// }
// MyName();


//Template literals / template strings

// for(let num = 1;num<=10;num++){
//     let tableof = 8;
//     console.log(`${num} * ${tableof} = ${num * tableof}` )
// }

//default para

// function mul(a, b = 2){
//     return a*b;
// }
// console.log(mul(4));
 
//fat Arrow function

// const sum = () =>{
//     // let a = 2, b= 42;
//     return `the sum of a and b is ${(a = 2)+(b=44)}`
// }
// console.log(sum())

// const sum = () => `the sum of a and b is ${(a = 2)+(b=44)}`
// console.log(sum())

//Aray
 
// var myfriend = ['om',22,true,23.5 ,'ravi']
// console.log(myfriend[3] + myfriend[1])
// console.log(myfriend[3] - myfriend[0])

// var myfriend = new Array; // optional
// console.log(myfriend.length)
// for(let i = 0; i<= myfriend.length;i++){
//     console.log(myfriend[i])
// }

// for(let i in myfriend){
//     console.log(myfriend[i]);
// }

// for(let i in myfriend){
//     console.log(i); //return back the indexing
// }

// for(let i of myfriend){
//     console.log(i); // retunr back the values of an array
// }

// myfriend.forEach(function(element,index,array){
//     console.log(element, + " " + index);
// }) //important

// myfriend.forEach((element,index,array) =>{
//     console.log(`${element} , ${index}`)
// })

// myfriend.forEach((element,index,array) => console.log(`${element} , ${index} and ${array}`))

//var myfriend = ['om',"var",22,true,23.5 ,23,22,'ravi']
// console.log(myfriend.indexOf(22,2)) 
// //it returns -1 if the element is not present in the array
// //indexof("what we need to search,"startting index")

// console.log(myfriend.lastIndexOf(22)) 
// console.log(myfriend.includes(22,0))
// console.log(myfriend.includes(false))

// const prices = [900,200,300,350,400,450,500,600];
//prices > 400
// const findElem = prices.find((currVal,index,prices) => currVal < 400);
// console.log(findElem);

// // find method will return only one element  -- biggest drawbacks
// console.log(prices.find((currVal,index,prices) => currVal < 400));
// console.log(prices.findIndex((currVal,index,prices) => currVal < 400));
// console.log(prices.find((currVal,index,prices) => currVal <90));


// const prices = [900,200,300,350,400,450,500,600];
// console.log(prices.filter((currVal,index,prices) => currVal < 400));
// console.log(prices.filter((currVal,index,prices) => currVal < 40));


//how to sort an array
// const prices = [900,200,300,350,400,450,500,600];
// console.log(prices.sort())

// const names = ["ramesh" ,"suresh" ,"kalpesh" ,"karan" ,"kaa"];
// console.log(names.sort())

// const names = ["792" ,"87" ,"23" ,"11" ,"001"];
// console.log(names.sort())

//crud operation
//const names = ["ramesh" ,"suresh" ,"kalpesh" ,"karan" ,"harsh"];
// const count = names.push("aman");
// console.log(names);
// console.log(count);
// names.push("rakesh","mohit");
// console.log(names);
// names.unshift("omm");
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);
// const newNames = names.splice(names.length,0,"harish");
// console.log(names);
// console.log(newNames) 
 
// const newNames = names.splice(3,1);
// console.log(names);
// console.log(newNames) //splice method return an oyutput of the elements deleted in array 

// const updateNames = names.splice(2,0,"Suresh")
// console.log(names)

// const arr1 = [1,4,9,16,25];
// const newArr = arr1.map((curEle,index,array)=>{
//     return curEle >8;
// });
// console.log(arr1);
// console.log(newArr);
// let newArr = arr1.map((currEle,index,arr) =>  {
//     return `Index no = ${index} and Element is ${currEle}.`
// })
// console.log(newArr)
// console.log(arr1)

// //map method does not mutate the original array.

// const arr2 = [1,4,9,16,25];
// const newArr = arr1.map((curEle,index,array)=>{
//     return curEle >8;
// });
// console.log(arr1);
// console.log(newArr);
// let newArrForEach = arr2.forEach((currEle,index,arr) =>  {
//     return `Index no = ${index} and Element is ${currEle}.`
// })
// console.log(newArrForEach)
// console.log(arr2)

//for each method return undefined while map method return an new array.
// in map method we can attatch other methods like reduce(), sort(), filter(),
//while in forEach method we can't do anything as it returns undefined.


// Ques : multiply all the elements by 2 and return the values greater than 10

// const quesArr = [2,4,5,7,9,3] ;
// let ansArr = quesArr.map((currEle,index,arr)=>{
//     return currEle *2
// }).filter((currEle,index,arr)=>{
//     return currEle >10;
// })
// console.log(ansArr);

// const quesArr = [2,4,5,7,9,3] ;
// let ansArr = quesArr.map((currEle,index,arr)=> currEle *2 ).filter((currEle,index,arr)=> currEle >10)
// console.log(ansArr);

//Reduce method is used to flatten an array means it basically converts 2d -3d array into 1d array.
//the reduce method executes a reducer function on each element in the array that result in single output value.

// reducer funtion takes 4 arguments.
// Accumulator, cuurent value, index, and array.


// let arr = [5,6,3];
// let sum = arr.reduce((accumulator,currEle,index,arr)=>{
//     debugger;
//     return accumulator += currEle;
// })
// console.log(sum);

// let arr = [5,6,3];
// let sum = arr.reduce((accumulator,currEle,index,arr)=>{
//     debugger;
//     return accumulator += currEle;
// },2) //we have known 1 value lrady out of array that is 2
// console.log(sum);

//flat a 2d array

// const arr = [
//     [1,2],
//     ["1","3"],
//     ["am","pm"]
// ];
// let flatArr = arr.reduce((acc,currVal) =>{
//     return acc.concat(currVal);
// })
// console.log(flatArr);

//strings - a js string is zero or more char written inside quotes

// let mName =  "omkesh varshney";
// console.log(mName.length);

// let sen = "we are th-ee \"kings\" of this universe."
// console.log(sen);

// let sen = 'we are th-ee "kings" of this universe.'
// console.log(sen);

// let sen = "we are th-ee 'kings' of this universe."
// console.log(sen);

//finding a string in a string
// the indexof() method returns the index of the first occurance 
// of a specifies text oin a string.

// const myNam = "my name is omkesh varshney and om";
// console.log(myNam.indexOf("varshney",1)); // retunr 11
// console.log(myNam.indexOf("is",1)); ///return -1 as it is not present in the string.
// console.log(myNam.indexOf("om",12));

// const myNam = "my name is omkesh varshney and om";
// let sData = myNam.search("om");
// console.log(sData);

//extracting string parts
// 1. slice() :- it extracts a part of a string and return the extracted part in a new string

// var fruits = 'apple,banana,grapes,guava';
// let res = fruits.slice(0,4)
// let res1 = fruits.slice(0,5)
// let res2 = fruits.slice(6,-4)
// let res3 = fruits.slice(4)
// console.log(`ans1 is ${res}, ans2  is ${res1} and ans3 is ${res2} also ans4 is ${res3}`);
// //substring() is similar to slice but it doesn't accept negative indiices.

// const myNam = "my name is omkesh varshney and om";
// let sData = myNam.substring(1,9)
// console.log(sData);

//substr() is similar to slice but second argument is no of characters

// const myNam = "my name is omkesh varshney and om";
// let sData = myNam.substr(5,14)
// console.log(sData);


// //Replacing string content

// let myName = "my name is omkesh varshney and called as omkesh."
// // console.log(myName.replace('omkesh', 'Omkesh'));
// console.log(myName.replaceAll('omkesh', 'Omkesh'))

//xtracting string char
// // 1. charAt() retrun the char at an specified index
// let myName = "Ay name is Omkesh Varshney and called as omkesh."
// // console.log(myName.charAt(4));
// // console.log(myName.charCodeAt(4))
// // console.log(myName.charAt(0));
// // console.log(myName.charCodeAt(0))
// console.log(myName[3]);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.toString())

// let fName = "om";
// let sname = "var";
// console.log(fName+sname);
// console.log(`${fName} ${sname}`)
// console.log(fName.concat(sname));
// console.log(fName.concat(" ",sname))

//trim method remove the extra white spaces from start and end 
// let fName = "    omkesh  varshney  ";
// console.log(fName);
// console.log(fName.trim())
// console.log(fName.trimStart())
// console.log(fName.trimStart())

//converting a string into an array == split() method

// var txt = "a,e,i ;   k,o,u";
// console.log(txt.split(","))
// console.log(txt.split(";"))
// console.log(txt.split(" "))

///MAth prop 
//if we want to use any mathematical property then there is 
//a  class already in js which have all the propoerties

// console.log(Math.PI);
// console.log(Math.round(Math.PI))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(49))
// console.log(Math.sqrt(50))
// console.log(Math.abs(-26.4))
// console.log(Math.ceil(4.4))
// console.log(Math.ceil(98.1)) //next bigger int
// console.log(Math.floor(33.9))
// console.log(Math.min(1,43,4,2,4,5,2))
// console.log(Math.max(1,43,4,2,4,5,2))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.trunc(-4.9)) //return the integer part of a no


// ## Array Destructuring in ES6

// let myBioData = ["omkesh" , "Varshney",24];
// // let fName = myBioData[0];
// // let sName = myBioData[1];
// // let age = myBioData[2];
// // console.log(fName);

// // let[fName,sName,age] = myBioData;
// // console.log(fName);

// let[fName,sName,age,degree= "B.Tech"] = myBioData;
// console.log(degree);

// ## object destructuring
// const myBioData = {
//     fName : 'Omkesh',
//     sName : 'Varshney',
//     age :23
// }
// // let age = myBioData.age;
// // console.log(age);

// let{fName,age,sName,degree= "B.Tech"} = myBioData;
// console.log(age);

// ## object prop

//we can use dynamic prop
// let myName = "omkesh";
// const myBioData = {
//     [myName] : "HEllo how are u",
//     [20+3] : "my age is 23"
// }
// console.log(myBioData);

//if both key and value are same then there is no need to write both the keys or value

// let mName = "omkesh";
// let mAge = 23;
// const myBioData = {mName,mAge}
// console.log(myBioData)

//spread operators


// const colors = ['red','green','blue','white'];
// //const mColors = ['red','green','blue','white','purple','teal'];
// const mColors = ['purple','teal', ...colors];
// console.log(mColors);

//ES7 -2016
    // const colors = ['red','green','blue','white'];
    // const isPresent = colors.includes('red');
    // console.log(isPresent);

    // console.log(2**3)


//$$$$$$$ ADVANCE JS $$$$$$$$$

// 1. Event Propogation
//     1.1 Event Bubbling - prop starts from bottom to top i.e
//         from event target plase to window phase.
//         by default event bubbling calls up
//     1.2 Event Capturing : prop starts frpm top to bottom i.e from window to button phase by 
//     moving through document -> html -> body. also known as trickling.

    // when an event occurs in an element inside another element and both elemnt gave registered a handle for that event
    // the event propogation mode determines in which order the event receive the event.

// 2. Higher order function
        //create a calculator
    //     const add = (a,b) =>{ //callback fn
    //         return a+b;
    //     }
    //     const subs = (a,b) =>{
    //         return Math.abs(a-b);
    //     }
    //     const mult = (a,b) =>{
    //         return a*b;
    //     }

    //     const calculator = (num1,num2,oper) =>{ //HOF
    //         return oper(num1,num2);
    //     }
    // console.log(calculator(4,1,subs))

// here we are passing a function as an argument into another function.
 //$$$$$$$ HOW JS WORKS AND ASYNC PROGRAMMING $$$$$$$

//  Hoisting in JS - it is a mech where variables and fn declaration are moved
// to the top of their scope before the code executees
// lexical scoping means inner fn can get access to their parents fn
// variables but the vica-versa is not true.


// let a = "Hello guys";
// const first = () => {
//     let b = " how are u?";
//     const second = () => {
//         let c = " hi i am good."
//         console.log(a+b+c);
//     }
//     second();
// }
// first();
 

// diff between sync and async js

// const fun2 = () => {
//     console.log("F2 called");
// }
// const fun1 = () =>{
//     console.log("F1 called");
//     fun2();
//     console.log("F1 called again")
// }
// fun1() //sync js

    // const fun2 = () => {
    //     setTimeout(()=>{
    //         console.log("F2 called");
    //     },1000);
        
    //     }
    // const fun1 = () =>{
    //     console.log("F1 called");
    //     fun2();
    //     console.log("F1 called again")
    //     }
    // fun1() 

//functoin currying ;  it is a technique of evaluating fn with multiple
// arguments , into a swquence of fn with single arguments

// sum(1)(2)(4);
// in other words , when a fn, instead of taking all the arguments at one time,
// takes the first one and return a new fn that takes the scnd one and return a
// new fn which takes pplace the third one and so forth, until all the argumenyts fulfilled;

// const sum = (num) => {
//     return function(num1){
//         return function(num2){
//             console.log(num+num1+num2);
//         }
//     }
// }
// console.log(sum(1)(2)(4))

// const sum = (num) =>  (num1) => (num2)=>console.log(num+num1+num2);
// console.log(sum(1)(2)(4))

//callback hell

// setTimeout(()=>{
//     console.log("work 1");
//     setTimeout(()=>{
//         console.log("work 2");
//         setTimeout(()=>{
//             console.log("work 3");
//             setTimeout(()=>{
//                 console.log("work 4");
//                 setTimeout(()=>{
//                     console.log("work 5");
//                     setTimeout(()=>{
//                         console.log("work 6");
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)










