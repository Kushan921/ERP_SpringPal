const RouteRepo = require("../repository/RouteRepo")

async function createRoute(req, res) {
    console.log("data",req.body);
  try {
    const result = await RouteRepo.createRoute(req.body);
    res.status(200).json({
      status: true,
      message: 'Route created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

async function get(req, res) {
  try {
    const results = await RouteRepo.get();
    res.status(200).json({
      status: true,
      message: 'Routes fetched successfully!',
      data: results,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id;
    const results = await RouteRepo.getById(id)
    res.status(200).json({
      status: true,
      message: 'Route fetched successfully!',
      data: results,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

async function update(req, res) {
  console.log("data",req.body);
  try {
    const modal = req.body;
    const id = req.params.id;
    const result = await RouteRepo.update(id,modal)
    res.status(200).json({
      status: true,
      message: 'Route Updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

async function deleteRoute(req, res) {
  console.log("data",req.body);
  try {
    const id = req.params.id;
    const result = await RouteRepo.deleteRoute(id)
    res.status(200).json({
      status: true,
      message: 'Route deleted successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error while saving data: ' + err.message,
      data: null,
    });
  }
}

module.exports = {
    createRoute,
    get,
    getById,
    update,
    deleteRoute
};
