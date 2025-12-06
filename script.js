const name = "Hamza";
const totalMarks = 500;

let english = 75;
let urdu =90 ;
let math = 85;
let science =78 ;
let islamiat = 72;

let obtainMarks = english + urdu + math + science + islamiat;

let percentage = (obtainMarks / totalMarks)* 100;

let grade;

if(percentage <= 100 && percentage >= 80){
    grade = "A+";
}else if(percentage <= 79 && percentage >= 70){
    grade = "A"
}else if(percentage <= 69 && percentage >= 60){
    grade = "B"
}else if(percentage <= 59 && percentage >= 50){
    grade = "C"
}else if(percentage <= 49 && percentage >= 40){
    grade = "D"
}else{
    grade = "Fail"
}

document.write(`Student Name: ${name} <br/>
    English: ${english} <br/> Math: ${math} <br/>
    Urdu: ${urdu} <br/> Science ${science} <br/>
    Islamiat: ${islamiat} <br/>
    <p> Total Marks: ${totalMarks} </p>
    <p> Obtain Marks: ${obtainMarks}<p/>
    <p> Percentage: ${percentage}</p>
    <p> Grade: ${grade}`
)