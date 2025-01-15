import { useState } from 'react'
import './index.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'
import PotionCard from './components/ItemCard'

function App() {
  const [potionList] = useState<Potion[]>(potions)

  return (
    <>
      <div className="">
        {/* Inject the custom animation style for snake-like border effect */}
        <div className="w-full h-full ">
          <div className="grid grid-cols-5 grid-rows-5 flex-grow">
            {potionList.map((potionArray: Potion) => {
              return <PotionCard potion={potionArray} />
            })}
          </div>
        </div>
      </div> 

    </>
  )
};

export default App
