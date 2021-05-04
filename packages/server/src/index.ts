import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import schema from "./graphql/schema";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, () => {
  console.info(`graphQL server is running on port ${PORT}`);
});
