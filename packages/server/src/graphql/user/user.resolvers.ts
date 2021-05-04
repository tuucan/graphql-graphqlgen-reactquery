import { IResolvers } from "graphql-tools";

const UserResolvers: IResolvers = {
  Query: {
    async login(_: void, _args: any) {
      return {
        token: "beko",
      };
    },
  },
  Mutation: {
    async register(_: void, _args: any) {
      return {
        token: "beko",
      };
    },
  },
};

export default UserResolvers;
