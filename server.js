const express = require('express');
const app = express();
const {promptUser} = require('./prompt');

const PORT = process.env.PORT || 3001;



app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}!`));
promptUser();