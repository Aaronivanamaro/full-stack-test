const Animal = require('../Animal')

class Tiger extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Tiger'
        this.habitat = "Jungle"
        this.sound = "roar"
    }
}

module.exports = Tiger