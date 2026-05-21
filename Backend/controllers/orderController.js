const db = require('../config/db')

const placeOrder = (req, res) => {

  const {
    customer_name,
    mobile_number,
    product_name,
    product_price,
    address,
    landmark,
    payment_method
  } = req.body

  const sql = `
    INSERT INTO orders
    (
      customer_name,
      mobile_number,
      product_name,
      product_price,
      address,
      landmark,
      payment_method
    )

    VALUES (?, ?, ?, ?, ?, ?, ?)
  `

  db.query(
    sql,
    [
      customer_name,
      mobile_number,
      product_name,
      product_price,
      address,
      landmark,
      payment_method
    ],

    (err, result) => {

      if (err) {
        return res.status(500).json({
          message: 'Order Failed'
        })
      }

      res.status(201).json({
        message: 'Order Placed Successfully'
      })
    }
  )
}

module.exports = {
  placeOrder
}