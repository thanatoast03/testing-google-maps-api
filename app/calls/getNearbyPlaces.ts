import { NearbyPlaceData } from "../api/get_nearby_places/[location]/route";
import apiCall from "../util/apiCall";
import getLatLong from "./getLatLong";

export default async function getNearbyPlace(
  address: string,
): Promise<NearbyPlaceData | undefined> {
  try {
    const location: { latitude: string; longitude: string } | undefined =
      await getLatLong(address);
    if (!location) throw new Error("Place not found.");

    const { latitude, longitude } = location;

    const response = await apiCall({
      url: `/get_nearby_places/${latitude}:${longitude}`,
      method: "GET",
    });

    console.log(response);

    return response[0];
  } catch (error) {
    console.error(error);
    return;
  }
}
