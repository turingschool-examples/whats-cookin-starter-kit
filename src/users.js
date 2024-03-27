import { use } from "chai";

const addRecipeToCook = (recipe, user) =>{
    user.recipesToCook.push(recipe)

    return user
};
function removeRecipeToCook (recipe, user){
    let toRemove = user.recipesToCook.findIndex(element => element.name === recipe.name);
    console.log (toRemove);
    user.recipesToCook.splice(toRemove, 1);
    return user;
};

const filterUserRecipesByTag = () => {

};

const filterUserRecipesByName = () => {

};

export{
    addRecipeToCook,
    removeRecipeToCook
}