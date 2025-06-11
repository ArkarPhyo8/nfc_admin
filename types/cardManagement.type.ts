import { cards } from "@/generated/prisma";

export type CardManagementType = cards & {
  users: {
    username: string;
  };
  cardType:{
    name: string;
  }
};
