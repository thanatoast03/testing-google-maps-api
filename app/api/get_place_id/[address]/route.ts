import googleCall from "../../../util/googleCall";
import { NextRequest, NextResponse } from "next/server";
import { Client } from "@googlemaps/google-maps-services-js";

interface AddressList {
  places: {
    [k: number]: {
      name: string;
    };
  };
}

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/get_place_id/[address]">,
) {
  try {
    const { address } = await ctx.params;

    const { places }: AddressList = await googleCall({
      url: "https://places.googleapis.com/v1/places:searchText",
      method: "POST",
      fieldMask: "places.name",
      body: {
        textQuery: address,
      },
    });

    return NextResponse.json(places[0]?.name);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
