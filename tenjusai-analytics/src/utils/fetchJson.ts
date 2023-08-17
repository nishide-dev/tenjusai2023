export class FetchError extends Error {
    response: Response;
    data: {
      message: string;
    };
    constructor({
      message,
      response,
      data,
    }: {
      message: string;
      response: Response;
      data: {
        message: string;
      };
    }) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(message);
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, FetchError);
      }
  
      this.name = "FetchError";
      this.response = response;
      this.data = data ?? { message: message };
    }
  }
  
/**
 * Fetch data as JSON from the URL
 * @param input request url or input object
 * @param method request method
 * @param body request body
 * @param additionalInit additional parameters
 * @returns response data (JSON)
 */
export default async function fetchJson<JSON = unknown>(
  input: RequestInfo,
  method: "GET" | "POST" | "DELETE" = "GET",
  body?: any,
  additionalInit?: RequestInit
): Promise<JSON> {
  const init: RequestInit = {
    method: method ?? "GET",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    ...additionalInit,
  };
  const response = await fetch(input, init);
  // const response = await fetch(input, "POST", { count: count });

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  throw new FetchError({
    message: response.statusText,
    response,
    data,
  });
}