import { potions } from "../data/data";
import { filterByLevelRequirement } from "../helpers/potionHelpers"



describe('Test the function filterByLevelRequirement', () => {
    it('Test if the potions with level requirement are under 35 and are 10', () => {
        const filteredPotions = filterByLevelRequirement(potions, 35);
        filteredPotions.map( potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(35));
        expect(filteredPotions.length).toBe(10);
    })
    it('Test if the potions with level requirement are under 17 and are 3', () => {
        const filteredPotions = filterByLevelRequirement(potions, 17);
        filteredPotions.map( potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(17));
        expect(filteredPotions.length).toBe(3);
    })
    it('Test if the potions with level requirement are under 0 and are 0', () => {
        const filteredPotions = filterByLevelRequirement(potions, 0);
        filteredPotions.map( potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(0));
        expect(filteredPotions.length).toBe(0);
    })
})
