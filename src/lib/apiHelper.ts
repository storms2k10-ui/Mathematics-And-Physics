/**
 * Safe API request utility that handles HTML error pages, non-JSON responses,
 * and network failures gracefully without throwing "Unexpected token 'T'" errors.
 */

export interface SafeFetchResult<T = any> {
  ok: boolean;
  status: number;
  data: T | null;
  error?: string;
}

export async function safeFetchJson<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<SafeFetchResult<T>> {
  try {
    const response = await fetch(input, init);
    const contentType = response.headers.get('content-type') || '';
    const text = await response.text();

    let parsedData: any = null;
    let parseError: string | undefined;

    if (text && text.trim().length > 0) {
      // If content-type is HTML or text starts with '<' or plain text error
      const trimmed = text.trim();
      if (
        (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
        (trimmed.startsWith('[') && trimmed.endsWith(']'))
      ) {
        try {
          parsedData = JSON.parse(trimmed);
        } catch (e: any) {
          parseError = 'Invalid JSON response from server';
        }
      } else {
        parseError = trimmed.length < 120 ? trimmed : 'Non-JSON response received';
      }
    }

    if (!response.ok) {
      const errorMsg =
        parsedData?.error ||
        parsedData?.message ||
        parseError ||
        `Request failed with status ${response.status}`;
      return {
        ok: false,
        status: response.status,
        data: parsedData,
        error: errorMsg,
      };
    }

    return {
      ok: true,
      status: response.status,
      data: parsedData,
      error: parseError,
    };
  } catch (err: any) {
    return {
      ok: false,
      status: 0,
      data: null,
      error: err?.message || 'Network request failed',
    };
  }
}
