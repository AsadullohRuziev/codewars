

function insertionSort(arr = []) {
    const length = arr.length;
    console.log(length + " ta elemet bor");
    for (let i = 1; i < length; i++) {
        for (let j = i; j > 0; j--) {

            if (arr[j] < arr[j - 1]) {
                // Ikki element o'rnini almashtiramiz.
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
              }
              else {
                // Keyingi solishtirishlarning foydasi yo'q.
                // Ular allaqachon tartiblangan.
                break
              }
            
        }
    }
    return arr;
}



let arr = [1, 3, 8, 2, 7, 9];
// let arr = [61, 3, 88, 20, 7, 9];
console.log(insertionSort(arr))


