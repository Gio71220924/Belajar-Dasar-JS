//Membuat object
//age itu key, 30 itu valuenya, isi dari object itu properti
const objectt = {};
const user = {
    name: "John",
    lastname: "Doe",
    Age : 30,
    balance:100,
};

//Cara akses pake dot
console.log(user.name);
//Cara akses pake bracket
console.log(user["name"]);
//Cara ubah nilai di dalam object
user.balance = 150;
console.log(user.balance);
//Hapus nilai di dalam object
delete user.age;
console.log(user);



const Pengguna = {
    'name': 'Dicoding',
    'lastName': 'Indonesia',
    age: 9
};

//Cara akses pake object destructuring
const{name, lastName, age} = Pengguna;
console.log(name);

//Cara liat jenis data
const array = [1, 2];
console.log(typeof array); // Output: object
console.log(array);

const list = new Array("haha");
console.log(list);

const list2 = new Array("jack", "mulyono");
const list3 = Array.from(list2);
console.log(list3);
//Cara akses something di dalam array
console.log(list2[1]);
list2[1] = "fufufafa";
console.log(list2);

//Push, ditambahkan ke elemen terakhir
const contoh = [1,2,3,4,5];
contoh.push(6);
console.log(contoh);
delete contoh[1];
contoh.splice(1, 1);
//Shift menghapus elemen pertama, pop menghapus elemen terakhir
//Reverse balikin isi nilai array.
//Secara default sort itu liat abjad, contoh A B C D seterusnya


//BUAT MAP
const map2 = new Map([
    ['name', 'Dicoding'],
    ['lastName', 'Indonesia']
]);

console.log(map2);

//Cara simpan nilai di map
map2.set('age', 9);
map2,set(1, 'one');//Bisa pake indx juga pake number
console.log(map2.get('name'));//Akses nilai di map
map2.delete('name');//Hapus nilai di map


//SET
const myset = new set ([1, 2, 3, 4, 5]);
myset.add(6); //Simpan nilai di set

//Cara akses nilai di set, agak ribet......
for (const number of myset){
    console.log(number);
}

//Atau, lebih ribet lagi, ga ribet sih kek yang array itu
set.foreEach((value) => {
    console.log(value);
});

set.delete(1);//Hapus nilai di set

//Spread operator di dalam object
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }

//Spread operator di dalam array
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

//Gabungkan 2 array menggunakan spread operator
const original = ['apple', 'banana', 'cherry'];
const copy = [...original];

console.log(copy); // Output: ['apple', 'banana', 'cherry']

//Rest operator, Rest operator memungkinkan function untuk menerima argument dalam bentuk array
function myFunc(number, ...manyMoreArgs) {
    console.log('number', number);
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  myFunc('one', 'two', 'three');

  const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

  const [first, second, ...rest] = favorites;
  
  console.log(first);
  console.log(second);
  console.log(rest);
  
  /**
   * output:
   * Nasi Goreng
   * Mie Goreng
   * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
   */


//Kuis coding
const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];

      /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
  
  function addEmployee(name, email, joinYear) {
    const pegawaibaru = {
      name: name,
      email: email,
      joinYear: joinYear,
    };

    employees.push(pegawaibaru);     
  }

addEmployee('Indra', 'indra@dicoding.com', 2021);
addEmployee('Sari', 'sari@dicoding.com', 2019);