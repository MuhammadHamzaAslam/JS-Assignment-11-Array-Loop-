let arr1 = [[],[]]
let arr2 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]


document.write(`Counting <br>`)
for(let i = 0; i<=10;i++){
    document.write(`<h6>${i} </h6><br>`)
}


let num = prompt("Enter a Number to show its multiplication table", "2");
let len = prompt("Enter a length","10");

document.write("<h6>","The Multiplication Table is",num,"</h6>")
document.write("<h6>","The length of Table is",len,"</h6>","<br>")

for (let i = 1; i <= len; i++) {
    document.write("<h6>",num + " x " + i + "=" + (num * i) ,"</h6>");
}

document.write("<br>")

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(`<h6>${fruits[i]}</h6>`);

}
document.write("<br>")
for (var i = 0; i < fruits.length; i++) {
    document.write(`<h6>Element at index ${i} is ${fruits[i]} </h6>`);
}
document.write("<br>")
document.write("<h6> Counting </h6>")
for(let i = 1 ;i<=15;i++){
    document.write(` ${i} `)
}
document.write("<br>")
document.write("<br>")


document.write("<h6>Reverse Counting </h6>");
for (let i = 15; i >= 1; i--) {
    document.write(` ${i} `);
}

document.write("<br>")
document.write("<br>")

document.write("<h6>Even Counting </h6>");
for (let i = 0; i <= 20; i++) {
    if(i % 2 == 0){
       document.write(" ",i);
    }
}

document.write("<br>")
document.write("<br>")

document.write("<h6>Odd Counting </h6>");
for (let i = 0; i <= 20; i++) {
    if(i % 2 !== 0){
       document.write(" ",i);
    }
}

document.write("<br>")
document.write("<br>")

document.write("<h6>Series </h6>");
for (let i = 2; i <= 20; i++) {
    if(i % 2 == 0){
       document.write(" ",i,"k");
    }
}
document.write("<br>")
document.write("<br>")

let A = ["cake", "apple pie", "cookie", "chips", "patties"]
let ne = prompt("Welcome To Hamza Bakery. What Do You Want To Order Sir/Ma'am","cake").toLowerCase()
let flag = false
for(let i = 0 ;i < A.length ; i++){
  if(ne == A[i]){
    flag = true
    document.write("<br>")
    document.write("<h6>",ne," is avaliable at index "+ i," In Our Bakery","</h6>");
    break;
  }
}
if(flag == true){
}
else{
    document.write("<h6>","We Are Sorry",ne," Not avaliable In Our Bakery","</h6>");
}


let X = [24, 53, 78, 91, 12]
let larg = X[0]
for(let i = 0 ; i < X.length ; i++){
    if(X[i]>larg){
        console.log(X[i],"largest num");
    }
}

document.write("<br>")
document.write("<br>")

let X1 = [24, 53, 78, 91, 12];
let larg22 = X[0]; 
for (let i = 0; i < X.length; i++) { 
    if (X[i] > larg) {
        larg = X[i]; 
    }
}
document.write("<h6>","Array Items: ",X,"</h6>")
document.write("<h6>",larg, " ", "is the largest number.","</h6>");

document.write("<br>")
document.write("<br>")

let larg1 = X[0]; 
for (let i = 0; i < X.length; i++) { 
    if (X[i] < larg) {
        larg = X[i]; 
    }
}
document.write("<h6>","Array Items: ",X,"</h6>")
document.write("<h6>",larg, " ", "is the smallest number.","</h6>");

document.write("<br>")
document.write("<br>")

let num1 = 5
for (let i = 1; i <= 20; i++) {
    document.write((num1 * i)," ");
}