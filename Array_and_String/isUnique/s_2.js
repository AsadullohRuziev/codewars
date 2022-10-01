
function isUnique(str){
    const chars = str.split('').sort();
    console.log(chars)
      for(let i = 1; i < chars.length; i++) {
    console.log(chars.length)
      
          if(chars[i] === chars[i - 1]) {
              return false;
          }
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
  
  