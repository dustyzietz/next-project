const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: "sql12.freesqldatabase.com",
    database: "sql12322512",
    user: "sql12322512",
    password: "uJJ79jPlgf",
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}