import { Crafting } from "./Crafting";
import { Effect } from "./Effect";
import { SecondaryEffect } from "./SecondaryEffect";
import { Ingredient } from "./Ingredient";
import { Meta } from "./Meta";
import { Usage } from "./Usage";


export interface Potion {

    id: string,
    name: string,
    type: string,
    rarity: string,
    effects: {
        primary: Effect,
        secondary: SecondaryEffect[],
    },
    ingredients: Ingredient[],
    crafting: Crafting,
    usage: Usage,
    meta: Meta, 
    image: string,
}