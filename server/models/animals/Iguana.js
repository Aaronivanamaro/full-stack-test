const Animal = require('../Animal')

class Iguana extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Iguana'
        this.habitat = "Jungle"
        this.sound = "iig"
    }
}

module.exports = Iguana