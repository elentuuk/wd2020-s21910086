//Variable

//let & const
// let _umur = 25;
// _umur = 26;
// let nilai = 95.5;
// let sudahMenikah = true;
// let $nama="John Doe";
// console.log(_umur);
// console.log($nama);
// console.log(nilai);
// console.log(sudahMenikah);

// let alamat;
// console.log(alamat);

// const tahunLahir = 2010;
// console.log(tahunLahir);

//Operator

//Arithmetic Operator {+,-,*,/}

// let umur=30;
// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1 + angka2);

// let namaDepan = "John";
// let namaBelakang = "Doe";
// console.log("Nama Saya " + namaDepan + " " + namaBelakang + ". Umur saya adalah " + umur + " tahun");

//Operator Perbandingan

// let angka1 = 10;
// let angka2 = 9;

// console.log(angka1 <= angka2);

//ternary operator
// let angka = 5;
// let hasil = angka <= 0 ? "Negatif" : "Positif";
// console.log(hasil);

//Operator Logika
// let kondisi1 = 1 < 2;
// let kondisi2 = true;

// console.log(kondisi1 || kondisi2);
// console.log(!kondisi1);

// let angka = prompt("Masukkan Angka : ");
// console.log("angka yang dimasukkan adalah " + angka);

//Exercise 7
/*
Buatlah program JavaScript untuk menghitung BMI (Body Mass Index).
Rumus = berat (kg) / (tinggi * tinggi)

Gunakan prompt untuk meminta input dari user
*/

let berat = prompt("Masukkan Berat Badan Anda (kg) : ");
console.log("berat badan yang anda masukkan adalah " + berat);
let tinggi = prompt("Masukkan Tinggi Badan Anda (m) : ");
console.log("tinggi badan yang anda masukkan adalah " + tinggi);
let hasil = berat / (tinggi * tinggi);
console.log("BMI Anda = " + hasil);

