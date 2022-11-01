const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

function tambah() {
  let a = parseInt(angka1.value);
  let b = parseInt(angka2.value);
  let nilai = a + b;
  hasil.value = nilai;
}
function kurang() {
  let a = parseInt(angka1.value);
  let b = parseInt(angka2.value);
  let nilai = a - b;
  hasil.value = nilai;
}
function kalikan() {
  let a = parseInt(angka1.value);
  let b = parseInt(angka2.value);
  let nilai = a * b;
  hasil.value = nilai;
}
function bagi() {
  let a = parseInt(angka1.value);
  let b = parseInt(angka2.value);
  let nilai = a / b;
  hasil.value = nilai;
}
