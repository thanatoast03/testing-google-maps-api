import googleCall from "../../../util/googleCall";
import { NextRequest, NextResponse } from "next/server";

interface AddressList {
  places: {
    [k: number]: {
      name: string;
    };
  };
}

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/get_place_id/[query]">,
) {
  try {
    const { query } = await ctx.params;

    const { places }: AddressList = await googleCall({
      url: "https://places.googleapis.com/v1/places:searchText",
      method: "POST",
      fieldMask: "places.name",
      body: {
        textQuery: query,
      },
    });

    return NextResponse.json(places[0]?.name);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
