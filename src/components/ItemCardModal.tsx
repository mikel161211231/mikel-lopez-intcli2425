import { Potion } from "../types/Potion";

interface PotionCardModalProps {
    potion: Potion; // Define the potion prop type
    setOpenModal: Function;
}

const PotionCardModal: React.FC<PotionCardModalProps> = ({ potion, setOpenModal }) => {

    const ingredientsClassName: string = "grid grid-cols-" + potion.ingredients.length + " grid-rows-1 flex-grow";
    const effectsClassName: string = "grid grid-cols-" + potion.effects.secondary.length + " grid-rows-1 flex-grow";

    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center z-50 animate-fadeIn ">
                <div className="p-10 bg-darkBlue border-4 border-double	border-darkSepia rounded-lg flex flex-col text-medievalSepia">
                    <h2 className="text-5xl px-6 mt-5 text-center place-self-center ">{potion!.name}</h2>

                    <div className="mt-5 grid grid-cols-2 grid-rows-1 flex-grow">
                        <div className="flex-col place-self-center">
                            <img src={potion.image} alt={potion.name} className="object-cover md:h-64 md:w-64 rounded-full	place-self-center" />

                            {/* RENDER WARNING */}
                            <div className="mt-4">
                                <p className="text-xl text-darkSepia text-center place-self-center">Warning</p>
                                {/* RENDER RESTRICTION LEVEL */}
                                <div className="">
                                    {potion.usage.restrictions.warnings.map((warning) => {
                                        return (
                                            <div className=" mt-2">
                                                {/* RENDER WARNING */}
                                                <p className="text-lg text-medievalSepia ">{"-----> " + warning}</p>

                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* RENDER INSTRUCTIONS */}
                            <div className="mt-4">
                                <p className="text-xl text-darkSepia text-center place-self-center">Instructions</p>
                                {/* RENDER INSTRUCTIONS */}
                                <div className="">
                                    {potion.usage.instructions.map((instruction) => {
                                        return (
                                            <div className=" mt-2">
                                                {/* RENDER INSTRUCTION */}
                                                <p className="text-lg text-medievalSepia">{"-----> " + instruction}</p>

                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                        <div className="flex-col place-self-center">
                            {/* RENDER EFFECTS */}
                            <div>
                                <p className="text-xl text-darkSepia text-center place-self-center">Effects</p>
                                <div className={effectsClassName}>
                                    {/* RENDER PRIMARY EFFECTS */}
                                    <div>
                                        <p className="text-lg text-medievalSepia text-center place-self-center">Primary</p>
                                        <p className="text-sm text-medievalSepia">{"-----> " + potion.effects.primary.attribute}</p>
                                    </div>
                                    {/* RENDER SECONDARY EFFECTS */}
                                    <div>
                                        <p className="text-lg text-medievalSepia text-center place-self-center">Secondary</p>
                                        {potion.effects.secondary.map((effect) => {
                                            return <p className="text-sm text-medievalSepia">{"-----> " + effect.attribute}</p>
                                        })}
                                    </div>
                                </div>
                            </div>


                            {/* RENDER INGREDIENTS */}
                            <div className="mt-4">
                                <p className="text-xl text-darkSepia text-center place-self-center">Ingredients</p>
                                <div className={ingredientsClassName}>
                                    {potion.ingredients.map((ingredient) => {
                                        return (
                                            <div className=" mt-2">
                                                {/* RENDER INGREDIENT NAME */}
                                                <p className="text-lg text-medievalSepia text-center place-self-center">{"" + ingredient.name}</p>
                                                <div className="grid grid-cols-2 grid-rows- flex-grow mt-2">
                                                    {/* RENDER INGREDIENT LOCATION */}
                                                    <div className="ml-2 mr-2">
                                                        <p className="text-sm text-medievalSepia text-center place-self-center">{"Location"}</p>
                                                        <p className="text-sm text-medievalSepia">{"-----> " + ingredient.origin.location}</p>
                                                    </div>
                                                    {/* RENDER INGREDIENT REGION */}
                                                    <div className="ml-2 mr-2">
                                                        <p className="text-sm text-medievalSepia text-center place-self-center">{"Region"}</p>
                                                        <p className="text-sm text-medievalSepia ">{"-----> " + ingredient.origin.region}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* RENDER RESTRICTIONS */}
                            <div className="mt-4">
                                <p className="text-xl text-darkSepia text-center place-self-center">Restrictions</p>
                                <div className="grid grid-cols-2 grid-rows-1 flex-grow mt-2">
                                    {/* RENDER RESTRICTION LEVEL */}
                                    <div className="">
                                        <p className="text-lg text-medievalSepia text-center place-self-center">Level</p>
                                        <p className="text-lg text-medievalSepia ">{"-----> " + potion.usage.restrictions.levelRequirement}</p>

                                    </div>
                                    {/* RENDER CLASS RESTRICTION */}
                                    <div className="">
                                        <p className="text-lg text-medievalSepia text-center place-self-center">Class</p>
                                        {potion.usage.restrictions.classRestrictions.map((restringtionClass: string) => {
                                            return <p className="text-sm text-medievalSepia">{"-----> " + restringtionClass}</p>
                                        })}
                                    </div>
                                </div>

                            </div>



                            {/* RENDER CRAFTING TIME */}
                            <div className="mt-4">
                                <p className="text-xl text-darkSepia text-center place-self-center">Crafting Time</p>
                                {/* RENDER CRAFTING TIME LEVEL */}
                                <div className="">
                                    <p className="text-lg text-medievalSepia text-center place-self-center">{potion.crafting.time.amount} {potion.crafting.time.unit}</p>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="mt-8 place-self-center">
                        <button onClick={() => setOpenModal()} className="text-medievalSepia border-2 rounded-lg border-black pt-4 pb-4 pl-8 pr-8 hover:bg-darkSepia">Close</button>
                    </div>
                </div>




            </div>
        </>
    );
};



export default PotionCardModal;