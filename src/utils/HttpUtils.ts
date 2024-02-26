import querystring from 'querystring';

import { HttpMethod, StatusCode } from '@/common/enums';
import type { HttpRequest } from '@/interfaces/common.interfaces';

export default class HttpUtils {
  static async request<TDataResponse = any>(init: HttpRequest, isFormData = false) {
    // const session = await getSession();
    try {
      const defaultHeaders = {
        'Content-type': 'application/json',
        Accept: 'application/json',
        // Authorization: `Bearer ${session?.user.accessToken} ` || '',
      };
      const { url, method = HttpMethod.GET, body, headers, extraOptions } = init;
      const requestInit: Pick<HttpRequest, 'body' | 'headers' | 'method' | 'extraOptions'> = {
        method,
        headers: {
          ...defaultHeaders,
          ...headers,
        },
        ...extraOptions,
      };
      let reqURL = url;
      if (body) {
        switch (method) {
          case HttpMethod.PUT:
          case HttpMethod.PATCH:
          case HttpMethod.POST:
            requestInit.body = JSON.stringify(body);
            break;
          default:
            reqURL = `${url}?${querystring.stringify(body)}`;
            break;
        }
      }
      let res: Response;
      if (isFormData) {
        res = await fetch(reqURL, {
          method,
          body,
          headers: {
            // Authorization: `Bearer ${session?.user.accessToken} ` || '',
            ...headers,
          },
        });
      } else {
        res = await fetch(reqURL, requestInit);
      }
      const result: TDataResponse = await res.json();
      if (res.ok) {
        return result;
      }
      return await Promise.reject(result);
    } catch (error: any) {
      switch (error.code) {
        case StatusCode.Unauthorized:
          break;

        default:
          break;
      }
      return Promise.reject(error);
    }
  }

  // https://nextjs.org/docs/app/building-your-application/routing/router-handlers
  // static jsonResponse(options: HttpResponseType) {
  //   const { data, httpStatus = 200, status = 'success' } = options;
  //   return new Response(
  //     JSON.stringify({
  //       status,
  //       data,
  //     }),
  //     {
  //       status: httpStatus,
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     },
  //   );
  // }

  // static success(data: any) {
  //   // return this.jsonResponse({ data })
  //   return NextResponse.json({
  //     status: 'success',
  //     data,
  //   });
  // }

  // static badRequest(data: any) {
  //   return this.jsonResponse({
  //     data,
  //     httpStatus: 400,
  //     status: 'error',
  //   });
  // }

  // static notFound(data: any) {
  //   return this.jsonResponse({
  //     data,
  //     httpStatus: 404,
  //     status: 'error',
  //   });
  // }
}
