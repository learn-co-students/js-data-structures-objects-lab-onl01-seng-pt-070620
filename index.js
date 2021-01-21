// Write your solution in this file!

const driver = { name: 'Sam' };

//created new object

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  obj[key] = value;
 
  return obj;
}

//the empty {} in nondestructive is an empty object, so no overwrite, makes new Object

function deleteFromDriverByKey(obj, key){
  const newDriv = Object.assign({}, obj[key]);
  delete newDriv[key];
  return newDriv;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
