import { NFC_APi } from "@/lib/apiInstance";
import { UserFormType } from "@/schemas/user";
import axios from "axios";

const getAllUser = async (
  page: number,
  limit: number,
  searchKey: string
) => {
  try {
    const res = await NFC_APi.get(
      `/user?page=${page}&limit=${limit}&searchKey=${searchKey}`
    );
    // console.log("getUserManage Response--->", res.data);
    if (res.status == 200) {
      return res.data;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const createUser = async (createData: UserFormType) => {
  try {
    const res = await NFC_APi.post("/user", createData);
    // console.log("createUserAccount Response--->", res);
    return {
      success: res.data.success ?? true,
      message: res.data.message || "User creating is successfully",
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

const updateUser = async (
  id: string,
  updateData: UserFormType
) => {
  try {
    const res = await NFC_APi.patch(`/user/${id}`, updateData);
    // console.log("updateUserAccount Response--->", res);
    return {
      success: res.data.success ?? true,
      message: res.data.message || "User updated successfully",
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

const deleteUser = async (id: string) => {
  try {
    const res = await NFC_APi.delete(`/user/${id}`);
    // console.log("deleteUserAccount Response--->", res);

    return {
      success: res.data.success ?? true,
      message: res.data.message || "User deleted successfully",
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

export {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
