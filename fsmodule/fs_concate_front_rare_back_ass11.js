const fs = require('fs')

fs.writeFileSync('gmail1.txt', 'Hello From Kolkata')
fs.appendFileSync('gmail1.txt', ' how are you?')

const data = fs.readFileSync('gmail1.txt')
const apnd='Welocme '
fs.writeFileSync('gmail1.txt', apnd+data)
