"use client";

import getSatelliteView from "@/app/calls/getSatelliteView";
import apiCall from "@/app/util/apiCall";
import getPlaceId from "@/app/util/getPlaceId";
import getSatelliteImageURL from "@/app/util/getSatelliteImageURL";
import { useCallback, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export interface LocationName {
  name: string;
}

export default function LocationController({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imgURL, setImgURL] = useState<string>();
  const form = useForm<LocationName>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = useCallback<SubmitHandler<LocationName>>(
    async (data: LocationName) => {
      const address = data.name;
      const location = await getSatelliteView(address);

      if (!location) {
        console.error("Location not found.");
        return;
      }

      setImgURL(getSatelliteImageURL(location));
    },
    [],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children}
        {imgURL && <img src={imgURL} className="flex-col p-3" />}
      </form>
    </FormProvider>
  );
}
