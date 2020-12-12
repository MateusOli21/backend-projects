import startServer from "./server";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import dataSources from "./dataSources";

startServer(typeDefs, resolvers, dataSources);
