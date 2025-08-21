let sourceLanguage = document.getElementById("language-source");
let targetLanguage = document.getElementById("language-target");
let targetPrice = document.getElementById("price-source");
let countDisplay = document.getElementById("word-count");
let couponInput = document.getElementById("coupon");

targetPrice.addEventListener("input", () => {
    const sourceLangValue = sourceLanguage.value;
    const targetLangValue = targetLanguage.value;

    countDisplay.innerText = `${getWordCount(sourceLangValue, targetLangValue) * parseFloat(targetPrice.value)}  \n Source Language: ${sourceLangValue}, Target Language: ${targetLangValue}`;
});

couponInput.addEventListener("input", () => {
    if (couponInput.value === "DIP2023") {
        targetPrice.value = (parseFloat(targetPrice.value) * 0.9).toFixed(2);
    }
    
    const sourceLangValue = sourceLanguage.value;
    const targetLangValue = targetLanguage.value;

    countDisplay.innerText = `${getWordCount(sourceLangValue, targetLangValue) * parseFloat(targetPrice.value)}  \n Source Language: ${sourceLangValue}, Target Language: ${targetLangValue}`;
});


const getWordCount = (sourceLanguage, targetLanguage) => {
    if (sourceLanguage === "en" && targetLanguage === "ar") {
        return 0.1;
    } else if (sourceLanguage === "ar" && targetLanguage === "en") {
        return 0.8;
    } else if (sourceLanguage === "en" && targetLanguage === "fr") {
        return 0.7;
    } else if (sourceLanguage === "fr" && targetLanguage === "en") {
        return 0.6;
    } else if (sourceLanguage === "fr" && targetLanguage === "ar") {
        return 0.9;
    } else if (sourceLanguage === "ar" && targetLanguage === "fr") {
        return 0.5;
    }
    return 0;
}