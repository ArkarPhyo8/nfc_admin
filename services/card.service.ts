import { NFC_APi } from "@/lib/apiInstance";
import { CardFormType } from "@/schemas/card";
import axios from "axios";

const getAllCard = async (page: number, limit: number, searchKey: string) => {
  try {
    const res = await NFC_APi.get(
      `/card?page=${page}&limit=${limit}&searchKey=${searchKey}`
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

const createCard = async (createData: CardFormType) => {
  try {
    const res = await NFC_APi.post("/card", createData);
    // console.log("create card Response--->", res);
    return {
      success: res.data.success ?? true,
      message: res.data.message || "card creating is successfully",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || "Server error occurred";

      if (status === 409) {
        return {
          success: false,
          message,
        };
      }

      return {
        success: false,
        message,
      };
    }

    // Handle unexpected (non-Axios) errors
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred!",
    };
  }
};

const updateCard = async (id: string, updateData: CardFormType) => {
  try {
    const res = await NFC_APi.patch(`/card/${id}`, updateData);
    // console.log("update card Response--->", res);
    return {
      success: res.data.success ?? true,
      message: res.data.message || "card updated successfully",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || "Server error occurred";
      if (status === 404) {
        return {
          success: false,
          message,
        };
      }
      return {
        success: false,
        message,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred!",
    };
  }
};

const deleteCard = async (id: string) => {
  try {
    const res = await NFC_APi.delete(`/card/${id}`);
    // console.log("delete card Response--->", res);
   
    return {
      success: res.data.success ?? true,
      message: res.data.message || "card deleted successfully",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || "Server error occurred";
      if (status === 404) {
        return {
          success: false,
          message,
        };
      }
      return {
        success: false,
        message,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred!",
    };
  }
};

export { getAllCard, createCard, updateCard, deleteCard };
