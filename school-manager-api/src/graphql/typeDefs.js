import { mergeTypeDefs } from "@graphql-tools/merge";

import users from "./modules/users/schema.js";
import role from "./modules/role/schema.js";

const schemas = [users, role];

const mergedSchemas = mergeTypeDefs(schemas);

export default mergedSchemas;
