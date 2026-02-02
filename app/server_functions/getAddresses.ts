"use server";

import { LocationName } from "../components/form/LocationController";
import googleCall from "../util/googleCall";

export async function getAddresses({ text }: { text: LocationName }) {
  try {
    const { places } = await googleCall({
      url: "https://places.googleapis.com/v1/places:searchText",
      method: "POST",
      fieldMask: "places.name",
      body: {
        textQuery: text.name,
      },
    });

    return places;
  } catch (error) {
    return error;
  }
}
