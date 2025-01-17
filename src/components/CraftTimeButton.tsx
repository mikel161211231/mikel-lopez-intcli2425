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
            <div className="mt-4 grid grid-cols-2 grid-rows-1 flex-grow">
                <div className="">
                    <button onClick={calculateCraftTime} className="text-xl text-darkSepia">Get the craft time</button>
                    {(craftTime !== -1) && (
                        <p className="text-lg text-medievalSepia">Crafting time is {craftTime} minutes</p>
                    )}
                </div>
            </div>


        </>
    );
};



export default CraftTimeButton;