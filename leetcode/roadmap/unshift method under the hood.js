Array.prototype.unshift = function(...args) {
  const newArrLength = this.length + args.length;
  for (let i = newArrLength - 1; i >= args.length; i--) {
    this[i] = this[i - args.length];
  }
  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  return newArrLength;
};


===================================================================
chatgpt: can you show me the code of .unshift() under the hood? also, can you help me understand the code by breaking it down line by line? 


Array.prototype.unshift = function() {
  const n = this.length;
  const m = arguments.length;
  const k = n + m;
  for (let i = k - 1; i >= m; i--) {
    this[i] = this[i - m];
  }
  for (let i = 0; i < m; i++) {
    this[i] = arguments[i];
  }
  this.length = k;
  return k;
};


line by line breakdown: 

Array.prototype.unshift = function(): We define the unshift() method as a function on the Array prototype.
const n = this.length;: We save the length of the original array.
const m = arguments.length;: We save the number of arguments passed to unshift().
const k = n + m;: We calculate the new length of the array after the unshift operation.
for (let i = k - 1; i >= m; i--) {...}: We loop through the array in reverse order, starting from the last index of the new array, and assign each element to its new index. We use this[i - m] to shift the elements over by m indexes. This loop essentially creates space at the beginning of the array for the new elements.
for (let i = 0; i < m; i++) {...}: We loop through the arguments passed to unshift() and assign each one to the corresponding index at the beginning of the array.
this.length = k;: We update the length of the array to the new length.
return k;: We return the new length of the array.

The reason why the time complexity of unshift() is O(n) is because it has to loop through all the existing elements in the array and move them over by m indexes, which takes linear time in the length of the array. In contrast, shift() only needs to move one element and takes constant time.




