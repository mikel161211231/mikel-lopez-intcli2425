import { useState } from "react";
import { calculateCraftingTime } from "../helpers/potionHelpers";
import { Potion } from "../types/Potion";

interface CraftTimeButtonProps {
    potions: Potion[];
}

const CraftTimeButton: React.FC<CraftTimeButtonProps> = ({ potions }) => {

    const [craftTime, setCraftTime] = useState<number>(-1);
    const calculateCraftTime = () => {
        const time = calculateCraftingTime(potions);
        setCraftTime(time);
    }

    return (
        <>
            <div className="grid grid-cols-2 grid-rows-1 flex-grow mt-2">
                <div className="text-lg text-medievalSepia">
                    <button onClick={calculateCraftTime}>Get craft time</button>
                </div>
                <div className="text-lg text-medievalSepia">
                    {(craftTime !== -1) && (
                        <p>Crafting time is {craftTime} minutes</p>
                    )}
                </div>
            </div>


        </>
    );
};



export default CraftTimeButton;