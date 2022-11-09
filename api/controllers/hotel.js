import Hotels from "../modules/Hotels.js"

const createError = ("../../api/untils/error")
export const createHotel = async(req, res, next) => {
    const newHotel = new Hotels(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}
export const updatedHotel = async(req, res, next) => {
    try {
        const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}
export const deleteHotel = async(req, res, next) => {
    const newHotel = new Hotels(req.body)
    try {
        const updatedHotel = await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been delete.");
    } catch (err) {
        next(err)
    }
}
export const getHotel = async(req, res, next) => {
    try {
        const hotel = await Hotels.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}
export const getHotels = async(req, res, next) => {
    try {
        const hotels = await Hotels.find(req.params.id)
        res.status(200).json(hotels)
    } catch (err) {
        next(err);
    }
}