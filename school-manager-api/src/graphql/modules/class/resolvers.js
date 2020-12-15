export default {
  Query: {
    classes: (root, args, { dataSources }) => dataSources.classes.show(),
    class: (root, { id }, { dataSources }) => dataSources.classes.index(id),
  },
  Mutation: {
    addClass: (root, classroom, { dataSources }) =>
      dataSources.classes.create(classroom),
    updateClass: (root, { id, ...classroom }, { dataSources }) =>
      dataSources.classes.update(id, classroom),
    deleteClass: (root, { id }, { dataSources }) =>
      dataSources.classes.delete(id),
  },
  Class: {
    teacher: (parent, args, { dataSources }) =>
      dataSources.users.index(parent.teacher_id),
  },
};
