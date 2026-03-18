"use client";

import { NearbyPlaceData } from "@/app/api/get_nearby_places/[location]/route";
import getNearbyPlace from "@/app/calls/getNearbyPlaces";
import { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export interface MerchantName {
  name: string;
}

export default function NameController({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<NearbyPlaceData>();
  const form = useForm<MerchantName>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = useCallback<SubmitHandler<MerchantName>>(
    async (data: MerchantName) => {
      const name = data.name;

      const response = await getNearbyPlace(name);
      if (response) setData(response);
    },
    [],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      {data && (
        <>
          <br />
          {data.displayName && (
            <p>{`Name of business: ${data.displayName.text}`}</p>
          )}
          {data.formattedAddress && (
            <p>{`Business address: ${data.formattedAddress}`}</p>
          )}
          {data.websiteUri && <p>{`Business URL: ${data.websiteUri}`}</p>}
        </>
      )}
    </FormProvider>
  );
}
