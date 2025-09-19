import { useState } from "react"
import Tabs from "./components/Tabs"
import Wardrobe from "./components/Wardrobe"
import Canvas from "./components/Canvas"

export default function App() {
  const [activeTab, setActiveTab] = useState("wardrobe")

  return (
    <div className="w-80 h-96 bg-white text-gray-800 p-2">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "wardrobe" ? <Wardrobe /> : <Canvas />}
    </div>
  )
}