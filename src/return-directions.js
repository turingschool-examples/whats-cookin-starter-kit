const returnDirections = (recipes) => {
  if (!recipes) {
    return "Sorry no directions were found.";
  } else {
    return recipes["instructions"];
  }
};

export { returnDirections };
