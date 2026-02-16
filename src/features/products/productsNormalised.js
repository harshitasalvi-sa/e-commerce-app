//--------------APPLIED NORMALIZATION--------------

import { normalize, schema } from "normalizr";

const productEntity = new schema.Entity("products");

const productListSchema = [productEntity];

export const normalizeProducts = (products) => {
  return normalize(products, productListSchema);
};
