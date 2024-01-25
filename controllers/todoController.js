const { Task, SubTask, User } = require("../models/todoModel");
const jwt = require('jsonwebtoken');
// Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date, priority } = req.body;
    const task = await Task.create({ title, description, due_date, priority });
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create Subtask
exports.createSubtask = async (req, res) => {
  try {
    const { task_id } = req.body;
    const subtask = await SubTask.create({ task_id });
    res.status(200).json({ success: true, subtask });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All User Tasks
exports.getUserTasks = async (req, res) => {
  try {
    const { priority, due_date, page, limit } = req.query;
    // Implement filtering and pagination logic here if needed

    const tasks = await Task.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All User Subtasks
exports.getUserSubtasks = async (req, res) => {
  try {
    const { task_id } = req.query;
    const subtasks = task_id
      ? await SubTask.find({ task_id })
      : await SubTask.find();
    res.status(200).json({ success: true, subtasks });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  
  let task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(500).json({
      success: false,
      message: "Task not found",
    });
  }
  task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

    res
      .status(200)
      .json({ success: true, message: "Task updated successfully", task });
  
};

// Update Subtask
exports.updateSubtask = async (req, res) => {
  
  let subtask = await SubTask.findById(req.params.id);
  if (!subtask) {
    return res.status(500).json({
      success: false,
      message: "subtask not found",
    });
  }
  subtask = await SubTask.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });
    res
      .status(200)
      .json({
        success: true,
        message: "Subtask updated successfully",
        subtask,
      });
  
};

// Delete Task (Soft Deletion)
exports.deleteTask = async (req, res) => {
  
    const task = await Task.findByIdAndUpdate(
      req.params.id);
      if (!task) {
        return res.status(500).json({
          success: false,
          message: "Task not found",
        });
      }
    await task.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully", task });
  
};

// Delete Subtask (Soft Deletion)
exports.deleteSubtask = async (req, res) => {

    
  const subtask = await SubTask.findByIdAndUpdate(
    req.params.id);
    if (!subtask) {
      return res.status(500).json({
        success: false,
        message: "subask not found",
      });
    }
  await subtask.deleteOne();
    res
      .status(200)
      .json({
        success: true,
        message: "Subtask deleted successfully",
        subtask,
      });
  
};

// Create User
exports.createUser = async (req, res) => {
  try {
      const { phone_number, priority } = req.body;
      const user = await User.create({ phone_number, priority });

      // Generate JWT
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

      res.status(201).json({
          success: true,
          user,
          token,
      });
  } catch (error) {
      res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User not found",
    });
  }
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  res
    .status(200)
    .json({ success: true, message: "User updated successfully", user });
};

// Delete User (Soft Deletion)
exports.deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await user.deleteOne();

  res
    .status(200)
    .json({ success: true, message: "User deleted successfully", user });
};
