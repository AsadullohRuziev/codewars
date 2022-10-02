function quickSort(arr) {
    function partition(arr, low, high) {
      let i = low, j = high + 1
  
      while (true) {
        while (arr[low] > arr[++i]) {
          if (i == high) break;
        }
  
        while (arr[low] < arr[--j]) {
          if (j == low) break
        }
  
  
        if (i >= j) break;
  
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
  
      [arr[low], arr[j]] = [arr[j], arr[low]]
  
      return j
    }
  
    function sort(arr, low, high) {
      if (high <= low) return
      let j = partition(arr, low, high)
      sort(arr, low, j - 1)
      sort(arr, j + 1, high)
    }
  
    // Shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  
    sort(arr, 0, arr.length - 1)
    return arr
  }


  let arr = [1, 3, 8, 2, 7, 9];
  // let arr = [61, 3, 88, 20, 7, 9];
  console.log(quickSort(arr))