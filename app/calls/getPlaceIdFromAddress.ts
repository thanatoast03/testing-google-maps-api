import apiCall from "../util/apiCall";

export default async function getPlaceIdFromAddress(address: string) {
  return await apiCall({
    url: `/get_place_id/${address}`,
    method: "GET",
  });
}
