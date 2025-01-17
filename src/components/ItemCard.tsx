import { useState } from "react";
import { Potion } from "../types/Potion";
import PotionCardModal from "./ItemCardModal";

interface PotionProps {
    potion: Potion; // Define the potion prop type
}

const PotionCard: React.FC<PotionProps> = ({ potion }) => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <div className="pt-8 pl-6 pr-6 text-center ">
                <div className="border-2 rounded-lg border-medievalSepia p-4 ">
                    <div className="">
                        <h4 className="text-xl text-medievalSepia">{potion.name}</h4>

                    </div>
                    <div className="">
                        <div className="place-items-center">
                            <img src={potion.image} alt={potion.name} className=" w-48 h-48 ml-8 place-self-center rounded-full " />
                        </div>


                        <div className="text-sm pt-4">
                            <p className="text-sm text-darkSepia">Rarity is {potion.rarity}</p>
                            <p className="text-sm text-darkSepia">Boss {potion.meta.availability.drop_rate.boss}</p>
                            <p className="text-sm text-darkSepia">Drop rate  {potion.meta.availability.drop_rate.chance}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button onClick={() => setOpenModal(true)} className="text-medievalSepia border-2 rounded-lg border-black pl-6 pr-6 hover:bg-darkSepia">More Info</button>
                    </div>
                </div>
            </div>
            {(openModal && (
                <PotionCardModal potion={potion} setOpenModal={() => setOpenModal(false)} />
            ))}

        </>
    );
};



export default PotionCard;