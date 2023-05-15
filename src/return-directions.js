const returnDirections = (sampleRecipeData) => {
  if (!sampleRecipeData) {
    return "Sorry no directions were found.";
  } else {
    return sampleRecipeData["instructions"];
  }
};

export { returnDirections };
