const childProcess = require("child_process");

function runCLI (cli) {
  return new Promise((resolve) => {
    console.log(`running ${cli}`);
    const instance = childProcess.exec(cli);
    resolve(instance);
  });
}

function open (url) {
  childProcess.exec(`start ${url}`);
}

module.exports = {
  runCLI,
  open
};
