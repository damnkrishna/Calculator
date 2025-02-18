const result=document.getElementById("display-screen");



const ids=["0","1","2","3","4","5","6","7","8","9","add","subtract","multiply","divide"];

ids.forEach(id=> {
    const newelement=document.getElementById(id);
    newelement.addEventListener('click',()=>{
        result.value += newelement.textContent;
    });
});

const decimal=document.getElementById("decimal");

const deleteall=document.getElementById("ac");
const deleteprev=document.getElementById("del");

decimal.addEventListener("click", () => {
    const currentValue = result.value;
    const lastNumber = currentValue.split(/[\+\-\*\/]/).pop(); 
    if (!lastNumber.includes(".")) {
        result.value += "."; 
    }
});

deleteall.addEventListener("click", () => {
    result.value = ""; 
});

deleteprev.addEventListener("click", () => {
    result.value = result.value.slice(0, -1); 
});

const equal=document.getElementById("equal");
equal.addEventListener("click",()=>{
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = "Error";
    }
});
