import express from "express";

import * as userController from "../controllers/user.controller";

const router = express.Router();

router.post("/", userController.create);

router.get("/", userController.getAll);

router.get("/:id", userController.getOne);

router.put("/:id", userController.update);

router.delete("/:id", userController.remove);

export default router;
