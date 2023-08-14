const { runCLI } = require("./utils");

async function main () {
  const clientProcess = await runCLI("pnpm --filter client start");
  clientProcess.stdout.on("data", (data) => {
    console.log(`client output: ${data.toString()}`);
  });
  const docsProcess = await runCLI("pnpm --filter docs start");
  docsProcess.stdout.on("data", (data) => {
    console.log(`docs output: ${data.toString()}`);
  });
}

main();
