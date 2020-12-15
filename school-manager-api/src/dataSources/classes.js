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

  async create(classroom) {
    const createdClass = await this.post("/classes", classroom);

    return createdClass;
  }

  async update(id, classroom) {
    const findedClass = await this.get(`/classes/${id}`);

    const newInfos = Object.assign(findedClass, { ...classroom });

    const updatedClass = await this.put(`/classes/${id}`, newInfos);

    return updatedClass;
  }

  async delete(id) {
    await this.delete(`/classes/${id}`);

    return id;
  }
}

export default Classes;
