import axios from "axios";
import {sepolia } from "../models/Chain.ts";

export class TransactionService {
  static API_URL = "https://deep-index.moralis.io/api/v2";
  static API_KEY =
    "xcrD2RZ8X0N8Y5bWBydGVfeDd0j7KOndWEp7LKVo2s00TrRt5AN4Zvta2MScRMBr";
  // "EuwYtjWwWHGbnwsCnGauMtMMaEQZugtjaws2ybm2ZpSR15a8vzl6QUPkEUWHTOCU";

  static async getTransactions(address: string) {
    const options = {
      method: "GET",
      url: `${TransactionService.API_URL}/${address}`,
      params: { chain: sepolia.name.toLowerCase() },
      headers: {
        accept: "application/json",
        "X-API-Key": TransactionService.API_KEY,
      },
    };

    const response = await axios.request(options);
    return response;
  }
}
