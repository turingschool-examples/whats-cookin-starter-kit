import Recipe from './Recipe';

class User{
    constructor(userData){
      this.name = userData.name;
      this.id = userData.id;
      this.pantry = userData.pantry;
      this.recipesToCook = [];  
    }

   addRecipesToCook(recipe){
     this.recipesToCook.push(recipe)
   }

   removeRecipesToCook(){
    this.recipesToCook.splice(recipe)  
   }
};


export default User;