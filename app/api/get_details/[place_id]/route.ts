import googleCall from "@/app/util/googleCall";
import { NextRequest, NextResponse } from "next/server";

interface Location {
  location: {
    latitude: number;
    longitude: number;
  };
}

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/get_details/[place_id]">,
) {
  try {
    const { place_id } = await ctx.params;

    const result: Location = await googleCall({
      url: `https://places.googleapis.com/v1/places/${place_id}`,
      method: "GET",
      fieldMask: "location",
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
