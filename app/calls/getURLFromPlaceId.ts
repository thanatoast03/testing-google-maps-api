import apiCall from "../util/apiCall";

export default async function getURLFromPlaceId(place_id: string) {
  return await apiCall({
    url: `/get_url/${place_id}`,
    method: "GET",
  });
}
