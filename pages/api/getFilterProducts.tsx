import type { NextApiRequest, NextApiResponse } from "next";
import getFilterProducts from "@/utils/api/getFilterProducts";
import {
  RequestGetFilterProductsType,
  ResultGetFilterProductsType,
} from "@/types/getFilterProducts";

export default async function handler(
  req: NextApiRequest & { query: RequestGetFilterProductsType },
  res: NextApiResponse<ResultGetFilterProductsType>,
) {
  const result = await getFilterProducts(req.query);

  return res.json(result);
}
