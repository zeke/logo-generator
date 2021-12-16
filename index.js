const cheerio = require('cheerio')
const axios = require('axios')

async function main() {
  const url = 'https://www.ycombinator.com/topcompanies/'
  const response = await axios.get(url)
  const $ = cheerio.load(response.data)
  const companies = []
  $('table.companies-table tr').each((i, el) => {
    const company = $(el).find('td.name a').text()
    companies.push(company)
  })
  console.log(companies)
}

main()