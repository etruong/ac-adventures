document.getElementById("complete-btn").addEventListener("click", check);

function check() {

    let weed = document.querySelectorAll(".weed");

    if (weed.length != 0) {
        alert("You didn't clear out the weeds!");
        return
    }

    let trash = document.querySelectorAll(".trash");
    if (trash.length != 0) {
        alert("You didn't clear out the trash!");
        return
    }

    let present = document.querySelectorAll("#inventory .present");
    if (present.length != 2) {
        alert("You didn't place all the presents in your inventory");
        return
    }

    let axe = document.querySelectorAll("#inventory .axe");
    if (axe.length != 1) {
        alert("You didn't place the axe in your inventory");
        return
    }

    let apple = document.querySelectorAll("#inventory .apple");
    if (apple.length != 5) {
        alert("You didn't place all the apples in your inventory");
        return
    }

    alert("Congrats! The passcode is: home sweet home");
}