import { useState } from "react";
import { filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from "../helpers/potionHelpers";
import { Potion } from "../types/Potion";



interface EffectFilterProps {
    // potions: Potion[];
    allPotions: Potion[];
    setPotionList: Function;
    rarityFilter: string;
    levelFilter: number;
    // effectFilter: string
    setEffectFilter: Function;
}

const EffectFilter: React.FC<EffectFilterProps> = ({ setPotionList, allPotions, rarityFilter, setEffectFilter, levelFilter }) => {

    const [secondaryEffect, setSecondaryEffect] = useState<string>("");

    const filterByEffect = (effect:string) => {

        let filteredPotions: Potion[] = [];
            if (rarityFilter !== "") {
                filteredPotions = getPotionsByRarity(allPotions, rarityFilter);
                filteredPotions = filterByLevelRequirement(allPotions, levelFilter);
                filteredPotions = findPotionByEffect(filteredPotions, effect);
            } else {    
                filteredPotions = filterByLevelRequirement(allPotions, levelFilter);  
                filteredPotions = findPotionByEffect(allPotions, effect);
            }  
        setSecondaryEffect(effect);
        setEffectFilter(effect);
        setPotionList(filteredPotions);
    }

    return (
        <>
            <div className="m-4">
                <label htmlFor="effect" className="text-darkSepia text-xl  ">Effect filter </label>
                <input type="text" id="effect" value={secondaryEffect} onChange={(effect) => {filterByEffect(effect.target.value)}} />
            </div>

        </>
    );
};

export default EffectFilter;
