
//&Javascipt Console API
console.log("Hello World")
console.warn("this is warning")
console.error("This is a error")

//Javascript Variables
var num1 = 34;
var num2 = 56;
console.log(num1 + num2);

//Data types in Javascript
var str1 = ("This is a string");
var str2 = ("This also a string");

//Objects
var marks = {
    Ravi: 54,
    Shastri: 45,
    Sohan: 87
}

//Operators in Javascript
var number1 = 32;
var number2 = 48;
console.log("The addidtion is :", number1 + number2);
console.log("The multiplication is :", number1 * number2);
console.log("The division is :", number1 / number2);
console.log("The comparision :", number1 == number2) //logical operators

// If else adder
var age = 34;
if (age > 34) {
    console.log("He is adult");
}
else if (age == 34) {
    console.log("He is a fine");

}
else {
    console.log("he is kid");
}


var arr = [2, 8, 7, 6, 4];
console.log(arr);


/*for loop
var arr=[2,8,7,6,4];
for(var i=0;i<arr.length;i++)
    {
        console.log(arr[i])
    }
*/
/* arr.forEach(function (element)
 {
     console.log(element);
 })
*/
//While loop
var arr = [1, 2, 3, 4, 5, 6, 7];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

let myarr = ["name", "carry", "active", "True"];
console.log(myarr.length);
console.log(myarr);
//Array Methods
myarr.pop();
myarr.push("Key");
console.log(myarr);
let mystring=("Srinjoy is a good boy");
/*console.log(mystring.length);
console.log(mystring.indexOf("good"));
console.log(mystring.indexOf("is"));
*/
console.log(mystring.slice(0,7));
let mydate=new Date();
console.log(mydate.getTime());

//DOM Manipulation
let elem=document.getElementById('click');
console.log(elem);
let elemClass = document.getElementsByClassName("container");
console.log(elemClass[0]);
//elemClass[0].style.background ="yellow";
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');

//Selector using query
sel=document.querySelector('.container');
console.log(sel)
sel=document.querySelectorAll('.container');
console.log(sel)

function clicked()
{
    console.log('The button was clicked');
}
    /*
window.onload = function(){
    console.log('The button was loaded');  
}
//Event in Javascript
firstContainer.addEventListener('click',function(){
    console.log('Click hua')
})
    
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML =prevHTML;

    console.log("Mouse up when clicked the container");
    })
firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
    console.log("Mouse down when clicked on trhe container");

})
*/
//Set time out and set interval
summ=(a,b) =>{
    return a+b;

}
logkaro =() =>{
    console.log("I am Your log");
}
//set time out  and set interval
setTimeout(logkaro,2000);
localStorage.setItem('name' ,'harry')
//localStorage.removeItem()

//Template Literals -backtiks
a=34;
console.log('This is my'[a]);
console.log("Hello World");