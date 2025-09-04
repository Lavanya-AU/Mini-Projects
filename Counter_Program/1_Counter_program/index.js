let count = 0;
let countLabel = document.getElementById("element"); 
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let increment = document.getElementById("increment");

decrement.onclick = function(){
    count--
    countLabel.textContent = count;
}
reset.onclick = function(){
    count = 0
    document.getElementById("element").textContent = count
}
increment.onclick = function(){
    count++;
    countLabel.textContent = count
    
}


