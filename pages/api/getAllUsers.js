const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const quotes = await db.query(escape`
      SELECT *
      FROM quotes
    `)
  res.status(200).json({ quotes })
}