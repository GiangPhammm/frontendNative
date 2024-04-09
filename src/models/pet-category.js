export default class PetCategory {
    /**
     * @param {string} id
     * @param {string} name
     * @param {string} color
     * @param {HTMLImageElement} icon
     */
    constructor (id, name, color, icon) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.icon = icon;
    }
}