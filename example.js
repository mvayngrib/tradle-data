
const convert = require('./convert')
const mapper = require('./lib/country')

convert({
  file: './country-codes.csv',
  mapper
}, console.log)
