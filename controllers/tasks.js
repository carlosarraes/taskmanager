const Task = require('../models/Task')

const createTask = async (req,res)=>{
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

const getAllTasks = async (req,res)=>{
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

const getTask = (req,res)=>{
  res.json({id: req.params.id});
}

const updateTask = (req,res)=>{
  res.send('update item')
}

const deleteTask = (req,res)=>{
  res.send('delete item')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}