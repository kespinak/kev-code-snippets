const arr = [8, 5, 2, 9, 5, 6, 3]

selectionSort(arr);

function selectionSort(array) {
  let currentIndex = 0;

  while (currentIndex < array.length - 1) {
    let smallestIndex = findSmallestNum(array, currentIndex);
    swap(currentIndex, smallestIndex, array);
    currentIndex++;
    console.log(array);
  }
  return array;
}

function findSmallestNum(array, currentIndex) {
  let smallestIndex = currentIndex;

  for (let i = currentIndex + 1; i < array.length; i++) {
    if (array[smallestIndex] > array[i]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function swap(currentIndex, smallestIndex, array) {
  if (smallestIndex !== currentIndex) {
    let temp = array[currentIndex];
    array[currentIndex] = array[smallestIndex];
    array[smallestIndex] = temp;
  }
}