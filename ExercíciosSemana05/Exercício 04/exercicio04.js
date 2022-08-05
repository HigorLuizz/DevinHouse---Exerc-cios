var arrayQualquer = [1,2,-3,4,-5,-6,7,-8,9]
const numeroPositivos = (array = []) => {
  newArray = []
  for (const item of array) {
    if (item > 0){
      newArray.push(item)
    }
  }
  return newArray
}
console.log(numeroPositivos(arrayQualquer))