class Room {
    constructor(width, height, ...args) {
        this.devices = [...args];
        this.width = width;
        this.height = height;
    }

    roomSize() {
        console.log(`${this.width * this.height} m2`);
    }

    findDevice(name) {
        this.devices.forEach(key => {
            if (key.name === name) {
                console.log(key);
            }
        });
    }

    powerInputs() {
        const powerArr = [];

        this.devices.forEach(key => {
            if (key.isTurnOn) {
                powerArr.push(key);
            }
        });

        const totalPower = powerArr.reduce((sum, item) => sum = sum + item.power, 0); //eslint-disable-line

        console.log("Power inputs = " + totalPower + " W");
    }
}

class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isTurnOn = false;
    }

    turnOn() {
        if (this.isTurnOn) {
            console.log(`${this.name} alredy power on`);
        } else {
            this.isTurnOn = true;
            console.log(`${this.name} power on`);
        }
    }

    turnOff() {
        if (this.isTurnOn) {
            this.isTurnOn = false;
            console.log(`${this.name} power off`);
        } else {
            console.log(`${this.name} alredy power off`);
        }
    }

}

class Radio extends Device {
    constructor(name, power) {
        super(name, power);
        this.isTurnOn = true;
    }
}

class Television extends Device {
    constructor(name, power) {
        super(name, power);
        this.isTurnOn = true;
    }
}

const radio = new Radio("Radio", 500);
const microwave = new Device("Microwave", 1000);
const printer = new Device("Printer", 1500);
const television = new Television("TV", 2000);

const room = new Room(5, 10, radio, microwave, printer, television);
