import { mergeResolvers } from "@graphql-tools/merge";

import users from "./modules/users/resolvers";
import classes from "./modules/class/resolvers";

const resolvers = [users, classes];

const mergerdResolvers = mergeResolvers(resolvers);

export default mergerdResolvers;
