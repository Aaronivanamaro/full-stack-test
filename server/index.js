const express = require("express");
const router = require("./routes/index")
const cors = require('cors')

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.get('/', (req, res) => res.send('Backend is up!'));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
