const modeBtn = document.getElementById("mode");
const body = document.body;


modeBtn.onclick = () => {
    if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
        modeBtn.textContent = "Switch to Light Mode";
        localStorage.setItem("mode", "dark");
    } else {
        body.classList.replace("dark-mode", "light-mode");
        modeBtn.textContent = "Switch to Dark Mode";
        localStorage.setItem("mode", "light");
    }
};
