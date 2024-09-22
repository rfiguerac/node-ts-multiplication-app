import fs from "fs";
import { yarg } from "./config/plugin/args.plugins";

(async () => {
  const { b: base, l: limit, s: show } = await yarg;

  let outputMessage = "";
  const headerMessage = `
==================================
        Tabla del ${base}
==================================\n
`;
  for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
  }

  outputMessage = headerMessage + outputMessage;

  if (show) {
    console.log(outputMessage);
  }

  fs.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);
  console.log("archivo creado");
})();
