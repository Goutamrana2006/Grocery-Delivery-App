const db = require('../config/db')

exports.getProducts = (req, res) => {
  const sql = 'SELECT * FROM products'

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err)
    }

    res.json(result)
  })
}

exports.addProduct = (req, res) => {
  const { name, price, image, category } = req.body

  const sql = `
    INSERT INTO products(name, price, image, category)
      VALUES (?, ?, ?, ?)
  `

  db.query(sql, [name, price, image, category], (err, result) => {
    if (err) {
      return res.status(500).json(err)
    }

    res.json({
      message: 'Product Added Successfully'
    })
  })
}