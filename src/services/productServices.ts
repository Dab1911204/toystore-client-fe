import { get } from "@/utils/request";

export const ProductService = {
  getListProduct:(url:string,options?:any)=>get<any>(url),
};

