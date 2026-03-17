import googleCall from "@/app/util/googleCall";
import { NextRequest, NextResponse } from "next/server";

export interface NearbyPlaceData {
  displayName?: {
    text: string;
  };
  formattedAddress: string;
  websiteUri?: string;
}

export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/get_nearby_places/[location]">,
): Promise<NextResponse<NearbyPlaceData[] | { error: unknown }>> {
  try {
    const { location } = await ctx.params;
    const [latitude, longitude] = location
      .split(":")
      .map((coordinate) => Number(coordinate));

    const response: { places: NearbyPlaceData[] } = await googleCall({
      url: `https://places.googleapis.com/v1/places:searchNearby`,
      method: "POST",
      fieldMask: "places.displayName,places.formattedAddress,places.websiteUri",
      body: {
        maxResultCount: 3,
        locationRestriction: {
          circle: {
            center: {
              latitude,
              longitude,
            },
            radius: 20.0,
          },
        },
      },
    });

    return NextResponse.json(response.places);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
