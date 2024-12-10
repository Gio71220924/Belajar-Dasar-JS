// Contoh fungsi

// convertCelsiusToFahrenheit(37);

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
    return temperatureInFahrenheit;
    //Pake return yang ini
}

const result = convertCelsiusToFahrenheit(37);
console.log('Hasil konversi:', result);



//Function expression
const convertCelsiusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
  };
  
  const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
  console.log('Hasil konversi:', temperatureInFahrenheit);
  
  /* Output:
  Hasil konversi: 194
  */

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
  };
  
  temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
  console.log('Hasil konversi:', temperatureInFahrenheit);
  // Hasil ==> Hasil konversi: 194


// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = 
    (temperature) => (9 / 5) * temperature + 32;

  temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
  console.log('Hasil konversi:', temperatureInFahrenheit);



//Soal kuis koding
function hello(name, origin = "Bandung") {
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

const rahmat = hello("Rahmat", "Semarang");
const indra = hello("Indra");

console.log(rahmat);
console.log(indra);
