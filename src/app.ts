import { yarg } from "./config/plugin/args.plugins";
import { ServerApp } from "./presentation/server-app";

(async () => {
  await main();
})();

async function main() {
  (async () => {
    const { b: base, l: limit, s: showTable } = await yarg;

    ServerApp.run({base, limit, showTable});
  })();
}
