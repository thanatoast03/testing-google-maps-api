import apiCall from "../util/apiCall";
import getPlaceId from "../util/getPlaceId";

export default async function getPlaceIdFromAddress(address: string) {
  const placeId = await apiCall({
    url: `/get_place_id/${address}`,
    method: "GET",
  });

  if (!placeId) throw new Error("No results found.");

  return getPlaceId(placeId);
}
