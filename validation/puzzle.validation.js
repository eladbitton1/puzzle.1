const Joi = require("joi");

const validate = require("./validate");
const difficultyEnum = require("../enums/difficultyEnum");

const newPuzzleSchema = Joi.object({
  name: Joi.string().required().min(2).max(255).trim(),
  pcs: Joi.number().required().min(4).max(Number.MAX_SAFE_INTEGER),
  difficulty: Joi.string().valid(...difficultyEnum),
});

//by sagiv
const updatePuzzleSchema = Joi.object({
  id: Joi.string().length(24).hex().required().trim().allow(""),
  name: Joi.string().required().min(2).max(255).trim(),
  pcs: Joi.number().required().min(4).max(Number.MAX_SAFE_INTEGER),
  difficulty: Joi.string().valid(...difficultyEnum),
});

//by adel
const deletePuzzleSchema = Joi.object({
  id: Joi.string().length(24).hex().required().trim(),
});

const validateNewPuzzleSchema = (puzzleData) => {
  return validate(newPuzzleSchema, puzzleData);
};

//by sagiv
const validateUpPuzzleSchema = (userInput) => {
  return validate(updatePuzzleSchema, userInput);
};

//by adel
const validateDeletePuzzleSchema = (puzzleData) => {
  return validate(deletePuzzleSchema, puzzleData);
};

module.exports = {
  validateNewPuzzleSchema,
  validateUpPuzzleSchema,
  validateDeletePuzzleSchema,
};
