const process = require("process");
const path = require("path");
const childProcess = require("child_process");

function changeDir () {
  const clientDir = path.resolve(process.cwd(), "./apps/client/dist");
  process.chdir(clientDir);
}

async function runCLI (cli) {
  return new Promise((resolve) => {
    console.log(`running ${cli}`);
    childProcess.exec(cli, resolve);
  });
}

async function workSpaceClientGitPush () {
  try {
    await runCLI("rm -rf .git/");
    await runCLI("git init");
    await runCLI("git add .");
    await runCLI("git commit -m \"setup\"");
    await runCLI("git remote add github git@github.com:huhaixiao/huhaixiao.github.io.git");
    await runCLI("git remote add gitee git@gitee.com:huhaixiao/app.git");
    await runCLI("git checkout -b main");
    await runCLI("git push github HEAD -f");
    await runCLI("git push gitee HEAD -f");
    console.log("publish success");
  } catch (e) {
    console.log(e);
    console.log("publish failed");
  }
}

async function monoGitPush () {
  try {
    await runCLI("git add .");
    await runCLI("git commit -m \"setup\"");
    await runCLI("git push origin HEAD");
  } catch (e) {
    console.log("mono git push error");
  }
}

async function monoBuild () {
  try {
    await runCLI("pnpm --filter client build");
    await runCLI("pnpm --filter docs build");
    await runCLI("node scripts/copy.js");
  } catch (e) {
    console.log("monoBuild error");
  }
}

async function run () {
  await monoGitPush();
  await monoBuild();
  changeDir();
  await workSpaceClientGitPush();
}

run();
