import apiCall from "../util/apiCall";

export default async function getLocationFromPlaceId(place_id: string) {
  return await apiCall({
    url: `/get_location/${place_id}`,
    method: "GET",
  });
}
