const users = require("../users/userDb");
const posts = require("../posts/postDb");
const express = require('express');
const { validateUserId, validateUser } = require("../middleware/user");
const { validatePost } = require("../middleware/posts");

const router = express.Router();

router.post('/', validateUser(), async (req, res, next) => {
  // do your magic!
  try {
    const user = await users.insert(req.body);
    res.status(200).json(user);
    next();
  } catch (err) {
    next(err);
  }

});

router.post('/:id/posts', validatePost(), async (req, res, next) => {
  // do your magic!
  try {
    const newPost = {
       user_id: req.params.id,
       text: req.body.text
    }

    const post = await posts.insert(newPost);
    res.status(201).json(post);
    next();
  } catch (err) {
    next(err);
  }

});

router.get('/', async (req, res, next) => {
  // do your magic!
  try {
    const allUsers = await users.get();
    res.status(200).json(allUsers);
    next();
  } catch (err) {
    next(err);
  }

});

router.get('/:id', validateUserId(), (req, res, next) => {
  // do your magic!
  res.status(200).json(req.user);
});

router.get('/:id/posts', validateUserId(), async (req, res, next) => {
  // do your magic!
  try {
    const posts = await users.getUserPosts(req.params.id);
    res.status(200).json(posts);
    next();
  } catch (err) {
    next(err);
    //res.status(500).json({message: "Something bad happen."})
  }
});

router.delete('/:id', validateUserId(), async (req, res, next) => {
  // do your magic!
  try {
    const user = await users.remove(req.params.id);
    if (user) { res.status(200).json({ message: "user removed" }); }
    next();
  } catch (err) {
    next(err);
  }

});

router.put('/:id',  async (req, res, next) => {
  // do your magic!
  try {
    const user = await users.update(req.params.id, req.body);
    res.status(200).json(user);
    next();
  } catch (err) {
    next(err);
  }

});


module.exports = router;
