"use client";

import { useFormContext } from "react-hook-form";
import { LocationName } from "./LocationController";
import FormError from "./FormError";

export default function LocationInput({
  ...props
}: React.ComponentProps<"input">) {
  const { register } = useFormContext<LocationName>();

  return (
    <input
      {...register("name", {
        required: {
          message: "Address required.",
          value: true,
        },
      })}
      {...props}
    />
  );
}
