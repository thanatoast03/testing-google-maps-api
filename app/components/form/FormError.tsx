"use client";

import { useFormContext } from "react-hook-form";

export default function FormError({ name }: { name: string }) {
  const { formState } = useFormContext();
  const error = formState.errors[name];

  return error ? (
    <p className="text-red-500">{error.message?.toString()}</p>
  ) : null;
}
