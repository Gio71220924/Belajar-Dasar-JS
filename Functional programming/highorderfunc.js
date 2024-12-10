function apply(operation, ...args) {
    // kita bisa menambahkan kode lain sebelum operation dijalankan.
    
    return operation(...args)
  }
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  function discount(disc, value) {
    return value - ((disc / 100) * value);
  }
  
  const productPrice = apply(sum, 100, 100, 200);
  const withDiscount = apply(discount, 25, productPrice);
  
  console.log('Product price:', productPrice); // Output: Product price: 400
  console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300




// menerima argumen sebuah fungsi
function memoize(fn) {
    const cache = new Map();
  
    // mengembalikan nilai berupa fungsi
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = fn(...args);
      cache.set(key, result);
  
      return result;
    };
  }
  
  
  function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }
  
  
  const memoizedSumArray = memoize(sumArray);
  const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);
  
  console.time('Memoized Sum First Call');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum First Call');
  
  console.time('Memoized Sum Second Call (Cached)');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum Second Call (Cached)');





// Kuis
const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
  ];
  
  // Fungsi untuk mendapatkan produk berdasarkan kategori
  function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
  }
  
  // Fungsi untuk menemukan produk berdasarkan ID
  function findProductById(products, id) {
    return products.find(product => product.id === id);
  }
  
  // Fungsi untuk menghitung total harga semua produk
  function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Fungsi untuk menerapkan diskon ke produk
  function applyDiscount(products, discount) {
    return products.map(product => ({
      ...product,
      price: product.price * (1 - discount / 100)
    }));
  }
  
  console.log(getProductsByCategory(sampleProducts, 'Electronics')); 
  // Output: [{ id: 1, name: 'Laptop', category: 'Electronics', price: 1000 }, { id: 2, name: 'Phone', category: 'Electronics', price: 500 }]
  
  console.log(calculateTotalPrice(sampleProducts)); 
  // Output: 1830
  
  console.log(applyDiscount(sampleProducts, 10)); 
  // Output: [{ id: 1, name: 'Laptop', category: 'Electronics', price: 900 }, { id: 2, name: 'Phone', category: 'Electronics', price: 450 }, ... ]
  
  console.log(findProductById(sampleProducts, 3)); 
  // Output: { id: 3, name: 'Shirt', category: 'Apparel', price: 50 }
