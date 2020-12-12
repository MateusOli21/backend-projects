import { mergeResolvers } from "@graphql-tools/merge";

import users from "./modules/users/resolvers";

const resolvers = [users];

const mergerdResolvers = mergeResolvers(resolvers);

export default mergerdResolvers;
