const db = require('../../lib/db')
const escape = require('sql-template-strings')

export default function async (req, res) {
  await db.query(escape`
  INSERT INTO quotes (name, quote) VALUES ('Meredith', 'eat a dick')`
    );

  res.status(200).json({msg:'user added'})
}