import apiCall from "../util/apiCall";
import getPlaceId from "../util/getPlaceId";
import getPlaceDetailsFromPlaceId from "./getPlaceDetailsFromPlaceId";
import getPlaceIdFromAddress from "./getPlaceIdFromAddress";

export default async function getSatelliteView(
  address: string,
): Promise<{ latitude: string; longitude: string } | undefined> {
  const placeId: string | undefined = await getPlaceIdFromAddress(address);
  console.log(placeId);
  if (!placeId) {
    console.error("No results found.");
    return;
  }

  const actualPlaceId = getPlaceId(placeId);
  const details = await getPlaceDetailsFromPlaceId(actualPlaceId);

  console.log(details);
  if (!details) {
    console.error("Unable to find latitude and longitude.");
    return;
  }

  return details.location;
}
