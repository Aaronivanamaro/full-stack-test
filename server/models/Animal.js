class Animal {
    constructor(name, sex, specie) {
        this.name = name;
        this.sex = sex;
        this.specie = specie;
        this.phrase = "";
        this.energy = 0;
    }

    speak(value) {
        const newValue = value.split(" ");
        const newArray = newValue.map(item => item.concat(' ', this.sound)).join(' ');
        this.energy -= 3
        return this.phrase = newArray;    
    }
}

module.exports = Animal