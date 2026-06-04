import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product])
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const appClass = darkMode ? 'dark-mode' : ''

  return (
    <div className={appClass}>
      <h1> Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={handleToggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
