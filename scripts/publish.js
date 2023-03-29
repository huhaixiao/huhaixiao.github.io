const process = require("process");
const path = require("path");
const childProcess = require("child_process");

const clientDir = path.resolve(process.cwd(), "./apps/client/dist");
process.chdir(clientDir);

async function runCLI (cli) {
  return new Promise((resolve) => {
    childProcess.exec(cli, resolve);
  });
}

async function publishToGithub () {
  try {
    await runCLI("rm -rf .git/");
    await runCLI("git init");
    await runCLI("git add .");
    await runCLI("git commit -m \"setup\"");
    await runCLI("git remote add origin git@github.com:huhaixiao/huhaixiao.github.io.git");
    await runCLI("git checkout -b main");
    await runCLI("git push origin HEAD -f");
    console.log("publish to github success");
  } catch (e) {
    console.log("publish to github failed");
  }
}

async function publishToGitee () {

}

async function publish () {
  await publishToGithub();
  await publishToGitee();
}

publish();
