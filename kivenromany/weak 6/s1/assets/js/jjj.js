const btn =document.getElementById("btn1")
function getGrade() {
    const spn =document.getElementById("spn1");
    const inp = document.getElementById("inp1");
    let mark = inp.value ;
    if (mark > 100 || mark< 0)
        {
            spn.innerText = 'wrong value'
    }
    else if (mark >= 85){
        spn.innerText = "excellent"
    }
    else if (mark >= 75){
        spn.innerText = "very good"
    }
    else if (mark >= 65){
        spn.innerText = "good"
    }
    else if (mark >= 50){
        spn.innerText = 'fail'
    }
        else {
        spn.innerText = "pass"
}
}
const inp = document.getElementById('inp2')
inp.addEventListener("input" , showDiv);
function showDiv() {
    let inpvalue =inp.value;
    if (inpvalue === "first") {
    const one = document.getElementById('one')
    one.style.display= 'block'
    }
    else if (inpvalue === "second") {
        const two = document.getElementById('two')
        two.style.display = ' block'
    }
}