function shellsort(arr) {
    const length = arr.length
  
    // Knuth formulasi bo'yicha maksimum qadamni aniqlab olamiz
    let h = 1
    while (h < length / 3) h = 3*h + 1
  
    while (h >= 1) {
      for (let i = h; i < length; i++) {
        for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
          [arr[j], arr[j - h]] = [arr[j - h], arr[j]]
        }
      }
  
      h = Math.trunc(h / 3)
    }
  
    return arr
  }


  let arr = [1, 3, 8, 2, 7, 9];
// let arr = [61, 3, 88, 20, 7, 9];
console.log(shellsort(arr))