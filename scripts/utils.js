const childProcess = require("child_process");

function runCLI (cli) {
  return new Promise((resolve) => {
    console.log(`running ${cli}`);
    childProcess.exec(cli, resolve);
  });
}

module.exports = {
  runCLI
};
