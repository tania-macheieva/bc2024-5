const express = require('express');
const { program } = require('commander');
const path = require('path');

program
  .requiredOption('-h, --host <host>', 'Server host address')
  .requiredOption('-p, --port <port>', 'Server port')
  .requiredOption('-c, --cache <cacheDir>', 'Cache directory path');

program.parse(process.argv);

const { host, port, cache } = program.opts();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Notes Service');
});

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
  console.log(`Cache directory is set to ${path.resolve(cache)}`);
});