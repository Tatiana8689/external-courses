function Sweets(name, weight) {
    this.name = name;
    this.weight = weight;
}

const cookie = new Sweets("Cookie", 15);
const candyWithCaramel = new Sweets("Candy with caramel", 10);
const candyWithChocolate = new Sweets("Candy with chocolate ", 5);
const candyWithNuts = new Sweets("Candy with nuts", 8);
const biscuits = new Sweets("Biscuits", 25);

function Gift(...arg) {
    this.value = [...arg];
}

Gift.prototype.totalWeight = function () {
    giftWeight = this.value.reduce((sum, item) => sum + item.weight, 0); 
    console.log(giftWeight);
};

Gift.prototype.sortSweets = function () {
    sort = this.value.sort((a, b) => a.weight - b.weight);
    console.log(sort);
};

Gift.prototype.findSweets = function (name) {
    this.value.forEach(key => {
        if (key.name === name) {
            console.log(key);
        }
    });
};

const gift = new Gift(biscuits, candyWithCaramel, candyWithNuts);
