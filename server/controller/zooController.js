const createZoo = require("../utils/createZoo");

const zooController = (req, res) => {
    const zooName = req.body.data[0];
    const animals = req.body.data[1]; 
    const phrase = req.body.data[2];
    
    try {
        const zoo = createZoo(zooName, animals, phrase);
        res.status(200).json(zoo);
    } catch(e) {
        console.log(e);
    }
}

module.exports = zooController;