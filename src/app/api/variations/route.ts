import { NextRequest, NextResponse } from "next/server";
import { wooCommerceClient } from "../../../woocommerce/client";

export const GET = async (request: NextRequest) => {
  const productId = request.nextUrl.searchParams.get("productId");

  const result = await wooCommerceClient.get(
    `products/${productId}/variations`,
    {
      per_page: 100,
    }
  );

  return NextResponse.json(result.data);
};
