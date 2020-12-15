import { RESTDataSource } from "apollo-datasource-rest";

class Classes extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async show() {
    const classes = await this.get("/classes");

    return classes;
  }

  async index(id) {
    const classroom = await this.get(`/classes/${id}`);

    return classroom;
  }
}

export default Classes;
