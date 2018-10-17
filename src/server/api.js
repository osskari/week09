/ src/api.js
onst express = require("express");
const router = express.Router();

router.get("/greeting/:name", (req, res) => {
  // Fix this code
  res.send("Hi there");
});

module.xports = router;
