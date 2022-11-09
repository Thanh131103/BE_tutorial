import express from "express";
const router = express.Router();
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { createError } from "../untils/error.js";
//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);
//Get
router.get("/:id", getUser);
//Get all
router.get("/", getUsers);

export default router