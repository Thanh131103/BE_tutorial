import express, { application } from "express";
import Hotels from "../modules/Hotels.js";
const router = express.Router();
//Create:
router.post("/", async(req, res) => {
    const newHotel = new Hotels(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
});
//Update:
router.put("/:id", async(req, res) => {
    try {
        const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
});

//delete
router.delete("/:id", async(req, res) => {
    try {
        const updatedHotel = await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been delete.");
    } catch (error) {
        res.status(500).json(err)
    }
});
//Get
router.get("/:id", async(req, res) => {
    try {
        const hotel = await Hotels.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(err)
    }
});
//Get all
router.get("/", async(req, res) => {
    try {
        const hotels = await Hotels.find(req.params.id)
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(err)
    }
});
export default router