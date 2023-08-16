const childProcess = require("child_process");

function runCLI (cli) {
  return new Promise((resolve) => {
    console.log(`running ${cli}`);
    const cp = childProcess.exec(cli, {}, () => {
      resolve(cp);
    });
  });
}

function runAliveCLI (cli) {
  return new Promise((resolve) => {
    console.log(`running ${cli}`);
    const cp = childProcess.exec(cli);
    resolve(cp);
  });
}

function openURL (url) {
  runCLI(`start ${url}`);
}

module.exports = {
  runCLI,
  runAliveCLI,
  openURL
};
