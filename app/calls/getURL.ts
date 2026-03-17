import getNearbyPlaces from "./getNearbyPlaces";

export default async function getURL(address: string) {
  try {
    const nearbyPlaces = await getNearbyPlaces(address);

    if (!nearbyPlaces) {
      console.error("No places found.");
      return;
    }

    console.log(nearbyPlaces);

    return nearbyPlaces;
  } catch (error) {
    console.error(error);
    return;
  }
}
