import { card_sale } from "@/generated/prisma";

export type SaleCardType = card_sale & {
  cards: {
    cardName: string;
  };
  payment_status: {
    name: string;
  };
};
