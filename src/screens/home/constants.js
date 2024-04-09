import PetCategory from '../../models/pet-category';

import birdIcon from '../../assets/pet-icons/dog.png';
import catIcon from '../../assets/pet-icons/cat.png';
import dogIcon from '../../assets/pet-icons/dog.png';
import ferretIcon from '../../assets/pet-icons/ferret.png';
import fishIcon from '../../assets/pet-icons/fish.png';
import guineaPigIcon from '../../assets/pet-icons/guinea-pig.png';
import hamsterIcon from '../../assets/pet-icons/hamster.png';
import rabbitIcon from '../../assets/pet-icons/rabbit.png';
import reptileIcon from '../../assets/pet-icons/reptile.png';
import poultryIcon from '../../assets/pet-icons/poultry.png';


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
];
