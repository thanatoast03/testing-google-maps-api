"use client";

import { useFormContext } from "react-hook-form";
import { MerchantName } from "./NameController";

export default function NameInput({ ...props }: React.ComponentProps<"input">) {
  const { register } = useFormContext<MerchantName>();

  return (
    <input
      {...register("name", {
        required: {
          message: "Merchant name required.",
          value: true,
        },
      })}
      {...props}
    />
  );
}
