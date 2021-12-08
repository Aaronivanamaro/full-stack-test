let count = 0;
let countTwo = 0;
let errorsArchive = [];
let errorsCounter = [];

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const counter = async () => {
  if (count === 0) {
    for (let i = 0; i < 60; i++) {
      count = count + 1;
      console.log(count);
      await timeout(1000);
    }
  }
};

const counterTwo = async () => {
  if (countTwo === 0) {
    for (let i = 0; i < 60; i++) {
      countTwo = countTwo + 1;
      console.log(countTwo);
      await timeout(1000);
    }
  }
};

const sendEmail = () => {
  console.log("EMAIL SENT!!!");
};

const saveError = (err) => {
  errorsCounter.push(err);
  errorsArchive.push(err);
  console.log("Error saved: " + err.message);
};

class ErrorLog {
  constructor(message) {
    this.date = new Date();
    this.message = message;
  }
}

const logError = (error) => {
  const err = new ErrorLog(error);
  console.log("Errors: " + (errorsArchive.length + 1));
  saveError(err);

  if (errorsCounter.length > 9 && count <= 60 && countTwo === 0) {
    sendEmail();
    counterTwo();
    count = 0;
    errorsCounter = [];
  }
  if (errorsCounter.length > 9 && countTwo === 60) {
    sendEmail();
    countTwo = 0;
    errorsCounter = [];
  }
};

function toMiliseconds(seconds) {
  let secondsString = seconds.toString();
  let msString = secondsString + "000";
  return Number.parseInt(msString);
}

const mockError = async (errors, seconds) => {
  counter();
  const newErrors = errors - 1;
  const interval = Math.round(seconds / newErrors);
  const ms = toMiliseconds(interval);
  for (let i = 0; i <= newErrors; i++) {
    logError(new Error("This is an error"));
    await timeout(ms);
  }
  console.log(errorsArchive);
};

// mockError(20, 50);

module.exports = mockError;
