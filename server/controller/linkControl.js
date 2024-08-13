const linkMo = require('../models/linksModel')
const asyncHandler = require("express-async-handler");

const updateLinks = asyncHandler(async (req, res) => {
  const { userId, Links } = req.body;
  const user = await linkMo.findOne({ userId: userId });

  if (user) {
    const updateLinksUser = await linkMo.findByIdAndUpdate(
      user._id,  
      {
        links: Links
      },
      {
        new: true
      }
    );
    res.json(updateLinksUser);
  } else {
    const linksUserN = await linkMo.create({ userId, links: Links });
    res.json(linksUserN);
  }
});const allLinks = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const linksUser = await linkMo.findOne({ userId: id });
    if (linksUser) {
      return res.json({
        id: linksUser.userId,
        links: linksUser.links,
      });
    } else {
      return res.status(404).json({ message: 'User does not have any links' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while fetching links' });
  }
});


  module.exports = {
    updateLinks,
    allLinks,
  };















