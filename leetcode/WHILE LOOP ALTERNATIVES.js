const arr = [1, 2, 3, 4, 5]

let i = 0

// THESE ARE ALTERNATIVES TO THE TRADITIONAL SYNTAX...
// while (Number.isInteger(arr[i])) {
// while (arr[i] !== undefined) {
while (i < arr.length) {
  console.log(arr[i])
  i++
}

