const express = require("express");
const userDb = require("./userDb.js");

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const { id, name } = req.body;
  if (!name) {
    res.status(400).json({
      errorMessage: "Please provide a name for the user."
    });
  }
  userDb
    .insert({ name })
    .then(({ id }) => {
      userDb
        .getById(id)
        .then(user => {
          res.status(201).json(user);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: "There was an error while saving the user to the database"
          });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: "There was an error while saving the user to the database"
      });
    });
});

router.post("/:id/posts", (req, res) => {});

router.get("/", (req, res) => {
  userDb
    .get()
    .then(users => res.status(200).json(users))
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
