const {Shift, User} = require("../models/")
const jwt = require("jsonwebtoken")
const cookie = require("cookie")
const bcrypt = require("bcrypt")
const connection = require("../config/connection")

require("dotenv").config()

const createShift = async (req, res) => {
    try {
        const getUser = await User.findById(req.params.id)
        const createQuery = await Shift.create({...req.body, user_id:req.params.id, fname : getUser.fname});
        res.status(200).json({ result: "success" })
    } catch (err) {
        console.trace(err)
        res.status(400).json({ result: "error", message: 'Unable to create shift' });
    }
}

//needs work
const updateShift = async (req, res) => {
    try {
        let updatedShift = await Shift.updateOne(
            {
                start: req.body.startTime,
                end: req.body.endTime,
            },
            {
                where: {
                    id: req.body.userid,
                }
            }
        );
        res.status(200).json({ result: 'success', payload: updatedShift });
    } catch (err) {
        res.status(500).json({ message: 'Unable to update shift' });
    }
}

const getAllShifts = async (req, res) => {
    try {
        const getAllQuery = await Shift.find({});
        res.status(200).json({ result: "success", payload: getAllQuery });
    } catch (err) {
        res.status(400).json({ message: 'No shifts found' });
    }
}

const getShiftByUser = async (req, res) => {
    try {
        const getByIdQuery = await Shift.find({user_id:req.params.id})
        res.status(200).json({ result: "success", payload: getByIdQuery })
    } catch (err) {
        res.status(400).json({ result: "fail", message: 'No shift found by that id' })
    }
}

const deleteShiftByUser = async (req, res) => {
    try {
        const deleteById = await Shift.deleteOne({_id:req.params.id})
        res.status(200).json({ result: "success", payload: deleteById })
    } catch (err) {
        res.status(400).json({ result: "fail", message: 'No shift found by that id' })
    }
}

const authenticateLogin = async (req, res) => {
    // First see if we have a manager with the supplied email address 
    const foundManager = await Manager.findOne({ email: req.body.email })
    if (!foundManager) return res.status(401).json({ message: "Login failed." })

    // Now compare the supplied password w/ the hashed password
    const isValid = await bcrypt.compare(req.body.password, foundManager.password)
    if (!isValid) return res.status(401).json({ message: "Login failed." })

    // If we have a match, we will send back a token (line 43 extracts the password key from the foundUser object)
    const { password, ...modifiedManager } = foundManager

    // Create a token to represent the authenticated user
    const token = jwt.sign({ _id: foundManager._id, email: foundManager.email }, process.env.JWT_SECRET)

    res
        .status(200)
        .set({ "auth-token": token })
        .json({ result: "success", user: modifiedManager, token: token })
}

const lookupManagerByToken = async (req, res) => {
    if (!req.headers || !req.headers.cookie) return res.status(401).json({ msg: "un-authorized" })

    // The node package named cookie will parse cookies for us
    const cookies = cookie.parse(req.headers.cookie)

    // Get the token from the request headers & decode it 
    const token = cookies["auth-token"]  //cookies.authToken
    if (!token) return res.status(401).json({ msg: "un-authorized" })

    // Look up the manager from the decoded token
    const isVerified = jwt.verify(token, process.env.JWT_SECRET)
    if (!isVerified) return res.status(401).json({ msg: "un-authorized" })

    const manager = await Manager.findById(isVerified._id)
    if (!user) return res.status(401).json({ msg: "un-authorized" })

    return res.status(200).json({ result: "success", payload: { _id: manager._id, email: manager.email } })
}

module.exports = {
    createShift,
    getAllShifts,
    getShiftByUser,
    authenticateLogin,
    lookupManagerByToken,
    updateShift,
    deleteShiftByUser
}