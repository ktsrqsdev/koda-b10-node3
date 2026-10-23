import { createInterface } from "node:readline";
import { grading } from "./grading.mjs";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const history = [];

export function interacitve() {
  function inputNama() {
    rl.question("Masukkan nama (ketik 'keluar' untuk selesai): ", nama => {
      if (nama.toLowerCase() === "keluar") {
        rl.close();
        return;
      }

      rl.question("Masukkan nilai: ", inputNilai => {
        const nilai = Number(inputNilai);

        history.push({
          nama,
          nilai,
          grade: grading(nilai),
        });

        console.log("\nHistory:");

        history.forEach((data, index) => {
          console.log(`${index + 1}. ${data.nama} - ${data.nilai} - ${data.grade}`);
        });

        console.log();
        inputNama();
      });
    });
  }

  inputNama();
}
