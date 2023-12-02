const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the user's name"],
        },
        email: {
            type: String,
            required: [true, "Please add the user's email address"],
            unique: [true, "A user with this email already exists."],
        },
        password: {
            type: String,
            required: [true, "Please add the user's password"],
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema)