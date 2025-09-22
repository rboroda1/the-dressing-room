import { useState } from "react"
import Header from "./components/Header"
import FittingRoom from "./components/FittingRoom"
import CartView from "./components/CartView"
import { sampleClothing } from "./data/sampleData"

export default function App() {
  const [currentView, setCurrentView] = useState('fitting-room')
  const [clothingItems, setClothingItems] = useState(sampleClothing)
  const [mannequinOutfit, setMannequinOutfit] = useState({
    tops: null,
    bottoms: null,
    dress: null,
    shoes: null
  })

  const cartItems = clothingItems.filter(item => item.inCart)
  const savedForLaterItems = clothingItems.filter(item => item.savedForLater)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  const moveToCart = (itemId) => {
    setClothingItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, inCart: true, savedForLater: false } : item
    ))
  }

  const saveForLater = (itemId) => {
    setClothingItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, inCart: false, savedForLater: true } : item
    ))
    
    // Remove from mannequin if it was being worn
    setMannequinOutfit(prev => {
      const item = clothingItems.find(i => i.id === itemId)
      if (item) {
        return { ...prev, [item.category]: null }
      }
      return prev
    })
  }

  const removeCompletely = (itemId) => {
    setClothingItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, inCart: false, savedForLater: false } : item
    ))
    
    // Remove from mannequin if it was being worn
    setMannequinOutfit(prev => {
      const item = clothingItems.find(i => i.id === itemId)
      if (item) {
        return { ...prev, [item.category]: null }
      }
      return prev
    })
  }

  const toggleMannequin = (item) => {
    const isOnMannequin = mannequinOutfit[item.category]?.id === item.id
    
    if (isOnMannequin) {
      // Remove from mannequin
      setMannequinOutfit(prev => ({ ...prev, [item.category]: null }))
    } else {
      // Add to mannequin
      setMannequinOutfit(prev => ({ ...prev, [item.category]: item }))
    }
  }

  return (
    <div className="w-80 h-[500px] bg-gray-100 text-gray-800 font-sans overflow-hidden">
      <Header 
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartItems={cartItems}
      />
      
      <div className="px-3 pb-3 h-full">
        {currentView === 'fitting-room' ? (
          <FittingRoom 
            mannequinOutfit={mannequinOutfit}
            cartItems={cartItems}
            toggleMannequin={toggleMannequin}
          />
        ) : (
          <CartView 
            setCurrentView={setCurrentView}
            cartItems={cartItems}
            savedForLaterItems={savedForLaterItems}
            cartTotal={cartTotal}
            saveForLater={saveForLater}
            removeCompletely={removeCompletely}
            moveToCart={moveToCart}
          />
        )}
      </div>
    </div>
  )
}