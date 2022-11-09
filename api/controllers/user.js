import Users from "../modules/Users.js"
export const createUser = async(req, res, next) => {
    const newUser = new Users(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}
export const updateUser = async(req, res, next) => {
    try {
        const updateUser = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}
export const deleteUser = async(req, res, next) => {
    const newUser = new Users(req.body)
    try {
        const updateUser = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been delete.");
    } catch (err) {
        next(err)
    }
}
export const getUser = async(req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
export const getUsers = async(req, res, next) => {
    try {
        const users = await Users.find(req.params.id)
        res.status(200).json(users)
    } catch (err) {
        next(err);
    }
}