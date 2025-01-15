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


module.exports = {
    filterByLevelRequirement,
    getPotionsByRarity,
    listIngredients,
    findPotionByEffect
}
