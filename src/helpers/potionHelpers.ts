import { Potion } from "../types/Potion";


// Filtrar las pociones que requieren un nivel menor o igual al especificado
export function filterByLevelRequirement(potions:Potion[], levelRequirement:number): Potion[] {
    const filteredPotions: Potion[] = potions.filter((potion:Potion) => potion.usage.restrictions.levelRequirement <= levelRequirement ) 
    return filteredPotions;
}

// Filtrar las pociones que tienen la rareza especificada
export function getPotionsByRarity(potions:Potion[], rarity:string): Potion[] {
    const filteredPotions: Potion[] = potions.filter((potion:Potion) => potion.rarity === rarity ) 
    return filteredPotions;
}

// Devuelve una lista de nombres de ingredientes de una pocion especifica
export function listIngredients(potion:Potion): string[] {
    const ingredientsList: string[] = [];
    potion.ingredients.map(ingredient => ingredientsList.push(ingredient.name));
    return ingredientsList;
}

// Encuentra todas las pociones que otorgan un efecto secundario especifico
export function findPotionByEffect(potions:Potion[], secondaryEffect:string): Potion[] {
    const filteredPotions: Potion[] = [];
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];
        
        for (let j = 0; j < potion.effects.secondary.length; j++) {
            const effect = potion.effects.secondary[j];
            if (effect.attribute === secondaryEffect) {
                filteredPotions.push(potion);
            }
        }
    }
    return filteredPotions;
}

// Devuelve el tiempo total necesario para crear una lista de pociones en minutos
export function calculateCraftingTime(potions:Potion[]): number {
    let totalCraftingTime: number = 0;
    let totalSeconds: number = 0;

    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];        
        if (potion.crafting.time.unit === "minutes") {
            totalCraftingTime += potion.crafting.time.amount;
        } else if (potion.crafting.time.unit === "hours") {
            totalCraftingTime += potion.crafting.time.amount*60;
        } else if (potion.crafting.time.unit === "seconds") {
            totalSeconds += potion.crafting.time.amount;
        }
    }
    totalCraftingTime += Math.ceil(totalSeconds/60);
    return totalCraftingTime;
}

// module.exports = {
//     filterByLevelRequirement,
//     getPotionsByRarity,
//     listIngredients,
//     findPotionByEffect,
//     calculateCraftingTime

// }
