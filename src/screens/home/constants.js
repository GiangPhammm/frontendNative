import PetCategory from '../../models/pet-category';

import * as theme from '../../theme';

// Dummy database
export const PET_CATEGORIES = [
    new PetCategory('c1', 'Bird', theme.SECONDARY_COLOR1),
    new PetCategory('c2', 'Cat', theme.SECONDARY_COLOR2),
    new PetCategory('c3', 'Dog', theme.SECONDARY_COLOR3),
    new PetCategory('c4', 'Ferret', theme.SECONDARY_COLOR4),
    new PetCategory('c5', 'Fish', theme.SECONDARY_COLOR1),
    new PetCategory('c6', 'Guinea Pig', theme.SECONDARY_COLOR2),
    new PetCategory('c7', 'Hamster', theme.SECONDARY_COLOR3),
    new PetCategory('c8', 'Rabbit', theme.SECONDARY_COLOR4),
    new PetCategory('c9', 'Reptile', theme.SECONDARY_COLOR1),
    new PetCategory('c10', 'Poultry', theme.SECONDARY_COLOR2),
]
