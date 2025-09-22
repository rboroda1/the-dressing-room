export default function Canvas() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Simple mannequin placeholder */}
      <div className="w-24 h-48 bg-gray-200 rounded-md relative">
        <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">
          Mannequin
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600">Outfit canvas coming soon...</p>
    </div>
  )
}