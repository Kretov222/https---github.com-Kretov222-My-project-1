// const filterString = (string, symbol) =>{
//   let result = '';
//     for(let i = string.length -1 ; i>=0; i--){
//      const currentChar = string[i];
//       if(currentChar!== symbol){
//       result= currentChar+ result}; 
//     }
//     return result;
//   }

// console.log(filterString('Hello', 'H'))



function hasChar(string, char){
  let i = 0;
  while (i < string.length){
    if (char === string[i]){
      i++;
      return true;
      
    }
    return false;
  }
}
console.log(hasChar);

//const text = 'I never look back';
//const makeItFunny = (text, num) =>{
  //let result = '';
  //for(i=0; i< text.length; i++){
   // if ((i+1)% num == 0){
      //console.log(i)
      //result += text[i].toUpperCase()
    //} else result += text[i]
  //}
  //return result;
//}
//console.log(makeItFunny(text,3));




// проверка 1234