import { useState } from 'react'
import './index.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'
import CraftTimeButton from './components/CraftTimeButton'
import RarityFilter from './components/RarityFilter'
import LevelFilter from './components/LevelFilter'
import EffectFilter from './components/EffectFilter'
import PotionList from './components/PotionsList'

function App() {
  const [potionList, setPotionList] = useState<Potion[]>(potions);
  const [rarityFilter, setRarityFilter] = useState<string>("");
  const [levelFilter, setLevelFilter] = useState<number>(100);
  const [effectFilter, setEffectFilter] = useState<string>("");

  return (
    <>
      <div className="bg-darkBlue">
        {/* Inject the custom animation style for snake-like border effect */}
        <div className="w-screen h-screen ">
          <div className='h-5/6'>
            <PotionList potions={potionList} />
          </div>
            
            
            
          <div className="grid grid-cols-4 grid-rows-1 flex-grow">
            <LevelFilter potions={potionList} setPotionList={setPotionList} allPotions={potions} rarityFilter={rarityFilter} setLevelFilter={setLevelFilter} levelFilter={levelFilter} effectFilter={effectFilter} />
            <RarityFilter potions={potionList} setPotionList={setPotionList} setRarityFilter={setRarityFilter} allPotions={potions} rarityFilter={rarityFilter} levelFilter={levelFilter} effectFilter={effectFilter} />
            <EffectFilter setPotionList={setPotionList} setEffectFilter={setEffectFilter} allPotions={potions} rarityFilter={rarityFilter} levelFilter={levelFilter} />
            <CraftTimeButton potions={potionList}/>
          </div>
        </div>
      </div> 

    </>
  )
};

export default App
