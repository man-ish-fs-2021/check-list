const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/",homeController.title);
router.post("/createTask",homeController.createTask);
router.get("/deleteTasks/",homeController.deleteTask);

module.exports = router;