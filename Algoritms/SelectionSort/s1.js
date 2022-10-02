function selectionSort(arr = []) {
    const length = arr.length
  
    for (let i = 0; i < length - 1; i++) {
      // i indeksni minimum elementning indeksi deb olamiz
      let min = i
  
      for (let j = i + 1; j < length; j++) {
        // arr[i] ni o'zidan keyingi elementlar bilan solishtirib,
        // undan kichkina elementning indeksini minimum indeks deb belgilaymiz
        if (arr[min] > arr[j]) {
          min = j
        }
      }
  
      // arr[i] va arr[min] o'rnini almashtiramiz
      if (i != min) {
        [arr[i], arr[min]] = [arr[min], arr[i]]
      }
    }
  
    return arr;
  }

  let data = [5,9,6,8,1];
  console.log(selectionSort(data))