const age = 10;
const name = 'dicoding';

//const name = 4+4 itu statement//
// 4+4 itu expression
console.log('aku ${name} umur ${age} tahun');

//cara buat koment//



//ada 2 jenis variabel, const sama let//
// Perbedaan dari variabel yang dibuat dengan const dan let adalah 
//variabel yang dibuat dengan const tidak dapat diinisialisasi ulang 
//(sederhananya, diubah) nilainya, sedangkan jika variabel dibuat dengan let, kita bisa menginisialisasi ulang nilainya.

const nama = 'dicoding';
let usia = 20;
usia = 50;
console.log(usia); //outputnya jadi 50 ya, berubah dari nilai yang dideklarasikan sebelumnya, kalau dia const jadi error outputnya//

// Aturan Penamaan Variabel
// Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama
// Nama variabel tidak boleh mengandung karakter selain huruf, angka, garis bawah (underscore), dan tanda dolar
// Nama Variabel Tidak Boleh Diawali dengan Angka

//Contoh tipe data di JS

const kursus = 'Dicoding'; // String
const nilai = 90; // Number
const sudahLulus = true; // Boolean
const kosong = null; // Null
let tidakTerdefinisi; // Undefined
//Mending kasih null aja daripada undefined


//Cara ubah tipe data int ke string, pilih salah satu aja
const Number = 123;
const konnumber = Number.toString();
const konnnumber = String(Number);

//Cara ubah string jadi int (bilangan bulat)
const contoh = "20cm";
const koncontoh = parseInt(contoh);
console.log(koncontoh);

//Cara ubah string jadi float (bilangan desimal)
const contohfl = "20.44cm";
const koncontohfl = parseFloat(contohfl);
console.log(koncontohfl);