const Manager = require("../models/Manager")
const jwt = require("jsonwebtoken")
const cookie = require("cookie")
const bcrypt = require("bcrypt")
const connection = require("../config/connection")

require("dotenv").config()

const createManager = async (req, res) => {
    try {
        const createQuery = await Manager.create(req.body);
        await authenticateLogin(req, res)
    } catch (err) {
        console.trace(err)
        res.status(400).json({ result: "error", message: 'Unable to create manager' });
    }
}


//needs work
const updateManager = async (req, res) => {
    try {
        let updatedManager = await Manager.updateOne(
            {
                email: req.body.email,
                fname: req.body.fname,
                lname: req.body.lname,
                contactNum: req.body.contactNum,
            },
            {
                where: {
                    email: req.body.email,
                    fname: req.body.fname,
                    lname: req.body.lname,
                    contactNum: req.body.contactNum,
                }
            }
        );
        res.status(200).json({ result: 'success', payload: updatedManager });
    } catch (err) {
        res.status(500).json({ message: 'Unable to update manager' });
    }
}


const getAllManagers = async (req, res) => {
    try {
        const getAllQuery = await Manager.find({});
        res.status(200).json({ result: "success", payload: getAllQuery });
    } catch (err) {
        res.status(400).json({ message: 'No managers found' });
    }
}

const getManagerById = async (req, res) => {
    try {
        const getByIdQuery = await Manager.findById(req.params.id)
        res.status(200).json({ result: "success", payload: getByIdQuery })
    } catch (err) {
        res.status(400).json({ result: "fail", message: 'No manager found by that id' })
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
    createManager,
    getAllManagers,
    getManagerById,
    authenticateLogin,
    lookupManagerByToken,
    updateManager,
}