import googleCall from "@/app/util/googleCall";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/get_url/[place_id]">,
) {
  try {
    const { place_id } = await ctx.params;

    const result = await googleCall({
      url: `https://places.googleapis.com/v1/places/${place_id}`,
      method: "GET",
      fieldMask: "googleMapsUri,addressDescriptor",
    });

    console.warn(
      "Getting the website URI is expensive from the Google Maps API. Do not spam this function.",
    );
    console.log(result);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
