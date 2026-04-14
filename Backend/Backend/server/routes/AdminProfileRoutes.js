const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.get("/adminprofile/:userId", (req, res) =>
    controller.getAdminProfessionalInfo(req, res)
  );

  return router;
};