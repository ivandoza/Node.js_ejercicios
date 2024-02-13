import * as fs from "node:fs";

const fileContent = new Uint8Array(Buffer.from("New text  file"));

fs.writeFile("new-file.txt", fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("The file has been saved!");
});