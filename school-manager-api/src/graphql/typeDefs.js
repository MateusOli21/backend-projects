import { mergeTypeDefs } from "@graphql-tools/merge";

import users from "./modules/users/schema.js";
import role from "./modules/role/schema.js";
import classes from "./modules/class/schema";

const schemas = [users, role, classes];

const mergedSchemas = mergeTypeDefs(schemas);

export default mergedSchemas;
