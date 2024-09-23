const Lorry = require("../models/lorryModel")

async function createLorry(model) {
  try {
    console.log("repo data :",model);
    
    const newLorry = await new Lorry({
      lorryNo: model.lorryNo,
      driverName: model.driverName,
      isActive : model.isActive
    });

    return await newLorry.save();

  } catch (err) {
    throw new Error('Failed to create Lorry! ' + err.message);
  }
}

async function get() {
  try {
    const lorries = await Lorry.find();

    if(!lorries){
      throw new Error("No lorries found!");
    }

    return lorries;

  } catch (err) {
    throw new Error('Failed to get lorries! ' + err.message);
  }
}

async function getById(id) {
  try {
    const lorry = await Lorry.findById(id);

    if(!lorry){
      throw new Error("No lorry with this id found!");
    }

    return lorry;
  } catch (err) {
    throw new Error('Failed to get lorry! ' + err.message);
  }
}

async function update(id,model) {
  try {
    console.log("repo data :",model);

    const updatedLorry = await Lorry.findByIdAndUpdate(id,model)

    if(!updatedLorry){
      throw new Error("Failed to update lorry details..")
    }

    return updatedLorry;

  } catch (err) {
    throw new Error('Failed to update lorry! ' + err.message);
  }
}

async function deleteLorry(id) {
  try {
  
    const deletedLorry = await Lorry.findByIdAndDelete(id)

    if(!deletedLorry){
      throw new Error("Failed to delete lorry..")
    }

    return deletedLorry;

  } catch (err) {
    throw new Error('Failed to delete lorry! ' + err.message);
  }
}

module.exports = {
  createLorry,
  get,
  getById,
  update,
  deleteLorry
};
