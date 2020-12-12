import { RESTDataSource } from "apollo-datasource-rest";

class User extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async show() {
    const baseUsers = await this.get("/users");

    const users = baseUsers.map(async (user) => ({
      ...user,
      role: await this.get(`/roles/${user.role}`),
    }));

    return users;
  }

  async index(id) {
    const user = await this.get(`/users/${id}`);

    user.role = await this.get(`/roles/${user.role}`);

    return user;
  }

  async create(user) {
    const users = await this.get("/users");
    const id = users.lenght + 1;

    const role = await this.get(`roles?id=${user.role}`);
    const createdUser = { ...user, role: role[0] };

    await this.post("/users", { ...user, role: role[0].id });

    return createdUser;
  }

  async update(id, user) {
    const findedUser = await this.get(`/users/${id}`);

    const newInfos = Object.assign(findedUser, { ...user });

    await this.put(`/users/${id}`, newInfos);

    const updatedUser = await this.index(id);

    return updatedUser;
  }

  async del(id) {
    await this.delete(`/users/${id}`);

    return id;
  }
}

export default User;
