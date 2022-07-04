import express from "express";
import controller from "../controllers/dreams";
const router = express.Router();

router.get("/dream/list", controller.getDreamList);

router.get("/dream/:id", controller.getDreamDetails);

router.post("/dream", controller.addDreamDetails);

router.put("/dream", controller.updateDreamDetails);

export = router;
