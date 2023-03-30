// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects
type Fetch = typeof fetch;
type InterceptorAction = {
  onResponse: (response: Response) => Response;
};

class FetchInterceptor {
  private origin: Fetch;
  private interceptors: InterceptorAction[];
  constructor() {
    this.origin = window.fetch;
    this.interceptors = [];
  }

  private run(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    return new Promise((resolve, reject) => {
      window.__fetch = this.origin;
      window
        .__fetch(input, init)
        .then((response) => {
          const interceptedResponse = this.interceptors.reduce(
            (interceptingResponse, currentInterceptor) => {
              return currentInterceptor.onResponse(interceptingResponse);
            },
            response
          );

          resolve(interceptedResponse);
        })
        .catch((error) => {
          reject(error);
        });
      delete window.__fetch;
    });
  }

  public add(action: InterceptorAction) {
    this.interceptors.push(action);
  }

  public clean() {
    this.interceptors = [];
  }

  public on() {
    window.fetch = this.run.bind(this);
  }

  public off() {
    window.fetch = this.origin;
  }
}

export const fetchInterceptor = new FetchInterceptor();
