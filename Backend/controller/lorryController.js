const LorryRepo = require("../repository/LorryRepo")

async function createLorry(req, res) {
    console.log("data",req.body);
  try {
    const result = await LorryRepo.createLorry(req.body);
    res.status(200).json({
      status: true,
      message: 'Lorry created successfully!',
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
    const results = await LorryRepo.get();
    res.status(200).json({
      status: true,
      message: 'Lorries fetched successfully!',
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
    const results = await LorryRepo.getById(id)
    res.status(200).json({
      status: true,
      message: 'Lorry fetched successfully!',
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
    const result = await LorryRepo.update(id,modal)
    res.status(200).json({
      status: true,
      message: 'Lorry Updated successfully!',
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

async function deleteLorry(req, res) {
  console.log("data",req.body);
  try {
    const id = req.params.id;
    const result = await LorryRepo.deleteLorry(id)
    res.status(200).json({
      status: true,
      message: 'Lorry deleted successfully!',
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
    createLorry,
    get,
    getById,
    update,
    deleteLorry
};
