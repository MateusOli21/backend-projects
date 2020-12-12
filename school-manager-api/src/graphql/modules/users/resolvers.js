export default {
  Query: {
    users: (root, args, { dataSources }) => dataSources.users.show(),
    user: (root, { id }, { dataSources }) => dataSources.users.index(id),
  },
  Mutation: {
    addUser: (root, user, { dataSources }) => dataSources.users.create(user),
    updateUser: (root, { id, ...user }, { dataSources }) =>
      dataSources.users.update(id, user),
    deleteUser: (root, { id }, { dataSources }) => dataSources.users.del(id),
  },
};
