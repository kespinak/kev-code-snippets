const example = [1, 2, 3, 4, 5];

const shift = (array) => {
  if (array.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  const firstElement = array[0]; // Save the first element of the array
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1]; // Shift all the remaining elements one position to the left
    console.log(array)
  }
  array.length--; // Update the length of the array
  console.log(array)

  return firstElement; // Return the removed element
};

const answer = shift(example);
console.log('answer:', answer)



============================================================================================
Array.prototype.shift = function() {
  if (this.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  const firstElement = this[0]; // Save the first element of the array
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1]; // Shift all the remaining elements one position to the left
  }
  this.length--; // Update the length of the array

  return firstElement; // Return the removed element
};
