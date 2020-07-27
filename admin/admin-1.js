document.getElementById("complete-btn").addEventListener("click", check);

function check() {
    let p = document.querySelectorAll("main p");
    if (!p || p.length < 3) {
        alert("You didn't make at least 3 p tags in your newsletter");
        return
    }

    let section = document.querySelectorAll("main section");
    if (section.length < 3) {
        alert("You didn't make at least 3 sections tags in your newsletter");
        return
    }

    let newsSection = document.querySelector("#news");
    if (!newsSection) {
        alert("#news section doesn't exist");
        return
    }

    let spotlight = document.querySelector("#villager-spotlight");
    if (!spotlight) {
        alert("#villager-spotlight section doesn't exist");
        return
    }

    let events = document.querySelector("#events");
    if (!events) {
        alert("#events section doesn't exist");
        return
    }

    let header = document.querySelector("main h1");
    if (!header || header.length != 1) {
        alert("You forgot a header for your newsletter!");
        return
    }

    let ul = document.querySelector("main ul");
    let ol = document.querySelector("main ol");
    if (!ol && !ul) {
        alert("You forgot to include a list!");
        return
    }

    alert("The password is: newsletter smooth feathers");
}
