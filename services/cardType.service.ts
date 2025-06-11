import { NFC_APi } from "@/lib/apiInstance";

const getAllCardType = async () => {
  try {
    const res = await NFC_APi.get("/card_type");
    // console.log("getCardType Response--->", res.data);
    if (res.status == 200) {
      return res.data.card_types;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getAllCardType };
