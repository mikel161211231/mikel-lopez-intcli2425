import { potions } from "../data/data";
import { filterByLevelRequirement } from "../helpers/potionHelpers"



describe('Test the function filterByLevelRequirement', () => {
    it('Test if the potions with level requirement are under 37', () => {
        const filteredPotions = filterByLevelRequirement(potions, 37);
        filteredPotions.map( potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(37))
    })
    it('Test if the potions with level requirement are under 0', () => {
        const filteredPotions = filterByLevelRequirement(potions, 0);
        filteredPotions.map( potion => expect(potion.usage.restrictions.levelRequirement).toBeLessThanOrEqual(0))
    })
})
