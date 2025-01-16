import { useState } from "react";
import { filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from "../helpers/potionHelpers";
import { Potion } from "../types/Potion";


interface LevelFilterProps {
    potions: Potion[];
    allPotions: Potion[];
    setPotionList: Function;
    rarityFilter: string;
    levelFilter: number;
    setLevelFilter: Function;
    effectFilter: string;
}

const LevelFilter: React.FC<LevelFilterProps> = ({ potions, setPotionList, allPotions, rarityFilter, setLevelFilter, levelFilter, effectFilter }) => {

    const [requireLevel, setRequireLevel] = useState<number>(100);

    const updateRequireLevel = (level:number) => {
        let filteredPotions: Potion[] = [];
        if (levelFilter === 100) {
            filteredPotions = filterByLevelRequirement(potions, level) 
        } else {
            if (rarityFilter !== "" && effectFilter !== "" ) {
                filteredPotions = getPotionsByRarity(allPotions, rarityFilter);
                filteredPotions = findPotionByEffect(filteredPotions, effectFilter);
                filteredPotions = filterByLevelRequirement(filteredPotions, level);
            }else if (rarityFilter !== ""  ) {
                filteredPotions = getPotionsByRarity(allPotions, rarityFilter);
                filteredPotions = filterByLevelRequirement(filteredPotions, level);
            }else if (effectFilter !== "" ) {
                filteredPotions = findPotionByEffect(allPotions, effectFilter);
                filteredPotions = filterByLevelRequirement(filteredPotions, level);
            }else {
                filteredPotions = filterByLevelRequirement(allPotions, level);
            }
        }
        setRequireLevel(level);
        setLevelFilter(level);
        setPotionList(filteredPotions);
    }

    return (
        <>
            <div className="m-4">
                <label htmlFor="level" className="text-darkSepia text-xl  ">Level requirement </label>
                <input type="range" id="level" min="0" max="100" value={levelFilter} onChange={(levelRequire) => {updateRequireLevel(Number(levelRequire.target.value))}}  className="bg-darkSepia" />
                <p className=" text-medievalSepia text-sm text-center place-self-center mt-2">Require level is {requireLevel}</p>
            </div>

        </>
    );
};

export default LevelFilter;
