const express = require('express');
const users = require("../users/userDb");
const posts = require("../posts/postDb");

const router = express.Router();

router.get('/', async (req, res, next) => {
  // do your magic!
  try {
    const allPosts = await posts.get();
    res.status(200).json(allPosts);
    next();
  } catch (err) {
    next(err);
  }
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
