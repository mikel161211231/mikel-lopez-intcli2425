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


module.exports = {
    filterByLevelRequirement,
    getPotionsByRarity,
    listIngredients
}
