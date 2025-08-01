import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: { id: req.params.id }
        });
        if (!response) return res.status(404).json({ message: "User not found" });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({ message: "User Created" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    console.log("Deleting IDssssssssss:", req.params.id);

    try {
        const deleted = await User.destroy({
            where: { id: req.params.id }
        });
        console.log(deleted, 'dell')
        if (deleted === 0) {
            return res.status(404).json({ message: "User not founds" });
        }
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};