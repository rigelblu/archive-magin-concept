// Copyright rigélblu inc.
// All rights reserved.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const express = require('express');

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
app.use(express.static('build'));

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});
