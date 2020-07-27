const store = {
    apple: {
        price: 3,
        src: "https://www.models-resource.com/resources/big_icons/17/16838.png",
        count: 2
    },
    peach: {
        price: 5,
        src: "https://www.models-resource.com/resources/big_icons/36/35112.png",
        count: 3
    },
    pear: {
        price: 3,
        src: "https://www.models-resource.com/resources/big_icons/36/35112.png",
        count: 2
    },
    cherry: {
        price: 2,
        src: "https://www.models-resource.com/resources/big_icons/36/35111.png",
        count: 6
    },
    orange: {
        price: 6,
        src: "https://www.models-resource.com/resources/big_icons/36/35113.png",
        count: 3
    },
    banana: {
        price: 4,
        src: "https://aclilyofthevalley.files.wordpress.com/2013/06/fruit-banana.jpg",
        count: 2
    },
    durian: {
        price: 10,
        src: "https://aclilyofthevalley.files.wordpress.com/2013/06/fruit-durian.jpg",
        count: 1
    }
}

const storeItems = Object.keys(store); // array of all items sold in store

// Create all item options that the store can order
const dropdown = document.querySelector("select");
for (let i = 0; i < storeItems.length; i++) {
    let option = document.createElement("option");
    option.textContent = storeItems[i];
    option.value = storeItems[i];
    dropdown.appendChild(option);
}

populateStore();
const sellBtn = document.getElementById("sell-btn");
sellBtn.addEventListener("click", sell);

function sell() {
    const selectedItems = document.querySelectorAll(".selected");
    let total = 0;
    for (let i = 0; i < selectedItems.length; i++) {
        let fruit = selectedItems[i];
        total += store[fruit.alt].price;
        fruit.remove();
    }
    changeProfit(total);
}

function changeProfit(num) {
    let profit = document.querySelector("#profit");
    profit.textContent = parseInt(profit.textContent) + num;
}

function populateStore() {
    const storeContainer = document.getElementById("store");
    for (let i = 0; i < storeItems.length; i++) {
        let fruit = storeItems[i];
        let info = store[fruit];
        for (let num = 0; num < info.count; num++) {
            storeContainer.appendChild(createFruit(fruit, info));
        }
    }
}

function createFruit(type, info) {
    const fruit = document.createElement("img");
    fruit.src = info.src;
    fruit.alt = type;
    fruit.classList.add("item");
    fruit.classList.add(type);
    fruit.addEventListener("click", function () {
        fruit.classList.toggle("selected");
    });
    return fruit;
}

