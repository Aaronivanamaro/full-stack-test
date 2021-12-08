const Zoo = require("../models/Zoo");

function createZoo(name, animals, value) {
  const zoo = new Zoo(name, animals, value);

  zoo.init();
  zoo.startSpeaking();  

  return zoo;
}

module.exports = createZoo;