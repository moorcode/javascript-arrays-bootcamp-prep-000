var chocolateBars = ["smickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [...element, array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  var newNewArray = [array, ...element]
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
