
function isUnique(str){
    const chars = {};
    for (let i = 0; i < str.length; i++) {
        const thisChar = str[i];
        console.log(thisChar);
        if (chars[thisChar]) {
            return false
        }
        chars[thisChar] = true;
    }
    return true;
  }
  
  // console.log(isUnique(123456))
  console.log(isUnique("abcdef"))
  console.log(isUnique("89%df#$^a&x"))
  console.log(isUnique("abcAdef"))
  console.log(isUnique("abcaef"))
  console.log(isUnique("1233abc"))
  console.log(isUnique("lalaku"))
  