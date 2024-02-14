let newBtn=document.createElement("button");
newBtn.innerText="clickMe!";

console.log(newBtn);

let body = document.querySelector("body");
body.prepend(newBtn);


newBtn.style.backgroundColor="red";
newBtn.style.color="white";