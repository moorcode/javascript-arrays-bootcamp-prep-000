var chocolateBars = ["smickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray1 = [element, ...array]
  return newArray1
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
   return array
}

function addElementToEndOfArray(array, element){
  var newArray2 = [...array, element]
  return newArray2
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, i){
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.slice(0, array.length -1)
  return array
}

