import getLocationFromPlaceId from "./getLocationFromPlaceId";
import getPlaceIdFromAddress from "./getPlaceIdFromAddress";

export default async function getLatLong(
  address: string,
): Promise<{ latitude: string; longitude: string } | undefined> {
  const placeId: string | undefined = await getPlaceIdFromAddress(address);

  const details = await getLocationFromPlaceId(placeId);

  if (!details) {
    console.error("Unable to find latitude and longitude.");
    return;
  }

  return details.location;
}
