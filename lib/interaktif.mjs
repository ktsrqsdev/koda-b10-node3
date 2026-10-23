import { createInterface } from "node:readline";
import { grading } from "./grading.mjs";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

export const history = [];

export function interactive() {
  function input() {
    rl.question("Masukkan nama (ketik 'keluar' untuk selesai): ", nama => {
      if (nama.toLowerCase() === "keluar") {
        return rl.close();
      }

      if (!nama.trim() || !isNaN(nama)) {
        console.log("Nama harus berupa teks dan tidak boleh kosong!\n");
        return input();
      }

      rl.question("Masukkan nilai: ", inputNilai => {
        const nilai = Number(inputNilai);
        if (!inputNilai.trim() || isNaN(inputNilai)) {
          console.log("Nilai harus berupa angka dan tidak boleh kosong!\n");
          return input();
        } else if (nilai < 0 || nilai > 100) {
          console.log("Nilai yang diterima hanya dari 0-100\n");
        return input();

        }

        history.push({ nama, nilai, grade: grading(nilai) });

        history.forEach((data, i) => {
          console.log(`${i + 1}. ${data.nama} - ${data.nilai} - ${data.grade}`);
        });

        console.log();
        input();
      });
    });
  }

  input();
}
