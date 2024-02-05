const productSearch=document.getElementById("productSearch");
productSearch.addEventListener("keyup",e=>{
    let currentValue=e.target.value.toLowerCase();
    console.log(currentValue);
})