const express=require('express');
const  URL  =require('../models/urlschema.js'); // Ensure the correct path and extension
const shortid = require("shortid");

const router = express.Router();


router.post('/create', async (req, res) => {
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectUrl: req.body.redirectUrl
  });
  res.json({ shortId: shortID });
});

router.get('/:shortId', async (req, res) => {
  const url = await URL.findOne({ shortId: req.params.shortId });
  
  if (url) {
    url.visitHiostry.push({ timestamp: new Date() });
    await url.save();
    console.log(url.redirectUrl);
    res.redirect(url.redirectUrl);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
});

module.exports= router;
