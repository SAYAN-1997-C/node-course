const arr = ['sayan','Shaswata','samrat','souvik','soumik','Shaswata','Sayan']

console.log(arr)

const duplicates = arr.filter((a) => a === 'Shaswata')

const dup = arr.find((a) => a === 'Shaswata');

arr.forEach((a) => console.log(a) )

const check = arr.map((name) => name.toUpperCase())


console.log(duplicates)
console.log(dup)
console.log(check)