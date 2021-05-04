import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const typeDefsArray = loadFilesSync(path.join(__dirname, "./**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "./**/*.resolvers.{ts,js}"));

const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
