const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.get("/admin/profile", controller.getProfile.bind(controller));

  return router;
};