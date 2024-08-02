const fs = require('fs')


// fs.writeFileSync('gmail.txt', 'Hello From Kolkata')


// console.log(fs.readFileSync('gmail.txt', 'utf-8'))


// const data = fs.readFileSync('gmail.txt')
// const orgData = data.toString()
// console.log(orgData);


fs.appendFileSync('gmail.txt', 'Hello')
