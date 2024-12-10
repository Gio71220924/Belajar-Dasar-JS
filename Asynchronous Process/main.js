const estimationTime = 10_000;

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime);

/* Output:
Hello, world!
*/

import { makeCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee();

console.log('Pramusaji memberikan kopi pesanan.');
console.log('Saya mendapatkan kopi dan menghabiskannya.');

export function makeCoffee() {
    // 1000 milidetik = 1 detik
    const estimationTime = 5000;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Do some tasks to make coffee...
      console.log('Pramusaji selesai membuat kopi.');
    }, estimationTime);
  }

  import { makeCoffee, sendCoffee } from './coffee.mjs';

  console.log('Saya memesan kopi di kafe.');
  
  makeCoffee(() => {
    sendCoffee(() => {
      console.log('Pramusaji memberikan kopi pesanan.');
      console.log('Saya mendapatkan kopi dan menghabiskannya.');
    });
  });

  export function makeCoffee(callback) {
    const estimationTime = 5000;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Do some tasks to make coffee...
  
      console.log('Pramusaji selesai membuat kopi.');
      callback();
    }, estimationTime);
  }
  
  export function sendCoffee(callback) {
    const estimationTime = 2000;
  
    console.log('Pramusaji sedang mengantarkan kopi pesanan');
  
    setTimeout(() => {
      // Do some tasks to send coffee...
  
      console.log('Pramusaji sudah sampai ke meja.');
      callback();
    }, estimationTime);
  }


  import { readFile } from 'fs';

  readFile('./sample.txt', (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
  
    const greeting = data.toString()
      .replace('%name%', 'Dicoding')
      .replace('%your_name%', 'JavaScript');
  
    console.log(greeting);
  });

//   Hello %name%, my name is %your_name%.


import { makeCoffee, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    // Do something with error
    console.error(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      // Do something with error
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});

export function makeCoffee(name, callback) {
    const estimationTime = 5000;
    let isSuccess = false;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }
  
      if (!isSuccess) {
        callback(new Error('Gagal membuatkan kopi.'), null);
        return;
      }
  
      console.log('Pramusaji selesai membuat kopi.');
      callback(null, name);
    }, estimationTime);
  }
  
  export function sendCoffee(name, callback) {
    const estimationTime = 2000;
    let isSuccess = false;
  
    console.log('Pramusaji sedang mengantarkan kopi pesanan');
  
    setTimeout(() => {
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }
  
      if (!isSuccess) {
        callback(new Error('Gagal mengantarkan kopi.'), null);
        return;
      }
  
      console.log('Pramusaji sudah sampai ke meja.');
      callback(null, name);
    }, estimationTime);
  }



// main.mjs
import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
function processData(data) {
  // Menggunakan `map` untuk memanggil API.fetch pada setiap item di data
  const promises = data.map(item => API.fetch(item.delay, item.simulateError));

  // Menggunakan Promise.all untuk menangkap hasil atau error
  return Promise.all(promises);
}

processData(sampleErrorData).then(console.log).catch(console.log); // Expected: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // Expected output: ['Data from delay 100', 'Data from delay 50']


// support.mjs dia ga usah diubah2
const API = {
    fetch(delay, simulateError = false) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (simulateError) {
            return reject(new Error(`Error from delay ${delay}`));
          }
  
          return resolve(`Data from delay ${delay}`);
        }, delay);
      });
    }
  };
  
  const sampleErrorData = [
    {
      delay: 100,
      simulateError: false,
    },
    {
      delay: 50,
      simulateError: true,
    },
  ];
  
  const sampleSuccessData = [
    {
      delay: 100,
      simulateError: false,
    },
    {
      delay: 50,
      simulateError: false,
    },
  ];
  
  export { API, sampleErrorData, sampleSuccessData };
  