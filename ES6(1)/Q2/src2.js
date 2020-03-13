
// Answer 2

console.log("answer 2");
var ar = [];
ar = document.querySelectorAll("li");
//  console.log(ar);
for(i = 0; i < ar.length; i++){
  let temp=ar[i].dataset.time.split(":");
console.log(temp[1])

if(ar[i].textContent=="Flexbox Video"){
console.log(ar[i]);
}

console.log(ar[i].dataset.time)
}

