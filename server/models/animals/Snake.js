const Animal = require('../Animal')

class Snake extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Snake'
        this.habitat = "Jungle"
        this.sound = "sss"
    }
}

module.exports = Snake