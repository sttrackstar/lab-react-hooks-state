import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // State for cart management
  const [cart, setCart] = useState([])
  
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      
      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Category Filter Dropdown */}
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      
      {/* Product List */}
      <ProductList 
        selectedCategory={selectedCategory} 
        addToCart={addToCart}
      />
      
      {/* Shopping Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App