import axios from "./axiosConfig";

export const getProducts = async () => {
  return await axios.get("product/");
};

export const getProduct = async (id: number) => {
  try {
    return await axios.get(`product/${id}/`);
  } catch (error: any) {
    return error.message;
  }
};

export const getConfig = async (id: number) => {
  try {
    return await axios.get(`configuration/${id}/`);
  } catch (error: any) {
    return error.message;
  }
};
