import ingredientsData from '../data/ingredients'

class Ingredients {
    constructor(data) {
        this.data = data
    }
    combinedIngredients() {
        let currentIngredients = []
        this.data.forEach((ingredient) => {
            const ing = ingredientsData.find(element => ingredient.id === element.id)
            currentIngredients.push(ing)
        })
        console.log(currentIngredients)
        return currentIngredients

    }
}

export default Ingredients