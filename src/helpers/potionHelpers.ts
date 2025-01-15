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


module.exports = {
    filterByLevelRequirement,
    getPotionsByRarity,
}
