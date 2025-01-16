import { useState } from "react";
import { filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from "../helpers/potionHelpers";
import { Potion } from "../types/Potion";



interface RarityFilterProps {
    potions: Potion[];
    allPotions: Potion[];
    setPotionList: Function;
    rarityFilter: string;
    setRarityFilter: Function;
    levelFilter: number;
    effectFilter: string;
}

const RarityFilter: React.FC<RarityFilterProps> = ({ potions, setPotionList, allPotions, rarityFilter, setRarityFilter, levelFilter, effectFilter }) => {

    const [rarity, setRarity] = useState<string>("");
    const [openOptions, setOpenOptions] = useState<boolean>(false);

    const filterThePotionsWithLegendaryRarity = () => {

        let filteredPotions: Potion[] = [];

        if (rarityFilter === "") {
            filteredPotions = getPotionsByRarity(potions, "legendary");

        } else {
            filteredPotions = filterByLevelRequirement(allPotions, levelFilter);
             if (effectFilter !== "") {
                filteredPotions = findPotionByEffect(filteredPotions, effectFilter);
            }
            filteredPotions = getPotionsByRarity(filteredPotions, "legendary");
        }
        setRarity("Legendary");
        setRarityFilter("legendary");
        setPotionList(filteredPotions);

    }

    const filterThePotionsWithEpicRarity = () => {
        let filteredPotions: Potion[] = [];
        if (rarityFilter === "") {
            filteredPotions = getPotionsByRarity(potions, "epic");
        } else {
            filteredPotions = filterByLevelRequirement(allPotions, levelFilter);
             if (effectFilter !== "") {
                filteredPotions = findPotionByEffect(filteredPotions, effectFilter);
            }
            filteredPotions = getPotionsByRarity(filteredPotions, "epic");
        }
        setRarity("Epic")
        setRarityFilter("epic");
        setPotionList(filteredPotions);
    }

    const filterThePotionsWithMythicRarity = () => {
        let filteredPotions: Potion[] = [];
        if (rarityFilter === "") {
            filteredPotions = getPotionsByRarity(potions, "mythic");
        } else {
            filteredPotions = filterByLevelRequirement(allPotions, levelFilter);
             if (effectFilter !== "") {
                filteredPotions = findPotionByEffect(filteredPotions, effectFilter);
            }
            filteredPotions = getPotionsByRarity(filteredPotions, "mythic");
            
        }
        setRarity("Mythic")
            setRarityFilter("mythic");
            setPotionList(filteredPotions);
    }

    const openDropdownOptions = () => {
        setOpenOptions(!openOptions)
    }



    return (
        <>
            <div className="m-4">
                {(rarity === "") ? (
                    <button onClick={openDropdownOptions} className="w-64 text-xl text-darkSepia border-2  border-black pl-6 pr-6 hover:bg-medievalRed">Rarity</button>
                )
                    :
                    (
                        <button onClick={openDropdownOptions} className=" w-64 text-xl text-darkSepia border-2  border-black pl-6 pr-6 hover:bg-medievalRed">Selected {rarity}</button>
                    )}

                {openOptions && (
                    <div className="z-20">
                        <div>
                            <button onClick={filterThePotionsWithLegendaryRarity} className="w-64 text-medievalSepia border-2  border-black pl-6 pr-6 hover:bg-darkSepia">Legendary</button>
                        </div>
                        <div>
                            <button onClick={filterThePotionsWithEpicRarity} className="w-64 text-medievalSepia border-2  border-black pl-6 pr-6 hover:bg-darkSepia">Epic</button>
                        </div>
                        <div>
                            <button onClick={filterThePotionsWithMythicRarity} className="w-64 text-medievalSepia border-2 border-black pl-6 pr-6 hover:bg-darkSepia">Mythic</button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};



export default RarityFilter;
