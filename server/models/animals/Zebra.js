const Animal = require('../Animal')

class Zebra extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Zebra'
        this.habitat = "Jungle"
        this.sound = "zed"
    }
}

module.exports = Zebra