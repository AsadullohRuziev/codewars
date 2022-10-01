
function isUnique(str){
    return new Set(str).size === str.length;
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
  