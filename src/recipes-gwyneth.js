function findRecipeIngredients(recipe, ingredients){
const results = recipe['ingredients'].map((element) =>{
    let match = ingredients.find(({id}) => id === element['id'])
    if (match !== undefined){
        return match
    };
});
return results
};
export {findRecipeIngredients};