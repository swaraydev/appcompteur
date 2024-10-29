const express = require("express");
const Film = require("../models/film");
const router = express.Router();

// 1. Ajouter un nouveau film
router.post("/films", async (req, res) => {
  try {
    const film = new Film(req.body);
    await film.save();
    res.status(201).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
//2.Récupérer tous les films avec find()
router.get("/films", async (req, res) => {
  try {
    const films = await Film.find();
    res.status(200).send(films);
  } catch (error) {
    res.status(400).send(error);
  }
});
// Reécuperer un film par son titre  findOne()
router.get("/films/:title", async (req, res) => {
  try {
    const film = await Film.findOne({ title: req.params.title });
    res.status(200).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
//Mettre à jour un film existant par son titre
router.patch("/films/:title", async (req, res) => {
  try {
    const film = await Film.findOneAndUpdate(
      { title: req.params.title },
      req.body,
      { new: true, runValidators: true }
    );
    if (!film) return res.status(404).send();
    res.send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
//suuprimer les films par le nom du réalisateur
router.delete("/films/:title", async (req, res) => {
  try {
    const film = await Film.findOneAndDelete({ title: req.params.title });
    if (!film) return res.status(404).send();
    res.send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
// Récuperer les films par le nom de l' acteur
router.get("/films/director/:name", async (req, res) => {
  try {
    const film = await Film.find({ "directors.name": req.params.name });
    res.status(200).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
//récuperer les films par le nom de l'acteur
router.get("/films/actor/:name", async (req, res) => {
  try {
    const film = await Film.find({ "actors.name": req.params.name });
    res.status(200).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
//récuperer les films avec une note moyenne supérieure à 6
router.get("/films/ratings/above6", async (req, res) => {
  try {
    const films = await Film.aggregate([
      { $unwind: "$ratings" },
      {
        $group: {
          _id: "$_id",
          avgRating: { $avg: "$ratings.score" },
          title: { $first: "$title" },
        },
      },
      { $match: { avgRating: { $gt: 6 } } },
      { $sort: { avgRating: -1 } },
    ]);
    res.send(films);
  } catch (error) {
    res.status(500).send(error);
  }
});
//récuperer les films sortis ans une année spécifique
router.get("/films/year/:year", async (req, res) => {
  try {
    const film = await Film.find({ releaseYear: req.params.year });
    res.status(200).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
//récuperer les film par genre

router.get("/films/genre/:genre", async (req, res) => {
  try {
    const film = await Film.find({ genre: req.params.genre });
    res.status(200).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
