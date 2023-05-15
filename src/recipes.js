const getInstructions = recipe => {
  return recipe.instructions.map(item => item.instruction)
}

export {getInstructions}
