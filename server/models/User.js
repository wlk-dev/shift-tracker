const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new Schema({
    fname: { type: String },
    lname: { type: String },
    mgr: { type: Boolean },
    email: { type: String },
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

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this._doc.password, 10)
    next();
});

const User = model("User", UserSchema);
module.exports = User;