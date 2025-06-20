import { NFC_APi } from "@/lib/apiInstance";

const getCardLost = async (page: number, limit: number, searchKey: string) => {
  try {
    const res = await NFC_APi.get(
      `/card_lost?page=${page}&limit=${limit}&searchKey=${searchKey}`
    );
    // console.log("getCardManage Response--->", res.data);
    if (res.status == 200) {
      return res.data;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getCardLostByCardId = async (id: string) => {
  try {
    const res = await NFC_APi.get(`/card_lost/${id}`);
    // console.log("response available cards-->", res);
    if (res.status === 200) {
      return res.data;
    }
    return [];
  } catch (err) {
    console.error("error-->", err);
    return [];
  }
};

const cardLostApprove = async ({
  cardLostID,
  status,
}: {
  cardLostID: string;
  status: string;
}) => {
  try {
    const res = await NFC_APi.patch(
      `/card_lost/status/${cardLostID}/${status}`
    );
    if (res.status === 200) {
      return {
        success: res.data.success ?? true,
        message: res.data.message || "Approve successfully",
      };
    } else {
      return {
        success: false,
        message: `But check response status!`,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An unexpected error occurred!",
    };
  }
};

export { getCardLost, getCardLostByCardId, cardLostApprove };
