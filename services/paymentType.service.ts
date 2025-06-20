import { NFC_APi } from "@/lib/apiInstance";

const getAllPaymentType = async () => {
  try {
    const res = await NFC_APi.get("/payment_type");
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

export { getAllPaymentType };
