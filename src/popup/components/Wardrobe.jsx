const sampleItems = [
  { id: 1, name: "Red Shirt", image: "https://via.placeholder.com/80x100?text=Shirt" },
  { id: 2, name: "Blue Jeans", image: "https://via.placeholder.com/80x100?text=Jeans" },
  { id: 3, name: "Sneakers", image: "https://via.placeholder.com/80x100?text=Shoes" }
]

export default function Wardrobe() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sampleItems.map(item => (
        <div key={item.id} className="flex flex-col items-center">
          <img src={item.image} alt={item.name} className="w-16 h-20 object-cover" />
          <span className="text-xs">{item.name}</span>
        </div>
      ))}
    </div>
  )
}