const Sequelize = require("sequelize");

const dbConfig = require("../config/batabase");
const models = require("../app/models");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
