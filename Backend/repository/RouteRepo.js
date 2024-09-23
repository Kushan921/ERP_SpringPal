const Route = require("../models/routeModel")

async function createRoute(model) {
  try {
    console.log("repo data :",model);
    
    const newRoute = await new Route({
      lorryNo: model.lorryNo,
      driverName: model.driverName,
      route : model.route,
      paidForFuel: model.paidForFuel,
      actualFuel : model.actualFuel,
      distance : model.distance,
      date : model.date
    });

    return await newRoute.save();

  } catch (err) {
    throw new Error('Failed to create Route! ' + err.message);
  }
}

async function get() {
  try {
    const routes = await Route.find();

    if(!routes){
      throw new Error("No route found!");
    }

    return routes;

  } catch (err) {
    throw new Error('Failed to get routes! ' + err.message);
  }
}

async function getById(id) {
  try {
    const route = await Route.findById(id);

    if(!route){
      throw new Error("No route with this id found!");
    }

    return route;
  } catch (err) {
    throw new Error('Failed to get route! ' + err.message);
  }
}

async function update(id,model) {
  try {
    console.log("repo data :",model);

    const updatedRoute = await Route.findByIdAndUpdate(id,model)

    if(!updatedRoute){
      throw new Error("Failed to update route details..")
    }

    return updatedRoute;

  } catch (err) {
    throw new Error('Failed to update route! ' + err.message);
  }
}

async function deleteRoute(id) {
  try {
    const deletedRoute = await Lorry.findByIdAndDelete(id)

    if(!deletedRoute){
      throw new Error("Failed to delete route..")
    }

    return deletedRoute;

  } catch (err) {
    throw new Error('Failed to delete route! ' + err.message);
  }
}

module.exports = {
  createRoute,
  get,
  getById,
  update,
  deleteRoute
};
