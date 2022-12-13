const express = require("express");
const router = express.Router();

const puzzleModel = require("../../models/puzzle.model");
const puzzleValidation = require("../../validation/puzzle.validation");

router.get("/", async (req, res) => {
  try {
    const data = await puzzleModel.selectAll();

    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
router.post("/", async (req, res) => {
  try {
    const validatedValues = await puzzleValidation.validateNewPuzzleSchema(
      req.body
    );
    const newPuzzle = await puzzleModel.createPuzzle(validatedValues);
    res.status(201).json(newPuzzle);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
//just adding somthing dsasadasd
//by sagiv
router.patch("/", async (req, res) => {
  try {
    console.log(res)
    const validatedValue = await puzzleValidation.validateUpPuzzleSchema(
      req.body
    );
    const userData = await puzzleModel.updatePuzzleById(
      validatedValue.id,
      validatedValue.name,
      validatedValue.pcs,
      validatedValue.difficulty
    );

    res.json({ msg: "puzzle updated" });
  } catch (err) {
   
    res.status(400).json({ error: err });
  }
});

//by adel
router.delete("/:id", async (req, res) => {
  try {
    const validatedValues = await puzzleValidation.validateDeletePuzzleSchema(
      req.params
    );
    const puzzleData = await puzzleModel.deletePuzzleById(validatedValues.id);
    res.json(puzzleData);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
