const express = require("express");

const HomepageController = require("../controller/homepageContoller");

const HomepageRouter = express.Router();

HomepageRouter.post("/addForm", HomepageController.createForm);
HomepageRouter.get("/getForm/:id", HomepageController.getForm);

module.exports = HomepageRouter;
