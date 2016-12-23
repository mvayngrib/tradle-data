
const fs = require('fs')
const through = require('through2')
const pump = require('pump')
const collect = require('stream-collector')
const csv = require('csv')

module.exports = convert

function convert ({ mapper=toJSON, file }, cb) {
  console.log(mapper.toString())
  let cols
  const rows = []
  return collect(pump(
    fs.createReadStream('./country-codes.csv'),
    csv.parse(),
    csv.transform(function (record) {
      if (!cols) {
        cols = record
        return null
      }

      return mapper(cols, record)
    })
  ), cb)
}

function toJSON (cols, row) {
  const json = {}
  cols.forEach(function (name, i) {
    json[name] = row[i]
  })

  return json
}
