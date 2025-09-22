export default function Mannequin({ mannequinOutfit }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg p-3 h-full">
      <div className="relative w-24 h-36 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full">
        {/* Head */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-200 rounded-full"></div>
        
        {/* Torso area for tops/dress */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center">
          {mannequinOutfit.dress ? (
            <img 
              src={mannequinOutfit.dress.image} 
              alt={mannequinOutfit.dress.name}
              className="w-12 h-15 object-cover rounded opacity-80"
            />
          ) : mannequinOutfit.tops ? (
            <img 
              src={mannequinOutfit.tops.image} 
              alt={mannequinOutfit.tops.name}
              className="w-12 h-12 object-cover rounded opacity-80"
            />
          ) : null}
        </div>

        {/* Legs area for bottoms */}
        {!mannequinOutfit.dress && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center">
            {mannequinOutfit.bottoms && (
              <img 
                src={mannequinOutfit.bottoms.image} 
                alt={mannequinOutfit.bottoms.name}
                className="w-10 h-12 object-cover rounded opacity-80"
              />
            )}
          </div>
        )}

        {/* Feet area for shoes */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-6 flex items-center justify-center">
          {mannequinOutfit.shoes && (
            <img 
              src={mannequinOutfit.shoes.image} 
              alt={mannequinOutfit.shoes.name}
              className="w-8 h-4 object-cover rounded opacity-80"
            />
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-2 text-center">Click +/- to build your outfit</p>
    </div>
  )
}