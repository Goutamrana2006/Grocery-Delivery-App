function CategorySection() {
  const categories = [
    'Fruits',
    'Vegetables',
    'Snacks',
    'Dairy',
    'Beverages'
  ]

  return (
    <div className='categories'>
      {
        categories.map((item, index) => (
          <div key={index} className='category-card'>
            {item}
          </div>
        ))
      }
    </div>
  )
}

export default CategorySection