import { globalConfig } from "@/theme/config";
import axios from "axios";

export default async function handler(req, res) {

  const {name,phone,region,time,dich_vu_tham_my,bac_sy} = req.body

  try {
      const request = await axios.post(`${globalConfig.api_url}/form-lien-he`, {name,phone,region,time,dich_vu_tham_my,bac_sy})
      res.status(200).json(request?.data);
  } catch (error) {
    console.log("🚀 ~ handler ~ error:", error?.response?.data?.error)
    res.status(200).json("lỗi rồi");
  }

}
