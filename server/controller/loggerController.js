const mockError = require("../utils/errLogger");

const loggerController = async(req, res) => {
    const { errorsQuantity, timeout } = req.body.data;

    try {
        res.status(200).json("OK");
    } catch (err) {
        console.log('Error: ' + err.message);
    }
}

module.exports = loggerController;
