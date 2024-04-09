import PetCategory from '../../models/pet-category';

import birdIcon from '../../assets/bird.png';
import catIcon from '../../assets/cat.png';
import dogIcon from '../../assets/dog.png';
import ferretIcon from '../../assets/ferret.png';
import fishIcon from '../../assets/fish.png';
import guineaPigIcon from '../../assets/guinea-pig.png';
import hamsterIcon from '../../assets/hamster.png';
import rabbitIcon from '../../assets/rabbit.png';
import reptileIcon from '../../assets/reptile.png';
import poultryIcon from '../../assets/poultry.png';


import * as theme from '../../theme';

// Dummy database
export const PET_CATEGORIES = [
    new PetCategory('c1', 'Bird', theme.SECONDARY_COLOR1, birdIcon),
    new PetCategory('c2', 'Cat', theme.SECONDARY_COLOR2, catIcon),
    new PetCategory('c3', 'Dog', theme.SECONDARY_COLOR3, dogIcon),
    new PetCategory('c4', 'Ferret', theme.SECONDARY_COLOR4, ferretIcon),
    new PetCategory('c5', 'Fish', theme.SECONDARY_COLOR1, fishIcon),
    new PetCategory('c6', 'Guinea Pig', theme.SECONDARY_COLOR2, guineaPigIcon),
    new PetCategory('c7', 'Hamster', theme.SECONDARY_COLOR3, hamsterIcon),
    new PetCategory('c8', 'Rabbit', theme.SECONDARY_COLOR4, rabbitIcon),
    new PetCategory('c9', 'Reptile', theme.SECONDARY_COLOR1, reptileIcon),
    new PetCategory('c10', 'Poultry', theme.SECONDARY_COLOR2, poultryIcon),
]
