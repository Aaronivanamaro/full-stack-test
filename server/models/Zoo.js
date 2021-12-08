const Eagle = require('./animals/Eagle');
const Fox = require('./animals/Fox');
const Giraffe = require('./animals/Giraffe');
const Iguana = require('./animals/Iguana');
const Lion = require('./animals/Lion');
const Monkey = require('./animals/Monkey');
const Snake = require('./animals/Snake');
const Tiger = require('./animals/Tiger');
const Zebra = require('./animals/Zebra');

class Zoo {
  constructor(name, animals, value) {
    this.name = name;
    this.animals = animals;
    this.data = [];
    this.value = value;
    this.welcome = '';
  }

  init() {
    this.welcome = (`Welcome to ${this.name} Zoo!`);
    this.animals.map(animal => {
      switch (animal.specie) {
        case "Eagle":
          this.data.push(new Eagle(animal.name, animal.sex, animal.specie))
          break;
        case "Fox":
          this.data.push(new Fox(animal.name, animal.sex, animal.specie))
          break;
        case "Giraffe":
          this.data.push(new Giraffe(animal.name, animal.sex, animal.specie))
          break;
        case "Iguana":
          this.data.push(new Iguana(animal.name, animal.sex, animal.specie))
          break;
        case "Lion":
          this.data.push(new Lion(animal.name, animal.sex, animal.specie))
          break;
        case "Monkey":
          this.data.push(new Monkey(animal.name, animal.sex, animal.specie))
          break;
        case "Snake":
          this.data.push(new Snake(animal.name, animal.sex, animal.specie))
          break;
        case "Tiger":
          this.data.push(new Tiger(animal.name, animal.sex, animal.specie))
          break;
        case "Zebra":
          this.data.push(new Zebra(animal.name, animal.sex, animal.specie))
          break;
      }
    })  
  }

  startSpeaking() {
    this.data.map(animal => {
      animal.speak(this.value || "Welcome to the zoo");
    })
  }
}

module.exports = Zoo;