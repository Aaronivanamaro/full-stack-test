// const mockError = require("../utils/errLogger");
// function timeOut(ms) {
//   new Promise((resolve) => setTimeout(resolve, ms));
// }
// function sendEmail() {
//   console.log("EMAIL SENT: More than ten errors in one minute");
// }
// function saveError(err) {
//   console.log("Error saved: " + err);
// }
// function logError(err, counter, startTime) {
//     counter++;
//     console.log("Errors: " + counter);
//     console.log("Start Time: " + startTime);
//     console.log("Seconds: " + new Date().getSeconds());
  
//     if ((counter > 10) && (startTime === new Date().getSeconds())) {
//       sendEmail();
//     }
//     saveError(err);
// }

// // const mockError = async (errors, timeout, counter, startTime) => {
//     // for (let i = 0; i < errors; i++) {
//     //   logError("This is an error", counter, startTime);
//     //   try {
//     //     await timeOut(timeout);
//     //   } catch (err) {
//     //     console.log(err);
//     //   }
//     // }
//     // return "OK"
// //   };


// const loggerController = async(req, res) => {
//     let errors = 0; //Error Counter
//     let startTime = new Date().getSeconds();

//     const { errorsQuantity, timeout } = req.body.data;

//     try {
//         for (let i = 0; i < errorsQuantity; i++) {
//             logError("This is an error", errors, startTime);
//             await timeOut(timeout);
//         }
//         // .then(() => {
//             res.status(200).send("OK");
//         // });
//     } catch (err) {
//         console.log('Error: ' + err.message);
//     }
// }

// module.exports = loggerController;