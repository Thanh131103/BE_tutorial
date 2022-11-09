import express, { application } from "express";
import { createHotel, deleteHotel, updatedHotel } from "../controllers/hotel.js";
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
router.get("/:id", async(req, res) => {
    try {
        const hotel = await Hotels.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
    }
});
//Get all
router.get("/", async(req, res, next) => {
    // const failed = true;
    // if (failed) return next(createError(401), "You aren't authen")
    try {
        const hotels = await Hotels.find(req.params.id)
        res.status(200).json(hotels)
    } catch (err) {
        res.status(500).json(err)
    }
});
export default router