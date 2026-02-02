"use server";

import axios, { Method, RawAxiosRequestHeaders } from "axios";

export default async function googleCall({
  url,
  method,
  body,
  fieldMask,
}: {
  url: string;
  method: Method;
  body?: any;
  fieldMask?: string;
}) {
  let headers: RawAxiosRequestHeaders = {
    "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
    "X-Goog-FieldMask": fieldMask,
  };

  if (method === "POST" || method === "post")
    headers["Content-Type"] = "application/json";

  const response = await axios({
    url,
    method,
    headers,
    data: body,
  });

  return response.data;
}
