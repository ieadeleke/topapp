import axios from "axios";
import { BASE_URL } from "./constants/strings";
import { getAccessToken } from "./auth/cookies";
import ErrorBody from "./ErrorBody";

type RequestType = "GET" | "POST" | "PUT" | "DELETE";
type RequestConfig = {
  path: string;
  method?: RequestType;
  body?: any;
  headers?: any
};

export async function request(params: RequestConfig) {
  const url = `${BASE_URL}/${params.path}`;
  const token = await getAccessToken();
  try {
    const response = await fetch(url, {
      method: params.method ?? "POST",
      body: params.body ? JSON.stringify(params.body) : undefined,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        ...params.headers,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new ErrorBody(
        response.status,
        error?.message ?? response.statusText
      );
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}