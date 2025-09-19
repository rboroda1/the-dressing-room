export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex border-b mb-2">
      <button
        className={`flex-1 py-1 ${activeTab === "wardrobe" ? "border-b-2 border-blue-500" : ""}`}
        onClick={() => setActiveTab("wardrobe")}
      >
        Wardrobe
      </button>
      <button
        className={`flex-1 py-1 ${activeTab === "canvas" ? "border-b-2 border-blue-500" : ""}`}
        onClick={() => setActiveTab("canvas")}
      >
        Canvas
      </button>
    </div>
  )
}