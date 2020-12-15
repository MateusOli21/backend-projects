export default {
  Query: {
    classes: (root, args, { dataSources }) => dataSources.classes.show(),
    class: (root, { id }, { dataSources }) => dataSources.classes.index(id),
  },
};
