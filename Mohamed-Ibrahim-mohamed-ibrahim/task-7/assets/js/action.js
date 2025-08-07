function get_totalprice(){
    const native=document.getElementById("native");
    const native_value=native.value;

    const translated=document.getElementById("translated");
    const translated_value=translated.value;

    const count=document.getElementById("count");
    const count_value=parseFloat(count.value);

     let price
    if(native_value=="arabic"){
        price=count_value*0.8;
    } else{
       price=count_value*0.5;
    }
    const total_price=document.getElementById("price");
    total_price.innerText=price;

}
function light_Mode(){
    const container= document.getElementById("container");
    container.classList.remove("dark");
    container.classList.add("light");
}
function dark_Mode(){
    const container=document.getElementById("container");
    container.classList.add("light");
    container.classList.add("dark");
}