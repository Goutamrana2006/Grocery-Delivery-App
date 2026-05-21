import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import API from '../services/api'

function Products() {

  const [products, setProducts] = useState([])

useEffect(() => {

  const localProducts = [
    {
      id: 12,
      name: 'Banana',
      price: 50,
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 13,
      name: 'Orange Juice',
      price: 110,
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b'
    },
    {
      id: 14,
      name: 'Chocolate',
      price: 120,
      image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg'
    },
     {
            id: 4,
            name: 'Soft Drink',
            price: 55,
            image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg'
          },
          {
            id: 5,
            name: 'Coffee',
            price: 250,
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
          },
          {
            id: 6,
            name: 'Green Grapes',
            price: 140,
            image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg'
          },
          {
            id: 7,
            name: 'Watermelon',
            price: 90,
            image: 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg'
          },
          {
            id: 8,
            name: 'Strawberry',
            price: 180,
            image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg'
          },
          {
            id: 9,
            name: 'Pineapple',
            price: 110,
            image: 'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg'
          },
          {
            id: 10,
            name: 'Cabbage',
            price: 55,
            image: 'https://images.pexels.com/photos/5945904/pexels-photo-5945904.jpeg'
          },
          {
            id: 11,
            name: 'Cauliflower',
            price: 70,
            image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'
          },
          {
            id: 12,
            name: 'Capsicum',
            price: 85,
            image: 'https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg'
          },
          {
            id: 13,
            name: 'Mango',
            price: 160,
            image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg'
          },
          {
            id: 14,
            name: 'Kiwi',
            price: 220,
            image: 'https://th.bing.com/th/id/OIP.YVn6SC2K_reXXqa102z4_AHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
          },
          {
            id: 15,
            name: 'Yogurt',
            price: 95,
            image: 'https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg'
          },
          {
            id: 16,
            name: 'Ice Cream',
            price: 180,
            image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg'
          },
          {
            id: 17,
            name: 'Biscuits',
            price: 40,
            image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg'
          },
          {
            id: 18,
            name: 'Maggi Noodles',
            price: 25,
            image: 'https://hungryforever.net/wp-content/uploads/2018/01/feature-image-sunfeast-yippe.jpg'
          },
          {
            id: 19,
            name: 'Chowmein',
            price: 85,
            image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg'
          },
          {
            id: 20,
            name: 'Pasta',
            price: 120,
            image: 'https://s23209.pcdn.co/wp-content/uploads/2022/08/220602_DD_Easy-Pasta-Salad_025-1365x2048.jpg'
          }

  ]

  API.get('/products')

    .then((res) => {

      if (res.data.length > 0) {
        setProducts(res.data)
      } else {
        setProducts(localProducts)
      }

    })

    .catch((err) => {

      console.log(err)

      setProducts(localProducts)
    })

}, [])

  return (
    <>
      <Navbar />

      <div className='products-page'>

        <div className='products-header'>
          <h1>Fresh Grocery Products 🛒</h1>
        </div>

        <div className='products-grid'>
          {
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Products