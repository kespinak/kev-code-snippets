const arr = [8, 5, 2, 9, 5, 6, 3]

selectionSort(arr);

function selectionSort(array) {
  let currentIndex = 0;

  while (currentIndex < array.length -1) {
    findSmallestNum(array, currentIndex);
  }
  console.log(smallestIndex);
}

function findSmallestNum(array, currentIndex) {
  let smallestIndex = currentIndex;

  for (let i = 0; i<array.length; i++) {
    if (array[smallestIndex] > array[i]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
}
