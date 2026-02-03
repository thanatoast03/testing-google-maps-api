"use server";

import axios, { Method, RawAxiosRequestHeaders } from "axios";

export default async function googleCall({
  url,
  method,
  body,
  fieldMask,
  additionalHeaders,
  keyInURL = false,
}: {
  url: string;
  method: Method;
  body?: any;
  fieldMask?: string;
  additionalHeaders?: Record<string, string>;
  keyInURL?: boolean;
}) {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const actualURL = keyInURL
    ? `${url}${url.includes("?") ? "&" : "?"}key=${key}`
    : url;
  let headers: RawAxiosRequestHeaders = {
    "X-Goog-Api-Key": key,
    "X-Goog-FieldMask": fieldMask,
    ...additionalHeaders,
  };

  if (method === "POST" || method === "post")
    headers["Content-Type"] = "application/json";

  const response = await axios({
    url: actualURL,
    method,
    headers,
    data: body,
  });

  return response.data;
}
