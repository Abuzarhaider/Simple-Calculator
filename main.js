var a = document.getElementById("one");
var b = document.getElementById("two");
var res = document.getElementById("result");

// Plus operation
document.getElementById("plus").addEventListener("click", function() {
    res.value = parseInt(a.value)+parseInt(b.value);
});

// Minus operation
document.getElementById("minus").addEventListener("click", function() {
    res.value = parseInt(a.value)-parseInt(b.value);
});

// Multiply operation
document.getElementById("multiply").addEventListener("click", function() {
    res.value = parseInt(a.value)*parseInt(b.value);
});

// Divide operation
document.getElementById("divide").addEventListener("click", function() {
    res.value = parseInt(a.value)/parseInt(b.value)
});

// Clear button(AC)
let btnClear = document.getElementById("clear");
let inputs = document.querySelectorAll('input');

btnClear.addEventListener("click", function(){
    inputs.forEach(input => input.value='');
});