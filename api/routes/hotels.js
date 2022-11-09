import express, { application } from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";
import Hotels from "../modules/Hotels.js";
import { createError } from "../untils/error.js";
const router = express.Router();
//Create:
router.post("/", createHotel);
//Update:
router.put("/:id", updatedHotel);

//delete
router.delete("/:id", deleteHotel);
//Get
router.get("/:id", getHotel);
//Get all
router.get("/", getHotels);
export default router