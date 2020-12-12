import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";

dotenv.config();

function startServer(typeDefs, resolvers, dataSources) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
  });

  server.listen().then(({ url }) => console.log(`Server running at ${url}`));
}

export default startServer;
