var chocolateBars = ["smickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray1 = [element, ...array]
  return newArray1
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
   return array
}
