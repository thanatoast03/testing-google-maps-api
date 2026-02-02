"use client";

import { useFormContext } from "react-hook-form";

export default function SubmitButton() {
  const { formState } = useFormContext();

  return (
    <button
      disabled={formState.isSubmitting}
      type="submit"
      className="bg-blue-600 rounded py-2 px-3 hover:cursor-pointer"
    >
      Submit
    </button>
  );
}
