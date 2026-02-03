import apiCall from "../util/apiCall";

export default async function getPlaceDetailsFromPlaceId(place_id: string) {
  return await apiCall({
    url: `/get_details/${place_id}`,
    method: "GET",
  });
}
