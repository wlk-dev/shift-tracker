const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new Schema({
    fname: { type: String },
    lname: { type: String },
    mgr: { type: Boolean },
    email: { type: String },
    ctcnum: {
        type: Number,
        validate: {
            validator: function (v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number'
        }
    },
});

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this._doc.password, 10)
    next();
});

const User = model("User", UserSchema);
module.exports = User;