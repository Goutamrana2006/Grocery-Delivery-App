import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

function Home() {
  const products = [
{
  id: 1,
  name: 'Banana',
  price: 50,
  image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg'
},
{
  id: 2,
  name: 'Orange',
  price: 80,
  image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg'
},
{
  id: 3,
  name: 'Potato',
  price: 35,
  image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg'
},
{
  id: 4,
  name: 'Onion',
  price: 45,
  image: 'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg'
},
{
  id: 5,
  name: 'Carrot',
  price: 60,
  image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg'
},
{
  id: 6,
  name: 'Broccoli',
  price: 90,
  image: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg'
},
{
  id: 7,
  name: 'Bread',
  price: 40,
  image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg'
},
{
  id: 8,
  name: 'Eggs',
  price: 70,
  image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg'
},
{
  id: 9,
  name: 'Cheese',
  price: 150,
  image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg'
},
{
  id: 13,
  name: 'Butter',
  price: 95,
  image: 'https://images.pexels.com/photos/531334/pexels-photo-531334.jpeg'
},
{
  id: 10,
  name: 'Rice',
  price: 220,
  image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg'
},
{
  id: 11,
  name: 'Cooking Oil',
  price: 180,
  image: 'https://www.mashed.com/img/gallery/what-you-should-do-with-your-used-cooking-oil-instead-of-tossing-it-out/l-intro-1698001970.jpg'
}
  ]

  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />

      <div className='products-grid'>
        {
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

      <Footer />
         </>
  )
}

export default Home