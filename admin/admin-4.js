document.getElementById("complete-btn").addEventListener("click", check);

function check() {
    let profit = document.querySelector("#profit");
    if (parseInt(profit.textContent) != 75) {
        alert("Looks like the profit value was not updated correctly!");
        return
    }

    let storeDiv = document.querySelector("#store");
    if (storeDiv.innerHTML != "") {
        alert("Looks like you didn't clear everything from the store!");
        return
    }

    alert("Congratulations! The password is: Gotta Get Bells");
}