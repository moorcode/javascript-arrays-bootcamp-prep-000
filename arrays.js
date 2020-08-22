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
  var newArray3 = [...array, element]
  return newArray3
}

function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element)
  return array
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
