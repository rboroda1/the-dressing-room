import { ShoppingBag, X } from 'lucide-react'

export default function CartView({ 
  setCurrentView, 
  cartItems, 
  savedForLaterItems, 
  cartTotal, 
  saveForLater, 
  removeCompletely, 
  moveToCart 
}) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        <button 
          onClick={() => setCurrentView('fitting-room')}
          className="text-purple-600 hover:text-purple-700 text-sm"
        >
          ← Back to Fitting Room
        </button>
      </div>

      {cartItems.length === 0 && savedForLaterItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <ShoppingBag size={48} className="text-gray-300 mb-4" />
          <p className="text-gray-500 text-center">Your cart is empty.<br />Add some items to get started!</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pb-4">
          {/* Cart Items Section */}
          {cartItems.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Shopping Cart</h3>
              <div className="space-y-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-3 bg-white p-3 rounded-lg border">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.store}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm font-semibold text-green-600">${item.price}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => saveForLater(item.id)}
                            className="bg-blue-100 text-blue-600 hover:bg-blue-200 text-xs px-2 py-0.5 rounded transition-colors"
                          >
                            Set Aside
                          </button>
                          <button
                            onClick={() => removeCompletely(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors"
                            title="Remove completely"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved for Later Section */}
          {savedForLaterItems.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Saved for Later ({savedForLaterItems.length})</h3>
              <div className="space-y-2">
                {savedForLaterItems.map(item => (
                  <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">${item.price}</p>
                    </div>
                    <button
                      onClick={() => moveToCart(item.id)}
                      className="bg-purple-100 text-purple-600 hover:bg-purple-200 text-xs px-2 py-1 rounded transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CHECKOUT SECTION */}
          <div className="bg-white border rounded-lg p-4 mt-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Cart Total:</span>
              <span className="text-xl font-bold text-green-600">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all font-semibold">
              Checkout with Stripe
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Secure checkout • Items from multiple stores
            </p>
          </div>
        </div>
      )}
    </div>
  )
}