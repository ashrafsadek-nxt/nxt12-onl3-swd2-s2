function toggleDiscount() {
    var coupon = document.getElementById("coupon").value;
    var discountDiv = document.getElementById("discountDiv");

    // If coupon is entered, hide the discount field
    if (coupon != "") {
        discountDiv.style.display = "none";
    } else {
        discountDiv.style.display = "block";
    }
}

function getPrice() {
    // Get input values from the form
    var source = document.getElementById("source").value;
    var target = document.getElementById("target").value;
    var count = document.getElementById("count").value;
    var coupon = document.getElementById("coupon").value;
    var discount = document.getElementById("discount").value;

    // Convert input strings to numbers
    count = Number(count);
    discount = Number(discount);

    // Determine price per word based on language pair
    var pricePerWord = 0;

    if (source == "en" && target == "ar") {
        pricePerWord = 0.1;
    } else if (source == "ar" && target == "en") {
        pricePerWord = 0.8;
    } else if (source == "en" && target == "fr") {
        pricePerWord = 0.7;
    } else if (source == "fr" && target == "en") {
        pricePerWord = 0.6;
    } else if (source == "fr" && target == "ar") {
        pricePerWord = 0.9;
    } else if (source == "ar" && target == "fr") {
        pricePerWord = 0.5;
    } else {
        document.getElementById("price").innerText = "Invalid languages!";
        return;
    }

    // Calculate base price
    var total = count * pricePerWord;

    // Apply discount if there's a coupon or a discount percentage
    if (coupon != "") {
        total = total * 0.8; // 20% off with coupon
    } else if (discount > 0) {
        total = total - (total * discount / 100);
    }

    // Display the final price
    document.getElementById("price").innerText = "Total Price: " + total.toFixed(2) + " (pounds)";
}

// Toggle light/dark mode
var isDark = false;

function toggleMode() {
    if (isDark == true) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        isDark = false;
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        isDark = true;
    }
}
