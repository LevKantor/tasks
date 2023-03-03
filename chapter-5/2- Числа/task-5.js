const randomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(randomInteger(1, 5)) // 1
console.log(randomInteger(1, 5)) // 3
console.log(randomInteger(1, 5)) // 5
