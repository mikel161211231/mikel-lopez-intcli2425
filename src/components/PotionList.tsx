
import { Potion } from "../types/Potion";
import PotionCard from "./ItemCard";



interface PotionListProps {
    potions: Potion[];
}

const PotionList: React.FC<PotionListProps> = ({ potions }) => {



    return (
        <div>

            <div className="grid grid-cols-1 grid-rows-1 flex-grow">
                {(potions.length === 0) && (
                    <h2 className='text-5xl px-6 mt-5 fixed inset-0 flex justify-center items-center z-20 text-center place-self-center text-medievalSepia'>There is no potion with these filters</h2>
                )}
            </div>

            <div className="grid grid-cols-5 grid-rows-2 flex-grow">
                {potions.map((potionArray: Potion) => {
                    return <PotionCard potion={potionArray} />
                })}
            </div>
        </div>
    );
};



export default PotionList;