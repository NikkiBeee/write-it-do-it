'use strict';

const express = require('express');
const { Dog } = require('../app/server/models');

// This router is already mounted on `/api` in app/server/app.js
const router = express.Router();

router.post('/api/dogs', async (req, res, next) => {
  const dogIns = await Dog.update();
  const dog = { message: 'Success', data: dogIns };
  res.status(201).json(dog);
});

module.exports = router;
