const routes = require("express").Router();

const ProvidersController = require("./app/controllers/ProvidersController");

routes.get("/providers", ProvidersController.show);

routes.get("/providers/:id", ProvidersController.index);

routes.post("/providers", ProvidersController.store);

routes.put("/providers/:id", ProvidersController.update);

routes.delete("/providers/:id", ProvidersController.delete);

module.exports = routes;
