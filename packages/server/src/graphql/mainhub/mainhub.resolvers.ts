import { IResolvers } from "graphql-tools";

const UserResolvers: IResolvers = {
  Query: {
    async mainhubs(_: void, _args: any) {
      return [
        {
          id: 1,
          name: "London Mainhub",
          rampCount: 3,
        },
        {
          id: 2,
          name: "Github",
        },
        {
          id: 3,
          name: "Onur Abi'nin Mainhub'ı",
        },
      ];
    },
  },
};

export default UserResolvers;
