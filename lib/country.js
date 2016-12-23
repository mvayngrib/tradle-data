
const TYPE = '_t'

// mapper for: https://raw.githubusercontent.com/datasets/country-codes/master/data/country-codes.csv

module.exports = function (cols, row) {
  const name = cols.indexOf('name')
  const alpha2 = cols.indexOf('ISO3166-1-Alpha-2')
  const alpha3 = cols.indexOf('ISO3166-1-Alpha-3')
  return {
    [TYPE]: 'tradle.Country',
    country: row[name],
    code: row[alpha2],
    alpha3: row[alpha3]
  }
}
