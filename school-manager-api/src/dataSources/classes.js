import { RESTDataSource } from "apollo-datasource-rest";

class Classes extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async searchTeacher(room) {
    const teacher = this.get(`/users/${room.teacher_id}`);

    return teacher;
  }

  async show() {
    const classesData = await this.get("/classes");

    const classes = classesData.map(async (room) => ({
      ...room,
      teacher: await this.searchTeacher(room),
    }));

    return classes;
  }

  async index(id) {
    const classData = await this.get(`/classes/${id}`);

    const classroom = {
      ...classData,
      teacher: await this.searchTeacher(classData),
    };

    return classroom;
  }
}

export default Classes;
