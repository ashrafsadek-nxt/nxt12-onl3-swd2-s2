//get native anguage name
        //const string variable to carry html element
        //let string variable to carry the value
//get translated language name
    //need string variables
        //const string variable to carry html element
        //let string variable to carry the value
//get words count
    //need int variables
        //const string variable to carry html element
        //let float variable to carry the value
            //parseFloat()

//get result heading 
    //need string variables
        //const string variable to carry html element
        //innerText

// Avent => event 
    //needs to add event to the button
    //when event use make the event all codes must be executed
// function => way to organize the code 
    // function syntax 
    //function functionName() {the code}

function getPrice()
{
    const nativeElement = document.getElementById('native');
    let nativeElementValue = nativeElement.value;

    const translatedElement = document.getElementById('translated');
    let translatedElementValue = translatedElement.value;
 
    const countElement = document.getElementById('count');
    let countElementValue = parseFloat(countElement.value);
    let price = countElementValue * 0.5;  
    const priceElement = document.getElementById('price');
    priceElement.innerText = price;
}

let isDark = false;

function toggleMode() {
    if (isDark) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        isDark = false;
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        isDark = true;
    }
}
