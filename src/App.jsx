import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  
const [darkMode, setDarkMode] = useState(false)
  
const [cart, setCart] = useState([])
  
const [category, setCategory] = useState('all')

const toggleDarkMode = () => {
  setDarkMode(prev => !prev)
}

const addToCart = (product) => {
  setCart(prev => [...prev, product])
}

const handleCategoryChange = (e) => {
  setCategory(e.target.value)
}

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      
        <DarkModeToggle
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          />
      
      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bike">Bike</option>
        <option value="Veggies">Veggies</option>
      </select>

      <ProductList 
        category={category}
        addToCart={addToCart}
      
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
