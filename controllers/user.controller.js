const {v4 : uuidv4} = require("uuid"); // it is uesd to generate unique id 
const User = require("../models/user.model");


const getAllUsers = async (req,res)=>{
    try {
        const allUsers = await User.find();
    res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getOneUser = async (req,res)=>{
    try {
        const findOneUser = await User.findOne({id : req.params.id});
        res.status(200).json(findOneUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const createUser = async (req,res)=>{
try {
// 1. make a new user
const newUser = new User({
    id:uuidv4(), //generate unique id every time
    name: req.body.name,
    age: Number(req.body.age)
})
//2. save the user in db
await newUser.save();
//3. Return a message
res.status(201).json(newUser);
} catch (error) {
    res.status(500).json(error.message);  
}
};

const updateUser = async (req,res)=>{
    try {
        const updatedUser = await User.findOne({id : req.params.id}); // 1. find the user to be changed

        updatedUser.name= req.body.name; // 2. change the value
        updatedUser.age= Number(req.body.age);

        await updatedUser.save(); // 3. save the user with updated value

        res.status(200).json(updateUser); // 4. return the user

    } catch (error) {
        res.status(500).json(error.message);
    }
};

const deleteUser = async (req,res)=>{
    try {
        await User.deleteOne({id : req.params.id});
        res.status(200).json({
            message : "This user is deleted"
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {getAllUsers , getOneUser , createUser , updateUser , deleteUser};