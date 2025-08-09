const btn1=document.getElementById('btn1');
const dv=document.getElementById('container');
btn1.addEventListener('click',showProducts);

function showProducts()
{
 if (dv.style.display === "none" || dv.style.display === "") {
        dv.style.display = "grid"; 
    } 
    
    else {
        dv.style.display = "none";
    }
}


