

function isUnique(input){
    for(let i = 0; i < input.length; i++){
      if(input.lastIndexOf(input[i]) !== i ){
        return false
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
  
  
  