class Recipe {
    constructor(data = {}) {
        this.name = data.name
        this.tags = data.tags || []
        this.instructions = data.instructions
    }
}
export default Recipe;