const urlParser = require("../utils/urlParser");

const parserController = (req, res) => {
    const { urlFormat, urlInstance } = req.body.data;
    
    try {
        const hashObject = urlParser(urlFormat, urlInstance);
        res.status(200).json(hashObject);
        console.log(hashObject);
    } catch (err) {
        console.log('Error: ' + err.message);
    }
}

module.exports = parserController;