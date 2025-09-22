import Mannequin from './Mannequin'
import ClothingGrid from './ClothingGrid'

export default function FittingRoom({ mannequinOutfit, cartItems, toggleMannequin }) {
  return (
    <div className="flex gap-3 h-full">
      <div className="w-3/4">
        <Mannequin mannequinOutfit={mannequinOutfit} />
      </div>
      <div className="w-1/4">
        <ClothingGrid 
          cartItems={cartItems}
          mannequinOutfit={mannequinOutfit}
          toggleMannequin={toggleMannequin}
        />
      </div>
    </div>
  )
}