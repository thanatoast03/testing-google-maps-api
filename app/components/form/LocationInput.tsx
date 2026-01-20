"use client";

import { useFormContext } from "react-hook-form";
import { LocationName } from "./LocationController";

export default function LocationInput() {
  const { register } = useFormContext<LocationName>();

  return (
    <input
      {...register("name", {
        required: true,
      })}
      className="w-full flex bg-white text-black"
    />
  );
}
