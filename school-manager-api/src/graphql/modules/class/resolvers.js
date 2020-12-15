export default {
  Query: {
    classes: (root, args, { dataSources }) => dataSources.classes.show(),
    class: (root, { id }, { dataSources }) => dataSources.classes.index(id),
  },
  Class: {
    teacher: (parent, args, { dataSources }) =>
      dataSources.users.index(parent.teacher_id),
  },
};
