import axios, { Method, RawAxiosRequestHeaders } from "axios";

export default async function apiCall({
  url,
  method,
  body,
}: {
  url: string;
  method: Method;
  body?: object;
}) {
  try {
    let headers: RawAxiosRequestHeaders = {};
    if (method.toLowerCase() === "post")
      headers["Content-Type"] = "application/json";

    const response = await axios({
      url,
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
