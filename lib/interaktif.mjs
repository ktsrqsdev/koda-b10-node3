import { createInterface } from "node:readline";
import { grading } from "./grading.mjs";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const history = [];


export function interacitve() {    
    rl.question("Masukkan nama: ", (nama) => {
      rl.question("Masukkan nilai: ", (nilai) => {
        history.push({
          nama,
          nilai: Number(nilai),
          grade: grading(Number(nilai)),
        });
    
        console.log(history);
        rl.close();
      });
    });
} 