"use client";

import apiCall from "@/app/util/apiCall";
import { useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export interface LocationName {
  name: string;
}

export default function LocationController({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm<LocationName>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = useCallback<SubmitHandler<LocationName>>(
    async (data: LocationName) => {
      const address = data.name;
      const result = await apiCall({
        url: `/api/get_place_id/${address}`,
        method: "GET",
      });

      console.log(result);
    },
    [],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
