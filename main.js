let n1 =parseFloat(prompt("inter your frist number"));
let n2 =parseFloat(prompt("inter your secound number"));
let n3 =parseFloat(prompt("inter your third number"));
let n4 =parseFloat(prompt("inter your fourth number"));

document.getElementById("p1").innerHTML= "প্রথম সংখ্যাটি ছিল -- " + n1;
document.getElementById("p2").innerHTML= "দ্বিতীয় সংখ্যাটি ছিল -- " + n2;
document.getElementById("p3").innerHTML= "তৃতিয় সংখ্যাটি ছিল -- " + n3;
document.getElementById("p4").innerHTML= "চতুর্থ সংখ্যাটি ছিল -- " + n4;

let max1 =Math.max(n1,n2,n3,n4);

document.getElementById("mx").innerHTML= "সবচেয়ে বড় সংখ্যাটি -" + max1;
