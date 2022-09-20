import { NUMBER_OF_IMAGES } from "../constants";

/*
  API Interface
*/
export interface ApiPayload {
  fileSizeBytes: number;
  url: string;
}

/**
 * Method to fetch images via API
 * @returns ApiPayload  
 */
function fetchApi(): Promise<ApiPayload> {
  return fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((res) => {
      /*
        Excluding webm and mp4 values.
      */
      if (res.url.indexOf(".mp4") > -1 || res.url.indexOf(".webm") > -1) {
        return fetchApi();
      }

      return res;
    });
}

/*
  Fetches images from API 6 times
*/
export const fetchWoof = () => {
  const response: Promise<ApiPayload[]> = Promise.all(
    Array.from({ length: NUMBER_OF_IMAGES }).map(() => fetchApi())
  );

  return response;
};
