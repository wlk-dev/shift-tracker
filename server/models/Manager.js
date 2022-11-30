const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const ManagerSchema = new Schema({
    fname: { type: String },
    lname: { tpye: String },
    mgr: { type: Boolean },
    email: { type: string },
    contactNum: {
        type: Number,
        validate: {
            validator: function (v) {
                return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(v);
            },
            message: '{VALUE} is not a valid phone number'
        }
    },
    password: { type: String }
});

ManagerSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this._doc.password, 10)
    next();
});

const Manager = model("Manager", ManagerSchema);
module.exports = Manager;