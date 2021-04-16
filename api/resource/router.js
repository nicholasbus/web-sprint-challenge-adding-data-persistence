// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");

router.get("/", async (req, res) => {
  try {
    const resources = await Resource.get();
    if (!resources) {
      res.status(404).json({ message: "Resources not found" });
    } else {
      res.status(200).json(resources);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newResource = await Resource.create(req.body);
    if (!newResource) {
      res.status(400).json({ message: "error creating new resource" });
    } else {
      res.status(201).json(newResource);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
