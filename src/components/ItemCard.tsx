import { useState } from "react";
import { Potion } from "../types/Potion";
import PotionCardModal from "./ItemCardModal";

interface PotionProps {
    potion: Potion; // Define the potion prop type
}

const PotionCard: React.FC<PotionProps> = ({ potion }) => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const image: string = "./src/public/" + potion.image;

    return (
        <>
            <div className="pt-8 pl-6 pr-6 text-center ">
                <div className="border-2 rounded-lg border-medievalSepia p-4 ">
                    <div className="">
                        <h4 className="text-xl text-medievalSepia">{potion.name}</h4>

                    </div>
                    <div className="place-items-center">
                        <img src={image} alt={potion.name} className="h-48 w-48 object-cover md:h-48 md:w-48 rounded-full " />
                    </div>


                    <div className="text-sm pt-4">
                        <p className="text-sm text-darkSepia">Rarity is {potion.rarity}</p>
                        <p className="text-sm text-darkSepia">Boss {potion.meta.availability.drop_rate.boss}  {potion.meta.availability.drop_rate.chance}</p>
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