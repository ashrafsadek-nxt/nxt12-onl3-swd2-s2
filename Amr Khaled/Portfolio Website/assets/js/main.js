const themeToggle = document.getElementById('theme-switch-checkbox');
const body = document.body;

const setTheme = (isLightMode)=>{
    if(isLightMode){
        body.classList.add('light-mode');
        localStorage.setItem('theme','light');
    }
    else{
        body.classList.remove('light-mode');
        localStorage.setItem('theme','dark');
    }
};

const savedTheme = localStorage.getItem('theme');

if(savedTheme === 'light'){
    setTheme(true);
    themeToggle.checked = true;
}
else{
    setTheme(false);
    themeToggle.checked = false;
}

themeToggle.onclick = function(){
    setTheme(themeToggle.checked)
}