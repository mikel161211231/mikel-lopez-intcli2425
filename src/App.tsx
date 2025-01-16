import { useState } from 'react'
import './index.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'
import PotionCard from './components/ItemCard'
import CraftTimeButton from './components/CraftTimeButton'
import RarityFilter from './components/RarityFilter'

function App() {
  const [potionList, setPotionList] = useState<Potion[]>(potions)

  return (
    <>
      <div className="bg-darkBlue">
        {/* Inject the custom animation style for snake-like border effect */}
        <div className="w-full h-full ">
          <div className="grid grid-cols-5 grid-rows-2 flex-grow">
            {potionList.map((potionArray: Potion) => {
              return <PotionCard potion={potionArray} />
            })}
          </div>
          <div>
            <RarityFilter potions={potionList}/>
            <CraftTimeButton potions={potionList}/>
          </div>
        </div>
      </div> 

    </>
  )
};

export default App
