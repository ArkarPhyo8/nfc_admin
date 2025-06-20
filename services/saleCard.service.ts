import { NFC_APi } from "@/lib/apiInstance";
import { SaleCardFormType } from "@/schemas/saleCard";
import axios from "axios";

const getAllSaleCard = async (page: number, limit: number, searchKey: string) => {
  try {
    const res = await NFC_APi.get(
      `/sale_card?page=${page}&limit=${limit}&searchKey=${searchKey}`
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

const createSaleCard = async (createData: SaleCardFormType) => {
  try {
    const res = await NFC_APi.post("/sale_card", createData);
    // console.log("create card Response--->", res);
    return {
      success: res.data.success ?? true,
      message: res.data.message || "Sale card creating is successfully",
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

const updateSaleCard = async (id: string, updateData: SaleCardFormType) => {
  try {
    const res = await NFC_APi.patch(`/sale_card/${id}`, updateData);
    // console.log("update card Response--->", res);
    return {
      success: res.data.success ?? true,
      message: res.data.message || "Sale card updated successfully",
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

const deleteSaleCard = async (id: string) => {
  try {
    const res = await NFC_APi.delete(`/sale_card/${id}`);
    // console.log("delete card Response--->", res);
   
    return {
      success: res.data.success ?? true,
      message: res.data.message || "Sale card deleted successfully",
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

export { getAllSaleCard, createSaleCard, updateSaleCard, deleteSaleCard };
