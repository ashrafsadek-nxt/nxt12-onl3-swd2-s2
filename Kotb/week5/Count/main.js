const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const countDisplay = document.getElementById("count");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerText = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    countDisplay.innerText = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.innerText = count;
});