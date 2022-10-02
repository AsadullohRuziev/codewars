function mergeSort(arr) {
    function merge(arr, aux, low, mid, high) {
      // mutatsiyaning oldini olib, arr array elementlaridan 
      // aux array yasaymiz
      aux = [...arr]
  
      // i arrayning pastki qismi. mergeSort birinchi ishga tushganda
      // low = 0, mid = 0, high = 1 bo'ladi.
      let i = low, j = mid + 1
  
      // Qismlarni solishtirib, arr array'ga tartiblangan elementlarni
      // yig'amiz
      for (let k = low; k <= high; k++) {
        if (i > mid) {
          arr[k] = aux[j++]
        }
        else if (j > high) {
          arr[k] = aux[i++]
        }
        else if (aux[j] < aux[i]) {
          arr[k] = aux[j++]
        }
        else {
          arr[k] = aux[i++]
        }
      }
    }
  
    function sort(arr, aux, low, high) {
      // arrayning (yoki array qismining) yuqori elementi pastki 
      // elementidan kichkina bo'lsa yoki teng bo'lib qolsa rekursiv
      // funksiyani to'xtatamiz
      if (high <= low) {
        return;
      }
  
      // arrayning (yoki array qismining) o'rtasini topamiz
      const mid = low + Math.trunc((high - low) / 2)
  
      // arrayning (yoki array qismining ikki tarafini tartiblaymiz)
      sort(arr, aux, low, mid)
      sort(arr, aux, mid + 1, high)
  
     // bu qismi high <= low bo'lgan holatda, funksiya to'xtaganda
     // bitta oldingi chaqirilgan sort() ichida ishlaydi.
     // Batafsil - rekursiyani o'rganing.
      merge(arr, aux, low, mid, high)
    }
  
    let aux = []
    sort(arr, aux, 0, arr.length - 1)
    return arr
  }

  
  let arr = [1, 3, 8, 2, 7, 9];
  // let arr = [61, 3, 88, 20, 7, 9];
  console.log(mergeSort(arr))