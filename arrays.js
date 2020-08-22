var chocolateBars = ["smickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray1 = [element, ...array]
  return newArray1
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray2 = array.unshift(element)
  return newArray2
}

function addElementToEndOfArray(array, element){
  var newNewArray = [...array, element]
  return newNewArray
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

function accessElementInArray(array, i){
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  return array.shift(element)
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  return array.slice(1)
}
