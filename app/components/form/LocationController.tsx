"use client";

import { getAddresses } from "@/app/server_functions/getAddresses";
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
      console.log(data); // eventually turn into axios call or smth with google
      const result = await getAddresses({ text: data });
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
