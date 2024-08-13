const { updateLinks, allLinks } = require('../controller/linkControl');const express = require("express");
const router = express.Router();
const cors = require("cors");

// // Use cors as middleware
router.use(cors());
 
 router.options('/links', cors());
 router.options('/all-links', cors());

 router.post("/links", updateLinks);
 router.get("/all-links/:id", allLinks);

module.exports = router;