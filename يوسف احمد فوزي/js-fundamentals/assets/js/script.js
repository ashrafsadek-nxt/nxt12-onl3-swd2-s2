// Global variables
let currentArray = [];
let currentPerson = {};

// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".topic-section");

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTopic = this.getAttribute("data-topic");

      // Update active nav button
      navButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Show target section
      sections.forEach((section) => section.classList.remove("active"));
      document.getElementById(targetTopic).classList.add("active");
    });
  });
});

// Introduction Functions
function showWelcomeMessage() {
  const output = document.getElementById("welcome-output");
  const messages = [
    "🎉 Welcome to JavaScript!",
    "🚀 You just executed your first JavaScript function!",
    "💡 This is how interactive websites work!",
    "👨‍💻 Keep learning and building amazing things!",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  output.innerHTML = `<p style="font-size: 1.2rem; text-align: center; padding: 1rem;">${randomMessage}</p>`;

  // Add some animation
  output.style.animation = "none";
  output.offsetHeight; // Trigger reflow
  output.style.animation = "fadeInUp 0.5s ease-out";
}

// Variables Functions
function createVariable() {
  const varName = document.getElementById("varName").value.trim();
  const varValue = document.getElementById("varValue").value.trim();
  const output = document.getElementById("variable-output");

  if (!varName) {
    output.innerHTML =
      '<p style="color: #ffcccc;">❌ Please enter a variable name!</p>';
    return;
  }

  // Simulate variable creation
  const displayValue = isNaN(varValue) ? `"${varValue}"` : varValue;

  output.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 6px; margin-top: 1rem;">
            <h4>✅ Variable Created Successfully!</h4>
            <p><strong>Declaration:</strong> <code>let ${varName} = ${displayValue};</code></p>
            <p><strong>Type:</strong> ${
              typeof varValue === "string" && isNaN(varValue)
                ? "string"
                : "number"
            }</p>
            <p><strong>Value:</strong> ${varValue || "undefined"}</p>
        </div>
    `;
}

// Data Types Functions
function detectType() {
  const input = document.getElementById("typeInput").value;
  const output = document.getElementById("type-output");

  if (input === "") {
    output.innerHTML = '<p style="color: #ffcccc;">Please enter a value!</p>';
    return;
  }

  let actualValue;
  let detectedType;
  let description;

  // Try to determine the actual type
  if (input === "true" || input === "false") {
    actualValue = input === "true";
    detectedType = "boolean";
    description = "A logical value (true or false)";
  } else if (input === "null") {
    actualValue = null;
    detectedType = "null";
    description = "Represents no value";
  } else if (input === "undefined") {
    actualValue = undefined;
    detectedType = "undefined";
    description = "Variable declared but not assigned";
  } else if (!isNaN(input) && input.trim() !== "") {
    actualValue = Number(input);
    detectedType = "number";
    description = "Numeric data (integer or decimal)";
  } else if (input.startsWith("[") && input.endsWith("]")) {
    detectedType = "array";
    description = "A list of values";
  } else if (input.startsWith("{") && input.endsWith("}")) {
    detectedType = "object";
    description = "A collection of key-value pairs";
  } else {
    actualValue = input;
    detectedType = "string";
    description = "Text or character data";
  }

  const typeColors = {
    string: "#e74c3c",
    number: "#3498db",
    boolean: "#2ecc71",
    object: "#9b59b6",
    array: "#f39c12",
    null: "#95a5a6",
    undefined: "#95a5a6",
  };

  output.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 6px;">
            <h4>🔍 Type Detection Result</h4>
            <p><strong>Input:</strong> ${input}</p>
            <p><strong>Type:</strong> <span style="color: ${typeColors[detectedType]}; font-weight: bold;">${detectedType}</span></p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>JavaScript Check:</strong> <code>typeof ${input}</code></p>
        </div>
    `;
}

// Operators Functions
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const output = document.getElementById("calc-output");

  if (isNaN(num1) || isNaN(num2)) {
    output.innerHTML =
      '<p style="color: #ffcccc;">❌ Please enter valid numbers!</p>';
    return;
  }

  let result;
  let operation;

  switch (operator) {
    case "+":
      result = num1 + num2;
      operation = "Addition";
      break;
    case "-":
      result = num1 - num2;
      operation = "Subtraction";
      break;
    case "*":
      result = num1 * num2;
      operation = "Multiplication";
      break;
    case "/":
      if (num2 === 0) {
        output.innerHTML =
          '<p style="color: #ffcccc;">❌ Cannot divide by zero!</p>';
        return;
      }
      result = num1 / num2;
      operation = "Division";
      break;
    case "%":
      result = num1 % num2;
      operation = "Modulus (Remainder)";
      break;
  }

  output.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 6px; text-align: center;">
            <h4>🧮 ${operation} Result</h4>
            <p style="font-size: 1.5rem;"><strong>${num1} ${operator} ${num2} = ${result}</strong></p>
            <p><code>JavaScript: ${num1} ${operator} ${num2}</code></p>
        </div>
    `;
}

// Conditions Functions
function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const output = document.getElementById("age-output");

  if (isNaN(age) || age < 0) {
    output.innerHTML =
      '<p style="color: #ffcccc;">❌ Please enter a valid age!</p>';
    return;
  }

  let message, category, emoji, color;

  if (age >= 65) {
    message = "You're a senior citizen. Enjoy your golden years!";
    category = "Senior";
    emoji = "👴";
    color = "#e67e22";
  } else if (age >= 18) {
    message =
      "You're an adult. You can vote, drive, and take full responsibility!";
    category = "Adult";
    emoji = "👨";
    color = "#27ae60";
  } else if (age >= 13) {
    message = "You're a teenager. Enjoy these exciting years!";
    category = "Teenager";
    emoji = "🧑";
    color = "#3498db";
  } else if (age >= 3) {
    message = "You're a child. Keep learning and playing!";
    category = "Child";
    emoji = "👶";
    color = "#e74c3c";
  } else {
    message = "You're a toddler. Aren't you a bit young for coding?";
    category = "Toddler";
    emoji = "👶";
    color = "#f39c12";
  }

  output.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 6px; text-align: center;">
            <h4 style="color: ${color};">${emoji} ${category} (Age: ${age})</h4>
            <p>${message}</p>
            <div style="margin-top: 1rem; padding: 0.5rem; background: rgba(0,0,0,0.1); border-radius: 4px;">
                <strong>Code Logic:</strong><br>
                <code>if (age >= ${
                  age >= 65 ? "65" : age >= 18 ? "18" : age >= 13 ? "13" : "3"
                }) { ... }</code>
            </div>
        </div>
    `;
}

// Loops Functions
function generatePattern() {
  const size = parseInt(document.getElementById("patternSize").value);
  const type = document.getElementById("patternType").value;
  const output = document.getElementById("pattern-output");

  if (isNaN(size) || size < 1 || size > 10) {
    output.innerHTML =
      '<p style="color: #ffcccc;">❌ Please enter a size between 1 and 10!</p>';
    return;
  }

  let pattern = "";
  let description = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      switch (type) {
        case "stars":
          pattern += "★ ";
          break;
        case "numbers":
          pattern += j + " ";
          break;
        case "letters":
          pattern += String.fromCharCode(64 + j) + " ";
          break;
      }
    }
    pattern += "\n";
  }

  switch (type) {
    case "stars":
      description = "Star Pattern";
      break;
    case "numbers":
      description = "Number Pattern";
      break;
    case "letters":
      description = "Letter Pattern";
      break;
  }

  output.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 6px;">
            <h4>🔄 ${description} (Size: ${size})</h4>
            <pre style="font-size: 1.2rem; line-height: 1.4; text-align: center; margin: 1rem 0;">${pattern}</pre>
            <div style="background: rgba(0,0,0,0.1); padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;">
                <strong>Loop Code:</strong><br>
                <code>for (let i = 1; i <= ${size}; i++) {<br>
                &nbsp;&nbsp;for (let j = 1; j <= i; j++) {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;// Print pattern<br>
                &nbsp;&nbsp;}<br>
                }</code>
            </div>
        </div>
    `;
}

// Functions Functions
function createGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const greetingType = document.getElementById("greetingType").value;
  const output = document.getElementById("greeting-output");

  if (!name) {
    output.innerHTML =
      '<p style="color: #ffcccc;">❌ Please enter your name!</p>';
    return;
  }

  const greetings = {
    hello: `Hello, ${name}! 👋`,
    welcome: `Welcome, ${name}! 🎉`,
    hi: `Hi there, ${name}! 😊`,
    greetings: `Greetings, ${name}! 🤝`,
  };

  const greeting = greetings[greetingType];

  output.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 6px; text-align: center;">
            <h4 style="font-size: 1.5rem; margin-bottom: 1rem;">${greeting}</h4>
            <div style="background: rgba(0,0,0,0.1); padding: 0.5rem; border-radius: 4px;">
                <strong>Function Code:</strong><br>
                <code>function createGreeting(name, type) {<br>
                &nbsp;&nbsp;return \`${
                  greetingType.charAt(0).toUpperCase() + greetingType.slice(1)
                }, \${name}!\`;<br>
                }</code>
            </div>
        </div>
    `;
}

// Arrays Functions
function addToArray() {
  const item = document.getElementById("arrayItem").value.trim();
  const arrayContent = document.getElementById("array-content");

  if (!item) {
    document.getElementById("arrayItem").placeholder = "Please enter an item!";
    return;
  }

  currentArray.push(item);
  updateArrayDisplay();
  document.getElementById("arrayItem").value = "";
  document.getElementById("arrayItem").placeholder = "Add new item";
}

function removeFromArray() {
  if (currentArray.length === 0) {
    document.getElementById("array-content").innerHTML = "[] - Array is empty!";
    return;
  }

  currentArray.pop();
  updateArrayDisplay();
}

function clearArray() {
  currentArray = [];
  updateArrayDisplay();
}

function updateArrayDisplay() {
  const arrayContent = document.getElementById("array-content");
  const displayArray = currentArray.map((item) => `"${item}"`).join(", ");

  arrayContent.innerHTML = `[${displayArray}]`;

  // Add some stats
  const arrayDisplay = document.getElementById("array-display");
  const stats = `
        <div style="margin-top: 1rem; padding: 0.5rem; background: rgba(0,0,0,0.1); border-radius: 4px;">
            <strong>Array Info:</strong><br>
            Length: ${currentArray.length} | 
            Last Item: ${
              currentArray.length > 0
                ? `"${currentArray[currentArray.length - 1]}"`
                : "None"
            } |
            First Item: ${
              currentArray.length > 0 ? `"${currentArray[0]}"` : "None"
            }
        </div>
    `;

  if (!arrayDisplay.querySelector(".array-stats")) {
    const statsDiv = document.createElement("div");
    statsDiv.className = "array-stats";
    statsDiv.innerHTML = stats;
    arrayDisplay.appendChild(statsDiv);
  } else {
    arrayDisplay.querySelector(".array-stats").innerHTML = stats;
  }
}

// Objects Functions
function createPerson() {
  const name = document.getElementById("personName").value.trim();
  const age = document.getElementById("personAge").value;
  const city = document.getElementById("personCity").value.trim();
  const hobby = document.getElementById("personHobby").value.trim();
  const output = document.getElementById("object-output");

  if (!name || !age || !city || !hobby) {
    output.innerHTML =
      '<p style="color: #ffcccc;">❌ Please fill in all fields!</p>';
    return;
  }

  currentPerson = {
    name: name,
    age: parseInt(age),
    city: city,
    hobby: hobby,
    greet: function () {
      return `Hello, I'm ${this.name} from ${this.city}!`;
    },
  };

  output.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 6px;">
            <h4>👤 Person Profile Created!</h4>
            <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 4px; margin: 1rem 0;">
                <strong>Object Properties:</strong><br>
                <code>name: "${currentPerson.name}"</code><br>
                <code>age: ${currentPerson.age}</code><br>
                <code>city: "${currentPerson.city}"</code><br>
                <code>hobby: "${currentPerson.hobby}"</code>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 4px;">
                <strong>Greeting Method:</strong><br>
                "${currentPerson.greet()}"
            </div>
            <div style="background: rgba(0,0,0,0.1); padding: 0.5rem; border-radius: 4px; margin-top: 1rem; font-size: 0.9rem;">
                <strong>Object Code:</strong><br>
                <code>let person = {<br>
                &nbsp;&nbsp;name: "${name}",<br>
                &nbsp;&nbsp;age: ${age},<br>
                &nbsp;&nbsp;city: "${city}",<br>
                &nbsp;&nbsp;hobby: "${hobby}"<br>
                };</code>
            </div>
        </div>
    `;

  // Clear form
  document.getElementById("personName").value = "";
  document.getElementById("personAge").value = "";
  document.getElementById("personCity").value = "";
  document.getElementById("personHobby").value = "";
}
