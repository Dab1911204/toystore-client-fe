import { get } from "@/utils/request";

export const CategoryService = {
  getCategory:(url:string)=>get<any>(url),
};

