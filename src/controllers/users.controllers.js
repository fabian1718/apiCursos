
const UserServices = require("../Services/users.services");

// controlador para optener todos los usuarios

const getAllUsers = async (req, res) =>{
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await UserServices.getUser(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getUserCourses = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await UserServices.getUserJoinCourses(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) =>{
    try {
        const newUser = req.body;
        const result = await UserServices.createUser(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const bodyUser = req.body;
        const result = await UserServices.updateUser(bodyUser, id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await UserServices.deleteUser(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    getUserCourses,
    createUser,
    updateUser,
    deleteUser,
}