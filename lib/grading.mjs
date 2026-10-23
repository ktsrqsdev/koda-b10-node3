export function grading(nilai,) {
  if (nilai >= 80) {
    return "A";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 60) {
    return "C";
  } else if (nilai >= 50) {
    return "D";
  } else {
    return "E";
  }
}