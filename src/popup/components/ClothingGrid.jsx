export default function ClothingGrid({ cartItems, mannequinOutfit, toggleMannequin }) {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Your Items</h3>
      <div className="flex-1 overflow-y-auto space-y-2">
        {cartItems.map(item => {
          const isOnMannequin = mannequinOutfit[item.category]?.id === item.id
          return (
            <div 
              key={item.id} 
              onClick={() => toggleMannequin(item)}
              className={`rounded-lg shadow-sm border cursor-pointer transition-all hover:shadow-md ${
                isOnMannequin ? 'ring-2 ring-purple-500' : 'hover:border-purple-300'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-16 object-cover rounded-lg"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}