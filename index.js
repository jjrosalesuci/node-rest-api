const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const apiRouter = require('./api');

// Api router
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Api app listening at http://localhost:${port}`);
});
