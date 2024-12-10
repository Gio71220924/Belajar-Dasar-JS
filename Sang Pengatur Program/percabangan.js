//If else
const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');

const score = 80;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

//Contoh percabangan yang dimana kondisinya lebih dari 3
const score = 85;

if (score > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}


//Ternary Operator
let result = condition ? value1 : value2;

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

//Switch Case
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}


//Switch vs if else
const day = new Date().getDay();

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}


const day = new Date().getDay();

switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}

//jangan lupa pake break buat mencegah infinite loop


//Looping

//For
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
  }

//For in
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}



//For of, lebih simpel for of. Langsung panggil item ga usah indeks atau apapun itu
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];
for (const item of person) {
    console.log(item);
  }


//While Melakukan evaluasi kondisi di awal
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

//Do while melakukan evaluasi kondisi di akhir
let i = 0;

do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);

//Contoh control statement itu break and continue


//throwing error
const error = new Error('Terjadi error');
console.error(error);

const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error('Pembayaran kurang');
}


//try catch
try {
    console.log('Memulai program');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena tidak ada error, blok ini akan diabaikan');
  }

  try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }


  //finally 
  //Finally adalah blok kode yang berada di akhir try-catch. 
  // Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, 
  //blok yang ada di finally akan selalu dieksekusi.
  try {
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }

  //Implementasi flow control
  function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
      if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
      }
  
      const grade = grades[i];
      let predicate;
  
      if (grade >= 90) {
        predicate = 'A';
      } else if (grade >= 80) {
        predicate = 'B';
      } else if (grade >= 70) {
        predicate = 'C';
      } else if (grade >= 60) {
        predicate = 'D';
      } else {
        predicate = 'E';
      }
  
      console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
  }
  
  try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
  } catch (e) {
    console.error(e);
  }


//Kuis coding
function categorizeNumber(input) {

    if (typeof input !== 'number') {
      throw new Error('Input harus berupa bilangan bulat');
    }
  

    if (input === 0) {
      return "Nol";
    } else if (input < 0) {
      return "Negatif";
    } else if (isPrime(input)) {
      return "Prima";
    }else if (input % 2 === 0) {
      return "Genap";
    } 
    return "Ganjil";
  }
  

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Contoh penggunaan
  console.log(categorizeNumber(15)); // Output: "Ganjil"
  console.log(categorizeNumber(12)); // Output: "Genap"
  console.log(categorizeNumber(17)); // Output: "Prima"
  console.log(categorizeNumber(0));  // Output: "Nol"
  console.log(categorizeNumber(-5)); // Output: "Negatif"
  
  try {
    categorizeNumber('abc');
  } catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
  }
  