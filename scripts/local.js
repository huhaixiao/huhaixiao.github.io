const { runAliveCLI } = require("./utils");

async function main () {
  try {
    const clientProcess = await runAliveCLI("pnpm --filter client start");
    const docsProcess = await runAliveCLI("pnpm --filter docs start");
    clientProcess.stdout.on("data", (data) => {
      console.log(`client output: ${data.toString()}`);
    });
    docsProcess.stdout.on("data", (data) => {
      console.log(`docs output: ${data.toString()}`);
    });
  } catch (e) {
    console.log({ e });
  }
}

main();
