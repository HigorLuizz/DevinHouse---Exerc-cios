var arrayQualquer = [1,3,4,6,7,8,9]
const mediaDeumaArray = (array = []) => {
  var soma = 0;
  for (const item of array) {
    soma += item
  }
  return soma/array.length
  
}
console.log(mediaDeumaArray(arrayQualquer))