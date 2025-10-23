import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export const quickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    updateQuickView: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;
