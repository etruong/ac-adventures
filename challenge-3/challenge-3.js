const contacts = {
    125901: {
        name: "Alfonso",
        photo: "https://vignette.wikia.nocookie.net/animalcrossing/images/4/49/175px-Alfonso_NH.png/revision/latest?cb=20200712012447",
        message: "What's up champ?"
    },
    556791: {
        name: "Vesta",
        photo: "https://villagerdb.com/images/villagers/full/vesta.91e4fd4.png",
        message: "Hey how's it going sugar?"
    },
    223891: {
        name: "Lily",
        photo: "https://dodo.ac/np/images/4/42/Lily_NH.png",
        message: "Hi hi nice to hear from you!"
    }
}
const input = document.getElementById("input");

// Example code:
const button2 = document.getElementById("2");
button2.addEventListener("click", two);
function two() {
    input.textContent += "2";
}

// Adds functionality to back button:
const backButton = document.getElementById("back-btn");
backButton.addEventListener("click", back);
function back() {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1);
}