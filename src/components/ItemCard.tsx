import { Potion } from "../types/Potion";

interface PotionProps {
    potion: Potion; // Define the potion prop type
}

const PotionCard: React.FC<PotionProps> = ({ potion }) => {

    const image: string = "./src/public/" + potion.image;
    return (
        <>
            <div className="pt-16 pl-6 pr-6 text-center ">
                <div className="bg-red-200">
                    <img src={image} alt={potion.name} className="w-full h-auto" />
                    <div className="bg-red-200">
                        <h4 className="text-lg ">{potion.name}</h4>
                        <p className="text-sm">{potion.rarity}</p>
                    </div>
                    <div className="text-xs ">
                        <p>Boss {potion.meta.availability.drop_rate.boss}  {potion.meta.availability.drop_rate.chance}</p>
                    </div>
                </div>

            </div>
        </>
    );
};



export default PotionCard;