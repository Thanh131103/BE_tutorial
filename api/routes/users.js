import express from "express";
const router = express.Router();
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { createError } from "../untils/error.js";
import { verifyToken } from "../untils/verifyToken.js";
//update
router.put("/:id", updateUser);
router.get("/checkauthentication", verifyToken, (req, res, next) => {
        res.send("You are log in")
    })
    //delete
router.delete("/:id", deleteUser);
//Get
router.get("/:id", getUser);
//Get all
router.get("/", getUsers);

export default router