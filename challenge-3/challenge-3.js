const contacts = {
    125901: {
        name: "",
        photo: "",
        message: ""
    },
    556791: {
        name: "",
        photo: "",
        message: ""
    },
    223891: {
        name: "",
        photo: "",
        message: ""
    }
}
const input = document.getElementById("input");

// Example code:
const button2 = document.getElementById("2");
button2.addEventListener("click", two);
function two() {
    input.textContent += "2";
}

const backButton = document.getElementById("back-btn");
backButton.addEventListener("click", back);
function back() {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1);
}