import { potions } from "../data/data";
import { filterByLevelRequirement, getPotionsByRarity, listIngredients, findPotionByEffect } from "../helpers/potionHelpers"
import { Potion } from "../types/Potion";



describe('Test the function filterByLevelRequirement', () => {
    it('Test if the potions with level requirement are under 35 and are 10', () => {
        const filteredPotions = filterByLevelRequirement(potions, 35);
        filteredPotions.map(potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(35));
        expect(filteredPotions.length).toBe(10);
    })
    it('Test if the potions with level requirement are under 17 and are 3', () => {
        const filteredPotions = filterByLevelRequirement(potions, 17);
        filteredPotions.map(potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(17));
        expect(filteredPotions.length).toBe(3);
    })
    it('Test if the potions with level requirement are under 0 and are 0', () => {
        const filteredPotions = filterByLevelRequirement(potions, 0);
        filteredPotions.map(potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(0));
        expect(filteredPotions.length).toBe(0);
    })
});


describe('Test the function getPotionsByRarity', () => {
    it('Test if the potions with legendary rarity and are 6', () => {
        const filteredPotions = getPotionsByRarity(potions, "legendary");
        filteredPotions.map(potion => expect(potion.rarity).toBe("legendary"));
        expect(filteredPotions.length).toBe(6);
    })
    it('Test if the potions with epic rarity and are 2', () => {
        const filteredPotions = getPotionsByRarity(potions, "epic");
        filteredPotions.map(potion => expect(potion.rarity).toBe("epic"));
        expect(filteredPotions.length).toBe(2);
    })
    it('Test if the potions with mythic rarity and are 2', () => {
        const filteredPotions = getPotionsByRarity(potions, "mythic");
        filteredPotions.map(potion => expect(potion.rarity).toBe("mythic"));
        expect(filteredPotions.length).toBe(2);
    })
})


describe('Test the function listIngredients', () => {

    describe('Test with the first potion (Elixir of Eternal Flame) on the array of potions', () => {
        const potion: Potion = { ...potions[0] }
        const ingredientsList = listIngredients(potion);
        it('Ingredients list length is 3', () => {
            expect(ingredientsList.length).toBe(3);
        })
        it('All ingredients names are on the ingredients list', () => {
            expect(ingredientsList).toContain("Phoenix Feather");
            expect(ingredientsList).toContain("Molten Ember");
            expect(ingredientsList).toContain("Flameflower Extract");
        })
    })

    describe('Test with the five potion (Elixir of Arcane Surge) on the array of potions', () => {
        const potion: Potion = { ...potions[4] }
        const ingredientsList = listIngredients(potion);
        it('Ingredients list length is 3', () => {
            expect(ingredientsList.length).toBe(3);
        })
        it('All ingredients names are on the ingredients list', () => {
            expect(ingredientsList).toContain("Arcane Crystal");
            expect(ingredientsList).toContain("Enchanted Powder");
            expect(ingredientsList).toContain("Moonlit Dew");
        })
    })

})



describe('Test the function findPotionByEffect', () => {
    describe('Test if the potions with healthRegeneration secondary effect', () => {
        const filteredPotions = findPotionByEffect(potions, "healthRegeneration");
        it('Test if the potions with healthRegeneration are 1', () => {
            expect(filteredPotions.length).toBe(1);
        })
        it('Test if the potions with healthRegeneration secondary effect contains', () => {
            filteredPotions.map(potion => expect(potion.effects.secondary.some(effect => effect.attribute === "healthRegeneration")));
        })
    })

    describe('Test if the potions with manaRegeneration secondary effect', () => {
        const filteredPotions = findPotionByEffect(potions, "manaRegeneration");
        it('Test if the potions with manaRegeneration are 2', () => {
            expect(filteredPotions.length).toBe(2);
        })
        it('Test if the potions with manaRegeneration secondary effect contains', () => {
            filteredPotions.map(potion => expect(potion.effects.secondary.some(effect => effect.attribute === "manaRegeneration")));
        })
    })
    describe('Test if the potions with notAnEffect secondary effect', () => {
        const filteredPotions = findPotionByEffect(potions, "notAnEffect");
        it('Test if the potions with notAnEffect are 0', () => {
            expect(filteredPotions.length).toBe(0);
        })
        it('Test if the potions with notAnEffect secondary effect contains', () => {
            filteredPotions.map(potion => expect(potion.effects.secondary.some(effect => effect.attribute === "notAnEffect")));
        })
    })

})