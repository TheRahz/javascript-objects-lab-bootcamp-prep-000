var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value
   return object
}

function deleteFromObjectByKey(object, key) {
  newObj = object
  delete newObj[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
}