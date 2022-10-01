
function isUnique(str){
    const chars = new Set();

    for (let i = 0; i < str.length; i++) {
        const thisChar = str[i];
        if (chars.has(thisChar)) {
            // console.log(chars.has(thisChar));
            return false;
        }
        chars.add(thisChar)
    }
    return true;
  }
  
  // console.log(isUnique(123456))
  console.log("1")
  console.log(isUnique("abcdef"))
  console.log("2")
  console.log(isUnique("89%df#$^a&x"))
  console.log("3")
  console.log(isUnique("abcAdef"))
  console.log("4")
  console.log(isUnique("abcaef"))
  console.log("5")
  console.log(isUnique("1233abc"))
  console.log("6")
  console.log(isUnique("lalaku"))
  