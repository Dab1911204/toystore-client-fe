import { get } from "@/utils/request";

export const CategoryService = {
  getListCategory:(url:string)=>get<any>(url),
};

