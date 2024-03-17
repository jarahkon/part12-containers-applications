const express = require('express');
const { getAsync } = require('../redis')
const router = express.Router();
const ADDED_KEY = 'added_todos';
/* GET statistics */
router.get('/', async (_, res) => {
  const value = await getAsync(ADDED_KEY);
  const redisData = {
    'added_todos': Number(value) ?? 0
  }
  res.send(redisData);
});

module.exports = router;