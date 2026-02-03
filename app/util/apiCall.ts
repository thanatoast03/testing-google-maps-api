import axios, { Method, RawAxiosRequestHeaders } from "axios";

export default async function apiCall({
  url,
  method,
  body,
  additionalHeaders,
}: {
  url: string;
  method: Method;
  body?: object;
  additionalHeaders?: Record<string, string>;
}) {
  try {
    let headers: RawAxiosRequestHeaders = { ...additionalHeaders };
    if (method.toLowerCase() === "post")
      headers["Content-Type"] = "application/json";

    const response = await axios({
      url: "/api" + url,
      method,
      headers,
      data: body,
    });

    if (method.toLowerCase() === "get" && !response.data)
      throw new Error("No data retrieved.");

    return response.data;
  } catch (error) {
    // If API call fails, do not return anything.
    console.error(error);
    return undefined;
  }
}
