const express = require('express');
const axios = require('axios');
const config = require('../config.js');

const router = express.Router();

router.get('/', async (req, res) => {
  return res.send("This is rakkan api.")
});

router.get('/forex', async (req, res) => {
  const response = await axios({
    method: 'get',
    url: `http://${config.flask_url}:${config.flask_port}`,
  })
  return res.json(response.data)
});

module.exports = router