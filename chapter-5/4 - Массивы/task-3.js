const getMaxSubSum = (array) => {
  let currentSum = array[0]
  let maxSum = currentSum
  const n = array.length
  for (let i = 1; i < n; i++) {
    currentSum = Math.max(array[i], currentSum + array[i])
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))
