import axios from "axios";
// import generateID from "./uniqueIDGenerator";
// import {
//   getAppVersionForHeader, getUserAgentForHeader, showDownTimeTickerPopUp, getGenericErrorObject,
// } from "./IMUtils";
import { config } from "../../IMConfig";

axios.defaults.timeout = 35000;

/**
* Checks if a network request came back fine, and throws an error if not
*/
function validateStatus(status) {
  if ((status >= 200 && status < 300) || status === 403 || status === 400) {
    return true;
  }
  return false;
}

function addPOSTHeaders(options = {}) {
  return {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type":
        (options.headers && options.headers["Content-Type"]) || "application/json; charset=UTF-8",
      // "X-Request-Id": (options.headers && options.headers["X-Request-Id"]) || `${generateID()}`,
      // "User-Agent": getUserAgentForHeader(),
      // "App-Version": getAppVersionForHeader(),
    },
  };
}

function parseBody(options = {}) {
  return options.body ? {
    ...options,
    body: JSON.stringify(options.body),
  } : options;
}

function parseResponse(responseParam) {
  
  let response = responseParam.data;
  response = {
      data: response
  };

  return response;
}


const rawGenericFetch = options => axios(options)
    .then(response => parseResponse(response))
    .catch((err) => {    
        throw error;
    });

/**
* Requests a URL, returning a promise
*
* @param {string} url The URL we want to request
* @param {object} [options] The options we want to pass to "fetch"
*
* @return {object} The response data
*/
export default function genericFetch({
  url,
  options,
  formData,
}) {
  const optionsWithHeaders = addPOSTHeaders(options);
  let parsedOptions;
  if (formData) {
    parsedOptions = optionsWithHeaders;
    parsedOptions.timeout = 600000;
  } else {
    parsedOptions = parseBody(optionsWithHeaders);
  }

  parsedOptions.url = url;
  parsedOptions.data = parsedOptions.body;
  
  parsedOptions.validateStatus = validateStatus;
//   parsedOptions.onUploadProgress = options.onUploadProgress;
  return rawGenericFetch(parsedOptions);
}
