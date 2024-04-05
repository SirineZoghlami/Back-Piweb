const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(400).json({ msg: "User doesn't exist " });
        }
        const isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "bad credentials " });
        }
        const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET, {
            expiresIn: "2h",
        });
        res.status(200).json({ msg: "Login successful", token: token });
    } catch (err) {
        return res.status(500).json({ msg: "Something went wrong" });
    }
};

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ ...req.body, password: hashedPassword });

        newUser.save();

        res.status(201).json({ msg: "User created" });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = { login, register };
