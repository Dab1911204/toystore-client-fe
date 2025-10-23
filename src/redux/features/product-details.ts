import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState: InitialState = {
  value: {
    id: "",
    productName: "",
    description: "",
    price: 0,
    quantity: 0,
    supplier: {
      id: "",
      name: null,
    },
    category: {
      id: "",
      categoryName: "",
      parentId: null,
      parentName: null,
    },
    promotion: null,
    image: [],
    productStatus: 0,
    slug: "",
    isDeleted: false,
    createdBy: "",
    createdOn: "",
    updatedBy: "",
    updatedOn: "",
  },
};

export const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
