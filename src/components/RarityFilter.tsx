import { useState } from "react";
import { getPotionsByRarity } from "../helpers/potionHelpers";
import { Potion } from "../types/Potion";



interface RarityFilterProps {
    potions: Potion[];
    setPotionList: Function;
}

const RarityFilter: React.FC<RarityFilterProps> = ({ potions, setPotionList }) => {

    const [rarity, setRarity] = useState<string>("");
    const [openOptions, setOpenOptions] = useState<boolean>(false);

    const filterThePotionsWithRarity = () => {
        const filteredPotions = getPotionsByRarity(potions, rarity);
        setPotionList(filteredPotions);
    }

    const openDropdownOptions = () => {
        setOpenOptions(!openOptions)
    }


    return (
        <>
    <div>
        {openOptions && (
            <div>
            <button onClick={openDropdownOptions}>Legendary</button>
            <button onClick={openDropdownOptions}>Epic</button>
            <button onClick={openDropdownOptions}>Mythic</button>
            </div>
        )}
  <button onClick={openDropdownOptions}>R</button>
</div>

        </>
    );
};



export default RarityFilter;
