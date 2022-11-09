/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
// Copyright rigélblu inc.
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const express = require('express');

const app = express();
app.use(express.static('build'));

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log('magin.blue listening on port', PORT);
});
