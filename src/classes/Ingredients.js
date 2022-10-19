import ingredientsData from '../data/ingredients'

class Ingredients {
    constructor(data) {
        this.data = data
        this.modifiedData = this.combinedIngredients()
    }
    combinedIngredients() {
        let ingredientsNeededInfo = [];
        this.data.forEach((ingredient) => {
            var info = ingredientsData.find( ing => ingredient.id === ing.id)
            ingredientsNeededInfo.push({...info,...ingredient})
        })
        return ingredientsNeededInfo
    }
}

export default Ingredients