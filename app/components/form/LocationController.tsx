"use client";

import getSatelliteImageURL from "@/app/util/getSatelliteImageURL";
import { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import GoogleEmbedToImage, { EmbedReturn } from "../ui/GoogleEmbedToImage";
import place from "../ui/google_embed/place";
import getPlaceId from "@/app/util/getPlaceId";
import getPlaceDetailsFromPlaceId from "@/app/calls/getLocationFromPlaceId";
import { Location } from "@/app/api/get_location/[place_id]/route";
import getLatLong from "@/app/calls/getLatLong";
import getNearbyPlace from "@/app/calls/getNearbyPlaces";

export interface LocationName {
  name: string;
}

export default function LocationController({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imgURL, setImgURL] = useState<string>();
  // const [details, setDetails] = useState<EmbedReturn>();
  const form = useForm<LocationName>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = useCallback<SubmitHandler<LocationName>>(
    async (data: LocationName) => {
      const address = data.name;

      // Comment out from here...
      const location = await getLatLong(address);
      const nearbyPlace = await getNearbyPlace(address);

      if (!location) {
        console.error("Location not found.");
        return;
      }
      // to here.

      // Comment out from here...
      // const placeId: string = await getPlaceIdFromAddress(address);

      // if (!placeId) {
      //   console.error("place_id not found.");
      //   return;
      // }

      // const actualPlaceId = getPlaceId(placeId);
      // const reformattedPlaceId = `place_id:${actualPlaceId}`;

      // const placeDetails: Location | undefined =
      //   await getPlaceDetailsFromPlaceId(actualPlaceId);

      // if (!placeDetails) {
      //   console.error("Place details not found.");
      //   return;
      // }

      // const { latitude, longitude } = placeDetails.location;
      // const locationStr = `${latitude},${longitude}`;
      // to here when switching.

      setImgURL(getSatelliteImageURL(location));

      // setDetails(
      //   place({
      //     q: reformattedPlaceId,
      //     zoom: "20",
      //     maptype: "satellite",
      //     center: locationStr,
      //   }),
      // );
    },
    [],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children}
        {/* {details && (
          <GoogleEmbedToImage
            mapMode={details.mapMode}
            parameters={details.parameters}
            className="flex-col p-3"
            style={{ border: 0 }}
            loading="lazy"
          />
        )} */}
        {imgURL && <img src={imgURL} className="pt-3" />}
      </form>
    </FormProvider>
  );
}
