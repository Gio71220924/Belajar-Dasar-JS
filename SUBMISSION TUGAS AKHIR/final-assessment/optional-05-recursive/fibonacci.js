function fibonacci(n) {
    if (n === 0) return [0]; 
    if (n === 1) return [0, 1];

    const previous = fibonacci(n - 1); 
    const nextValue = previous[n - 1] + previous[n - 2]; 
    return [...previous, nextValue]; 
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
