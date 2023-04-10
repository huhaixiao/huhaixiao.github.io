const { runCLI } = require("./utils");

async function main () {
  runCLI("pnpm --filter client start");
  runCLI("pnpm --filter docs start");
}

main();
