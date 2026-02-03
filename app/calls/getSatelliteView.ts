import apiCall from "../util/apiCall";
import getPlaceId from "../util/getPlaceId";

export default async function getSatelliteView(
  address: string,
): Promise<{ latitude: string; longitude: string } | undefined> {
  const placeId: string | undefined = await apiCall({
    url: `/get_place_id/${address}`,
    method: "GET",
  });

  console.log(placeId);
  if (!placeId) {
    console.error("No results found.");
    return;
  }

  const actualPlaceId = getPlaceId(placeId);

  const details = await apiCall({
    url: `/get_details/${actualPlaceId}`,
    method: "GET",
  });

  console.log(details);
  if (!details) {
    console.error("Unable to find latitude and longitude.");
    return;
  }

  return details.location;
}
