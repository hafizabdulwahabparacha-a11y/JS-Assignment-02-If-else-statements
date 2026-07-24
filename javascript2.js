// Check if a number is positive or negative.
// possitive number 0,1,2,3,4,5,6,...number.
// negative number -1,-2,-3,-4,-5,-6,...number

let number1=Number(prompt("Enter Number"));

if(number1 >= 0)
    {
    console.log("positive");
    }

 else
    {
      console.log("negative")
   };

// Check if a number is even or odd.
// odd number{1,3,5,7,....}
// even{2,4,6,8,...number}
// example= even number=4/2= reminder is 2 even number
// example= odd number=4/3=reminder is 1 odd number
// % means = reminder number
// == means check equal value

let number = Number(prompt("Enter your Number"));

if (number % 3 == 0 ){
   console.log("odd :" , number)
}
else{
   console.log("Even :" , number)
}

// Check if a person's age is 18 or above. If yes, print "Eligible to vote", otherwise print "Not eligible to vote".

let persons=prompt("Enter your Name");
console.log("voter Name:", persons);
let age=Number(prompt("enter your age"));

if (age>=18){
   console.log("Eligible to vote",age);
}
else{
      console.log("Not eligible to vote",age);
}


// Check if a student has passed. Passing marks are 50.

let studentName=prompt("Enter Student Name");
console.log("student Name" ,studentName);
let marks=Number(prompt("Enter Student Marks"));
if (marks>=50){
   console.log("passed",marks);
} 
else{
      console.log("failed",marks);

}

// Check if a number is greater than 100. If yes, print "Large Number", otherwise print "Small Number".

let number2=Number(prompt("Enter Number"));
if (number2>100){
   console.log("Large Number",number2);
}
else
{
      console.log("Small Number",number2);

}

// Check if a password is equal to "admin123". If yes, print "Login Successful", otherwise print

let adminName=prompt("Enter Admin Name");
console.log("AdminName",adminName);
// A password is not a number; it is a string value, so we do not use Number().
let password=prompt("Enter password");
if (password==="admin123"){
   console.log("Login Successful",password);
}
else{
      console.log("login Failed",password);

} 

// Check if a user has enough balance to buy an item. If the balance is greater than or equal to the item price, print "Purchase Successful", otherwise print "Insufficient Balance".
let itemName=prompt("Enter item Name");
console.log("Item Name",itemName);
let balance=Number(prompt ("Enter your balance"));
console.log("Balance",balance);
let itemPrice=Number(prompt("Enter the item price"));
if (balance>=itemPrice){
  console.log(itemName,"Purchase Successful",balance);
}
else{
   console.log(itemName,"Insufficient Balance",balance);
}
// Check if a temperature is above 30°C. If yes, print "It's Hot", otherwise print "Weather is Pleasant".

let temperature=Number(prompt("Enter Temperature Number"));
if(temperature>30){
   console.log( temperature,"It's Hot");
}
else {
      console.log( temperature,"Weather is Pleasant");

}

// Check if a number is divisible by 5.
let number3=Number(prompt("Enter a Number"));
if (number3%5===0){
   console.log(number3,"divisible by 5");
}
else
{
      console.log(number3,"Not Divisible by 5");

}

// Check if a traffic light is "green". If yes, print "Go", otherwise print "Stop".
let trafficLight=prompt("Enter the trafic light color");
if(trafficLight==="green"){
   console.log(trafficLight,"Go");
}

else{
      console.log(trafficLight,"stop");
}

// Check if a username is "admin". If yes, print "Welcome Admin", otherwise print "Access Denied".
let userName=prompt("Enter User Name");
if(userName==="admin")
{
   console.log( userName,"Welcome Admin");
}
else {
   console.log( userName,"Access Denied");

}
// Check if a person's height is 170 cm or more. If yes, print "Tall", otherwise print "Average Height".
let personName=prompt("Enter Your Name");
console.log("person Name", personName);
let personsHeight=Number(prompt ("Enter your height"));
if (personsHeight>=170){
   console.log("Tall", personsHeight);
}
else 
{
    console.log("Average Height", personsHeight);
  
}
// Check if a user is logged in (true or false). If logged in, print "Welcome Back", otherwise print "Please Login".
let userName1=prompt("Enter your name");
console.log("Name", userName1)
let userLoggedIn=prompt("Are you logged in")
if (userLoggedIn==="true"){
   console.log(userLoggedIn, "Welcome Back");
}
else {
      console.log(userLoggedIn, "Please Login");

}
// Check if a person's age is 60 or above. If yes, print "Senior Citizen", otherwise print "Not a Senior Citizen".
let personName3=prompt("Enter your name");
console.log("Name:",personName3);
person3Age=Number(prompt("enter your age"));
if(person3Age>=60){
   console.log("Senior Citizen", person3Age)
}
else 
{
     console.log("Not a Senior Citizen", person3Age)
 
}

// Check if a shop is open (true or false). If open, print "Shop is Open", otherwise print "Shop is Closed".

let shopStatus=prompt("Is your shope open");
if(shopStatus==="open")
{
   console.log(shopStatus, "shpe is open")
}
else 
{
      console.log(shopStatus, "shpe is closed")

}
